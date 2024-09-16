<?php 


namespace App\Service;

use GuzzleHttp\Client;
use Psr\Log\LoggerInterface;

class OpenAIService
{
    private $client;
    private $apiKey;
    private $logger;

    public function __construct(string $apiKey, LoggerInterface $logger)
    {
        $this->client = new Client(['base_uri' => 'https://api.openai.com/v1/']);
        $this->apiKey = $apiKey;
        $this->logger = $logger;
    }

    public function generateTodos(string $prompt): array
    {
        $defaultMessage = "Create a list of specific, actionable todos with clear titles and descriptions based on the following prompt. Each title should start with 'X.0' and each description should start with 'X.1', where X is the todo number. Separate each todo with a newline. Here are examples for different categories: also make sure you give steps on how to accomplish that thing, and always answer in the same language as the request text" .
                          "Category: Training biceps at the gym" .
                          "1.0: Perform barbell curls 1.1: Do 3 sets of 12 reps of barbell curls to target the biceps." .
                          "2.0: Perform hammer curls 2.1: Do 3 sets of 10 reps of hammer curls to engage the brachialis muscle." .
                          "Category: Cleaning the apartment" .
                          "1.0: Vacuum the living room 1.1: Use the vacuum cleaner to thoroughly clean the carpet and remove any dust or debris." .
                          "2.0: Clean the kitchen counters 2.1: Wipe down all kitchen surfaces with a disinfectant spray to remove stains and bacteria." .
                          "Category: Grocery shopping" .
                          "1.0: Buy fresh vegetables 1.1: Purchase a variety of fresh vegetables such as carrots, broccoli, and spinach." .
                          "2.0: Buy dairy products 2.1: Get milk, cheese, and yogurt to ensure a good supply of dairy products.";

        $fullPrompt = $defaultMessage . "\nPrompt: " . $prompt;

        try {
            $response = $this->client->post('chat/completions', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->apiKey,
                    'Content-Type' => 'application/json',
                ],
                'json' => [
                    'model' => 'gpt-3.5-turbo',
                    'messages' => [
                        [
                            'role' => 'system',
                            'content' => 'You are a helpful assistant that generates todo lists. Ensure that each todo has a clear title and description, formatted as "X.0: Title\nX.1: Description". Separate each todo with a newline. Each todo should be an actionable step, not general advice.'
                        ],
                        [
                            'role' => 'user',
                            'content' => $fullPrompt
                        ]
                    ],
                    'max_tokens' => 350,
                ],
            ]);

            $data = json_decode($response->getBody()->getContents(), true);
            $todosText = explode("\n", trim($data['choices'][0]['message']['content']));
            $todos = [];
            $currentTodo = [];

            foreach ($todosText as $line) {
                if (preg_match('/^(\d+)\.0:(.*)$/', $line, $matches)) {
                    if (!empty($currentTodo)) {
                        $todos[] = $currentTodo;
                    }
                    $currentTodo = [
                        'title' => trim($matches[2]),
                        'description' => '',
                        'status' => false
                    ];
                } elseif (preg_match('/^(\d+)\.1:(.*)$/', $line, $matches)) {
                    if (!empty($currentTodo)) {
                        $currentTodo['description'] = trim($matches[2]);
                    }
                }
            }
            if (!empty($currentTodo)) {
                $todos[] = $currentTodo;
            }

            return $todos;

        } catch (\Exception $e) {
            $this->logger->error('Error communicating with OpenAI: ' . $e->getMessage());
            throw $e;
        }
    }
}

<?php


namespace App\Controller;

use App\Entity\Todo;
use App\Entity\Room;
use App\Repository\TodoRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\SerializerInterface;
use App\Service\OpenAIService;
use Psr\Log\LoggerInterface;

class TodoController extends AbstractController
{
    private $serializer;
    private $openAIService;
    private $logger;

    public function __construct(SerializerInterface $serializer, OpenAIService $openAIService, LoggerInterface $logger)
    {
        $this->serializer = $serializer;
        $this->openAIService = $openAIService;
        $this->logger = $logger;
    }

    #[Route('/api/todos', name: 'api_todos', methods: ['GET'])]
    public function index(Request $request, TodoRepository $todoRepository): JsonResponse
    {
        $roomId = $request->query->get('room_id');
        if ($roomId) {
            $todos = $todoRepository->findBy(['room' => $roomId], ['order' => 'ASC']);
        } else {
            $todos = $todoRepository->findAll();
        }

        $data = $this->serializer->normalize($todos, null, ['groups' => 'todo:read']);
        return $this->json($data);
    }

    #[Route('/api/todos', name: 'api_todos_create', methods: ['POST'])]
    public function create(Request $request, EntityManagerInterface $em, TodoRepository $todoRepository): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        $todo = new Todo();
        $todo->setTitle($data['title']);
        $todo->setDescription($data['description'] ?? null);
        $todo->setStatus($data['status']);
        
        $room = $em->getRepository(Room::class)->find($data['room_id']);
        if (!$room) {
            return $this->json(['error' => 'Room not found'], 404);
        }
        $todo->setRoom($room);

        // Get the highest current order value in the room and increment it
        $maxOrder = $todoRepository->createQueryBuilder('t')
            ->select('MAX(t.order)')
            ->where('t.room = :room')
            ->setParameter('room', $room)
            ->getQuery()
            ->getSingleScalarResult();
        
        $todo->setOrder($maxOrder + 1);

        $em->persist($todo);
        $em->flush();

        $data = $this->serializer->normalize($todo, null, ['groups' => 'todo:read']);
        return $this->json($data);
    }

    #[Route('/api/todos/{id}', name: 'api_todos_show', methods: ['GET'])]
    public function show(Todo $todo): JsonResponse
    {
        $data = $this->serializer->normalize($todo, null, ['groups' => 'todo:read']);
        return $this->json($data);
    }

    #[Route('/api/todos/{id}', name: 'api_todos_update', methods: ['PUT', 'PATCH'])]
    public function update(Request $request, Todo $todo, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        if (isset($data['title'])) {
            $todo->setTitle($data['title']);
        }
        if (isset($data['description'])) {
            $todo->setDescription($data['description']);
        }
        if (isset($data['status'])) {
            $todo->setStatus($data['status']);
        }
        if (isset($data['order'])) {
            $todo->setOrder($data['order']);
        }
        $em->flush();

        $data = $this->serializer->normalize($todo, null, ['groups' => 'todo:read']);
        return $this->json($data);
    }

    #[Route('/api/todos/{id}', name: 'api_todos_delete', methods: ['DELETE'])]
    public function delete(Todo $todo, EntityManagerInterface $em): JsonResponse
    {
        $em->remove($todo);
        $em->flush();

        return $this->json(null, 204);
    }

    #[Route('/api/todos/update-order', name: 'api_todos_update_order', methods: ['POST'])]
    public function updateOrder(Request $request, EntityManagerInterface $em): JsonResponse
    {
        $data = json_decode($request->getContent(), true);
        foreach ($data as $todoData) {
            $todo = $em->getRepository(Todo::class)->find($todoData['id']);
            if ($todo) {
                $todo->setOrder($todoData['order']);
                $em->persist($todo);
            }
        }
        $em->flush();

        return new JsonResponse(['status' => 'success']);
    }

    #[Route('/api/generate-todos', name: 'generate_todos', methods: ['POST'])]
    public function generateTodos(Request $request, EntityManagerInterface $em): JsonResponse
    {
        try {
            $data = json_decode($request->getContent(), true);
            $prompt = $data['prompt'] ?? '';

            $generatedTodos = $this->openAIService->generateTodos($prompt);

            $room = $em->getRepository(Room::class)->find($data['room_id']);
            if (!$room) {
                return $this->json(['error' => 'Room not found'], 404);
            }

            $todos = [];
            foreach ($generatedTodos as $todoData) {
                $todo = new Todo();
                $todo->setTitle($todoData['title']);
                $todo->setDescription($todoData['description']);
                $todo->setStatus($todoData['status']);
                $todo->setRoom($room);

                $maxOrder = $em->getRepository(Todo::class)
                    ->createQueryBuilder('t')
                    ->select('MAX(t.order)')
                    ->where('t.room = :room')
                    ->setParameter('room', $room)
                    ->getQuery()
                    ->getSingleScalarResult();

                $todo->setOrder($maxOrder + 1);
                $em->persist($todo);
                $todos[] = $todo;
            }

            $em->flush();

            $data = $this->serializer->normalize($todos, null, ['groups' => 'todo:read']);
            return $this->json(['todos' => $data]);

        } catch (\Exception $e) {
            $this->logger->error('Error generating todos: ' . $e->getMessage());
            return $this->json(['error' => 'Internal Server Error'], 500);
        }
    }
}


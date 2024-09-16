# AI-Powered Todo App

Welcome to the **AI-Powered Todo App**! This app takes your to-do lists to the next level by using artificial intelligence to help you create tasks quickly. Organize tasks by rooms like Gym or Home and generate room-specific tasks with a simple description.

## Features

- **AI-Generated Tasks**: Describe your tasks in natural language, and the AI will convert them into to-do items for you.
- **Room-Based Organization**: Add "rooms" like `GYM`, `HOME`, or `WORK` to manage tasks in different contexts or locations.
- **Create Tasks for Each Room**: For each room, add relevant to-dos. For instance, in the `GYM` room, you can say things like *"arm training, warm-up,"* and the app will break this into manageable tasks.
- **Easy Task Management**: Add, edit, check off, or remove tasks effortlessly with a user-friendly interface.

## How It Works

1. **Create a Room**: Start by creating a room such as `GYM` or `HOME` to organize your tasks.
2. **Describe Your Tasks**: In each room, simply describe what you need to do. For example, in the Gym room, you can say:
   - *"I'm doing arm training, warm-up, and treadmill"*
   - The app will convert this into individual tasks such as:
     - **Arm training**
     - **Warm-up**
     - **Treadmill**
3. **Manage Your To-Dos**: View your tasks for each room and mark them as completed or edit them as needed.

## Example Workflow

1. Create a room called **GYM**.
2. Enter a task description like:
   - *"10-minute warm-up, arm exercises, 30 minutes on the treadmill"*
3. The AI will generate tasks such as:
   - **10-minute warm-up**
   - **Arm exercises**
   - **30 minutes on the treadmill**
4. You can now focus on completing your workout, checking off tasks as you go!

## How to Run the App

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/your-repo/ai-powered-todo-app.git
    ```

2. **Install Symfony Dependencies**:
    ```bash
    composer install
    ```

3. **Start the Symfony Server**:
    ```bash
    symfony server:start
    ```

4. **Install Frontend Dependencies**:
    In a separate terminal, navigate to the `assets` directory:
    ```bash
    cd assets
    npm install
    ```

5. **Run the Frontend Development Server**:
    ```bash
    npm run dev
    ```

6. **Open the App**:  
    The app will be available at `http://localhost:8000`.

## Feedback and Contributions

We encourage feedback and contributions! If you have suggestions or want to report issues, feel free to open an issue or submit a pull request.

---

Happy task managing! 🎉

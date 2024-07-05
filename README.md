Todo List App
A simple Todo List application built with React and Redux, allowing users to manage tasks with basic CRUD operations.

Features
Add new tasks with title, content, type, and date.
View tasks with details including status, type, and date.
Mark tasks as complete or incomplete.
Edit existing tasks.
Delete tasks.
Technologies Used
Frontend: React.js, Redux, HTML, CSS
State Management: Redux Toolkit
Styling: CSS Modules
Icons: React Icons
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/Shreetam01/To-Do-List
cd todo-list-app
Install dependencies:

bash
Copy code
npm install
Run the application:

bash
Copy code
npm start
Open your browser and visit http://localhost:3000 to view the app.

How to Use
Add Task: Click on the "Add New Task" button, fill out the form, and click "Add Task".
View Task: Tasks are displayed with details including status (complete or pending), type (personal or work), and date.
Edit Task: Click on the "Edit" button next to each task, make changes, and click "Save Changes".
Mark Task: Click on the checkbox to toggle between "Complete" and "Pending".
Delete Task: Click on the "Delete" button to remove a task.
Folder Structure
src/: Contains all source code files.
components/: React components used in the application.
store/: Redux store configuration and slice definitions.
App.js: Main application component.
index.js: Entry point of the application.
TaskInput.css: Styles for the task input form.
TaskList.css: Styles for the task list component.
App.css: Global styles for the application.
Contributing
Contributions are welcome! Feel free to open issues or pull requests for any improvements or features you'd like to add.

License
This project is licensed under the MIT License - see the LICENSE file for details.

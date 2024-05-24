// Initialize an empty to-do list
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];

// Function to save the to-do list to local storage
function saveTodoList() {
  try {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  } catch (error) {
    console.error('Error saving to-do list:', error);
  }
}

// Function to render the to-do list
function renderTodoList() {
  const todoListHtml = todoList.map((task, index) => {
    return `
      <li>
        <span class="task-text">
          ${task.task}
        </span>
        <span class="task-date-time">
          ${task.dateTime}
        </span>
        <span class="completed-status">
          ${task.completed ? '<span style="color: green;">(Completed)</span>' : ''}
        </span>
        <span class="actions">
          <a href="#" data-index="${index}" class="remove-task">Remove</a>
          <a href="#" data-index="${index}" class="mark-completed">Mark Completed</a>
        </span>
      </li>
    `;
  }).join('');
  document.getElementById('todo-list').innerHTML = todoListHtml;
  saveTodoList();
}

// Function to add a new task
document.getElementById('task-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const taskInput = document.getElementById('task-input');
  const task = taskInput.value.trim();
  if (task !== '') {
    const currentDate = new Date();
    const dateTime = `${currentDate.toLocaleDateString()} ${currentDate.getHours()}:${currentDate.getMinutes()}`;
    todoList.push({ task, completed: false, dateTime });
    taskInput.value = '';
    renderTodoList();
  }
});

// Function to remove a task
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove-task')) {
    const index = parseInt(event.target.getAttribute('data-index'), 10);
    todoList.splice(index, 1);
    renderTodoList();
  }
});

// Function to mark a task as completed
document.addEventListener('click', (event) => {
  if (event.target.classList.contains('mark-completed')) {
    const index = parseInt(event.target.getAttribute('data-index'), 10);
    todoList[index].completed = !todoList[index].completed;
    renderTodoList();
  }
});

// Initial render of the to-do list
renderTodoList();

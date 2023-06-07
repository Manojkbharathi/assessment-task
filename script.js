const taskInput = document.querySelector('.task-input input');
const clearAll = document.getElementById('clear');
const input = document.querySelector('input');
const taskBox = document.querySelector('.task-box');
const completedBox = document.querySelector('.completed-box');
const pendingBox = document.querySelector('.pending-box');
const box = document.querySelector('.box');
let tasks = [];
clearAll.addEventListener('click', () => {
  tasks = [];
  taskBox.innerHTML = '';
  completedBox.innerHTML = '';
  pendingBox.innerHTML = '';
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    tasks.push(input.value);
    addTodo, addPending(input.value);

    input.value = '';
  }
});
function addPending(task) {
  let para = document.createElement('p');
  para.innerText = task;
  pendingBox.appendChild(para);
  para.addEventListener('click', () => {
    moveTaskToCompleted(para);
  });
  input.value = '';
}

function addTodo(task) {
  let para = document.createElement('p');
  para.innerText = task;
  taskBox.appendChild(para);
  moveTaskToCompleted(para);
}

function moveTaskToCompleted(taskElement) {
  taskElement.style.textDecoration = 'line-through';
  completedBox.appendChild(taskElement);
  taskElement.removeEventListener('click', moveTaskToCompleted);
}

document.getElementById('completed').addEventListener('click', () => {
  showCompletedTasks();
});

function showCompletedTasks() {
  pendingBox.style.display = 'none';
  completedBox.style.display = 'block';
}

document.getElementById('all').addEventListener('click', () => {
  showAllTasks();
});

function showAllTasks() {
  taskBox.style.display = 'block';
  completedBox.style.display = 'block';
  pendingBox.style.display = 'block';
}
document.getElementById('pending').addEventListener('click', () => {
  showPendingTasks();
});

function showPendingTasks() {
  taskBox.style.display = 'none';
  completedBox.style.display = 'none';
  pendingBox.style.display = 'block';
}

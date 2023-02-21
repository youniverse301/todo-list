const rightContainer = document.getElementById('rightContainer');
const titleContainer = document.getElementById('titleContainer');

const taskContainer = document.createElement('div');
taskContainer.setAttribute('id', 'taskContainer');

const completeTaskBtn = document.createElement('img');
completeTaskBtn.setAttribute('id', 'completeTaskBtn');
completeTaskBtn.src="./imgs/filledCircle.png";

const textContainer = document.createElement('div');
textContainer.setAttribute('id', 'textContainer');

const taskTitle = document.createElement('div');
taskTitle.setAttribute('id', 'taskTitle');
taskTitle.innerHTML="Take out the trash";

const taskDesc = document.createElement('div');
taskDesc.setAttribute('id', 'taskDesc');
taskDesc.innerHTML="Dont forget dont forget dont forget";

const dateContainer = document.createElement('div');
dateContainer.setAttribute('id', 'dateContainer');
const dateText = document.createElement('p');
dateText.setAttribute('id', 'dateText');
dateText.innerHTML="02/23/23";

const importantBtn = document.createElement('img');
importantBtn.setAttribute('id', 'importantBtn');
importantBtn.src="./imgs/starUnfilled.png";

const editBtn = document.createElement('img');
editBtn.setAttribute('id', 'editBtn');
editBtn.src="./imgs/menu-vertical.png";



const addTask = document.createElement('div');
addTask.setAttribute('id', 'addTaskContainer');
addTask.addEventListener('click', taskForm);

const addBtn = document.createElement('img');
    addBtn.setAttribute('id', 'addBtn');
    addBtn.src="./imgs/addBtn.png";

    const addTaskText = document.createElement('div');
    addTaskText.setAttribute('id', 'addTaskText');
    addTaskText.innerHTML="Add Task";

function taskForm() {
    const taskFormContainer = document.createElement('div');
    taskFormContainer.setAttribute('id', 'taskFormContainer');
    rightContainer.appendChild(taskFormContainer);
    const taskForm = document.createElement('form');
    taskForm.setAttribute('id', 'taskForm');
    taskFormContainer.appendChild(taskForm);
    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'titleInput');
    titleLabel.textContent = 'Title:';
    taskForm.appendChild(titleLabel);
    const titleInput = document.createElement('input');
    titleInput.setAttribute('id', 'titleInput');
    titleInput.type = 'text';
    taskForm.appendChild(titleInput);

    const detailsLabel = document.createElement('label');
    detailsLabel.setAttribute('for', 'detailsInput');
    detailsLabel.textContent = 'Details (optional):';
    taskForm.appendChild(detailsLabel);
    const detailsInput = document.createElement('input');
    detailsInput.setAttribute('id', 'detailsInput');
    detailsInput.type = 'text';
    taskForm.appendChild(detailsInput);

    const dateLabel = document.createElement('label');
    dateLabel.setAttribute('for', 'dateInput');
    dateLabel.textContent = 'Date:';
    taskForm.appendChild(dateLabel);
    const dateInput = document.createElement('input');
    dateInput.setAttribute('id', 'dateInput');
    dateInput.type = 'date';
    taskForm.appendChild(dateInput);


    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.textContent = 'Add';
    submit.addEventListener('click', createTask);
    taskForm.appendChild(submit);
    const cancel = document.createElement('button');
    cancel.setAttribute('id', 'cancel');
    cancel.textContent = 'Cancel';
    taskForm.appendChild(cancel);
}

function createTask() {
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const details = document.getElementById('detailsInput').value;
    const date = document.getElementById('dateInput').value;
  
    const task = Task(title, details, date);
    const taskDiv = createTaskDiv(task);
    rightContainer.appendChild(taskDiv);
    taskFormContainer.remove();
}

  

function Task(title, details, date) {
    return {
      title: title,
      details: details,
      date: date,
      completed: false
    };
  }
  
  let taskId = 0;
  function createTaskDiv(task) {
    taskId++;
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'taskContainer');
    taskContainer.setAttribute('id', `task-${taskId}`);
  
    const completeTaskBtn = document.createElement('img');
    completeTaskBtn.setAttribute('id', 'completeTaskBtn');
    completeTaskBtn.src="./imgs/filledCircle.png";
  
    const textContainer = document.createElement('div');
    textContainer.setAttribute('id', 'textContainer');
  
    const taskTitle = document.createElement('div');
    taskTitle.setAttribute('id', 'taskTitle');
    taskTitle.innerHTML = task.title;
  
    const taskDesc = document.createElement('div');
    taskDesc.setAttribute('id', 'taskDesc');
    taskDesc.innerHTML = task.details;
  
    const dateContainer = document.createElement('div');
    dateContainer.setAttribute('id', 'dateContainer');
    const dateText = document.createElement('p');
    dateText.setAttribute('id', 'dateText');
    dateText.innerHTML = task.date;
  
    const importantBtn = document.createElement('img');
    importantBtn.setAttribute('id', 'importantBtn');
    importantBtn.src="./imgs/starUnfilled.png";
  
    const editBtn = document.createElement('img');
    editBtn.setAttribute('id', 'editBtn');
    editBtn.src="./imgs/menu-vertical.png";
  
    // Append the elements to the task container
    taskContainer.appendChild(completeTaskBtn);
    textContainer.appendChild(taskTitle);
    textContainer.appendChild(taskDesc);
    taskContainer.appendChild(textContainer);
    dateContainer.appendChild(dateText);
    taskContainer.appendChild(dateContainer);
    taskContainer.appendChild(importantBtn);
    taskContainer.appendChild(editBtn);
  
    // Return the task container
    return taskContainer;
}

  
  


function loadRight() {
    rightContainer.appendChild(addTask);
    addTask.appendChild(addBtn);
    addTask.appendChild(addTaskText);
}

export { loadRight};
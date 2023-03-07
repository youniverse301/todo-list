import format from "date-fns/format";
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
addTask.classList.add('hidden');
addTask.addEventListener('click', taskForm);

const addBtn = document.createElement('img');
    addBtn.setAttribute('id', 'addBtn');
    addBtn.src="./imgs/addBtn.png";

    const addTaskText = document.createElement('div');
    addTaskText.setAttribute('id', 'addTaskText');
    addTaskText.innerHTML="Add Task";

    function loadAddTask() {
      rightContainer.appendChild(addTask);
      addTask.appendChild(addBtn);
      addTask.appendChild(addTaskText);
  }

  function removeAddTask() {
    addTask.remove();
  }

function taskForm() {
    removeAddTask();
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
    cancel.addEventListener('click', deleteTaskForm);
    taskForm.appendChild(cancel);
}


function deleteTaskForm() {
    event.preventDefault();
    loadAddTask();
    const taskFormContainer = document.getElementById('taskFormContainer');
    taskFormContainer.remove();
}

function createTask() {
    loadAddTask();
    event.preventDefault();
    const title = document.getElementById('titleInput').value;
    const details = document.getElementById('detailsInput').value;
    const dateUnformatted = document.getElementById('dateInput').value;
    const date = new Date(dateUnformatted).toLocaleDateString('en-US', { timeZone: 'UTC' });      
  
    const task = Task(title, details, date);
    const taskDiv = createTaskDiv(task);
    rightContainer.appendChild(taskDiv);
    taskFormContainer.remove();
    console.log(task);
    console.log(task.details);

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
  
// Find the current project
    const currentProject = document.querySelector('.project.selected');

// Create the task element and add the project class to it
    const taskElement = document.createElement('div');
    taskContainer.classList.add(currentProject.id);

    const completeTaskBtn = document.createElement('img');
    completeTaskBtn.setAttribute('id', 'completeTaskBtn');
    completeTaskBtn.src="./imgs/filledCircle.png";
    completeTaskBtn.addEventListener('click', completedTask);
  
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
    if (task.date) {
      try {
        const formattedDate = format(new Date(task.date), "MM/dd/yyyy");
        dateText.innerHTML = formattedDate;
      } catch (error) {
        dateText.innerHTML = "";
      }
    } else {
      dateText.innerHTML = "";
    }
    
    const importantBtn = document.createElement('img');
    importantBtn.setAttribute('id', 'importantBtn');
    importantBtn.src="./imgs/starUnfilled.png";
    importantBtn.addEventListener('click', addimportant)
  

    const editBtnContainer = document.createElement('div');
    editBtnContainer.setAttribute('id', 'editBtnContainer');
    editBtnContainer.addEventListener('click', toggleEditContainer);

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
    taskContainer.appendChild(editBtnContainer)
    editBtnContainer.appendChild(editBtn);
  
    // Return the task container
    return taskContainer;
}

function toggleEditContainer(event) {
    const editBtnContainer = event.target.parentNode;
    const editContainer = document.getElementById('editTaskContainer');
  
    if (editContainer && editBtnContainer.contains(editContainer)) {
      editContainer.remove();
    } else {
      const newEditContainer = document.createElement('div');
      newEditContainer.setAttribute('id', 'editTaskContainer');
      const editTaskBtn = document.createElement('button');
      editTaskBtn.setAttribute('id', 'editTaskBtn');
      editTaskBtn.textContent = "Edit";
      const deleteBtn = document.createElement('button');
      deleteBtn.setAttribute('id', 'deleteTaskBtn');
      deleteBtn.textContent = "Delete";
      newEditContainer.appendChild(editTaskBtn);
      newEditContainer.appendChild(deleteBtn);
      deleteBtn.addEventListener('click', deleteProject);
      editTaskBtn.addEventListener('click', taskFormEdit);
      editBtnContainer.appendChild(newEditContainer);
    }
  }

function deleteProject() {
    const task = event.target.closest('.taskContainer');
    task.remove();
}

function taskFormEdit(event) {
  removeAddTask();
  // Find the parent task element of the edit button that was clicked
  const taskElement = event.target.closest('.taskContainer');

  // Get the task data from the task element
  const taskTitle = taskElement.querySelector('#taskTitle');
  const taskDetails = taskElement.querySelector('#taskDesc');
  const taskDate = taskElement.querySelector('#dateText');

  
  // Display the task form with the current task data
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
  titleInput.value = taskTitle.innerText;
  taskForm.appendChild(titleInput);

  const detailsLabel = document.createElement('label');
  detailsLabel.setAttribute('for', 'detailsInput');
  detailsLabel.textContent = 'Details (optional):';
  taskForm.appendChild(detailsLabel);

  const detailsInput = document.createElement('input');
  detailsInput.setAttribute('id', 'detailsInput');
  detailsInput.type = 'text';
  detailsInput.value = taskDetails.innerText;
  taskForm.appendChild(detailsInput);

  const dateLabel = document.createElement('label');
  dateLabel.setAttribute('for', 'dateInput');
  dateLabel.textContent = 'Date:';
  taskForm.appendChild(dateLabel);

  const dateInput = document.createElement('input');
  dateInput.setAttribute('id', 'dateInput');
  dateInput.type = 'date';
  if (taskDate.innerText) {
    try {
      const formattedDate = format(new Date(taskDate.innerText), "yyyy-MM-dd");
      dateInput.value = formattedDate;
    } catch (error) {
      dateInput.value = "";
    }
  } else {
    dateInput.value = "";
  }
  //const formattedDate = format(new Date(taskDate.innerText), "yyyy-MM-dd");
  //dateInput.value = formattedDate;
  taskForm.appendChild(dateInput);
  

  const submit = document.createElement('button');
  submit.type = 'submit';
  submit.textContent = 'Save';
  submit.addEventListener('click', function(event) {
    loadAddTask();
    event.preventDefault();
    const newTitle = titleInput.value;
    const newTaskTitle = document.createElement('div');
    newTaskTitle.setAttribute('id', 'taskTitle');
    newTaskTitle.innerText = newTitle;
    taskTitle.replaceWith(newTaskTitle);
   
    const newDetails = detailsInput.value;
    const newDetailsTitle = document.createElement('div');
    newDetailsTitle.setAttribute('id', 'taskDesc');
    newDetailsTitle.innerText = newDetails;
    taskDetails.replaceWith(newDetailsTitle);

    const newDateTitle = document.createElement('div');
    newDateTitle.setAttribute('id', 'dateText');
    const newDateUnformatted = dateInput.value;
    const newDateFormatted = new Date(newDateUnformatted).toLocaleDateString('en-US', { timeZone: 'UTC' });   
    if (newDateFormatted) {
      try {
        const reformattedDate = format(new Date(newDateFormatted), "MM/dd/yyyy");
        newDateTitle.innerText = reformattedDate;
      } catch (error) {
        newDateTitle.innerText = "";
      }
    } else {
      newDateTitle.innerText = "";
    }
    taskDate.replaceWith(newDateTitle);
    taskFormContainer.remove();
  });
  taskForm.appendChild(submit);

  const cancel = document.createElement('button');
  cancel.setAttribute('id', 'cancel');
  cancel.textContent = 'Cancel';
  cancel.addEventListener('click', deleteTaskForm);
  taskForm.appendChild(cancel);
}

function addimportant() {
  const taskElement = event.target.closest('.taskContainer');
  const importantBtn =  taskElement.querySelector('#importantBtn');
  if (taskElement.classList.contains('important')) {
    taskElement.classList.remove('important');
    importantBtn.src = "./imgs/starUnfilled.png";
  } else {
    taskElement.classList.add('important');
    importantBtn.src = "./imgs/starFilled.png";
  }

}

function completedTask() {
  const taskElement = event.target.closest('.taskContainer');
  const completeTaskBtn = taskElement.querySelector('#completeTaskBtn');
  if (taskElement.classList.contains('completed')) {
    taskElement.classList.remove('completed');
    completeTaskBtn.src = "./imgs/filledCircle.png";
  } else {
    taskElement.classList.add('completed');
    completeTaskBtn.src = "./imgs/filledCircleBlue.png";
  }
}


export { loadAddTask, removeAddTask};
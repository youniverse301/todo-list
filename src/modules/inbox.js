const rightContainer = document.getElementById('rightContainer');
const titleContainer = document.createElement('div');
titleContainer.setAttribute('id', 'titleContainer');

const allTasksTitle = document.createElement('h1');
allTasksTitle.setAttribute('id', 'allTasksTitle');
allTasksTitle.innerHTML="All Tasks";

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



var projectName;
function createProject(projectName) {
    
    const projectContainer = document.getElementById('projects');

    const project = document.createElement('div');
    project.setAttribute('id', 'project');
    projectContainer.appendChild(project);
        const projectImg = document.createElement('img');
        projectImg.setAttribute('id', 'projectImg');
        projectImg.src="./imgs/sidebarBtn.png";
        project.appendChild(projectImg);
        const projectTitle = document.createElement('div');
        projectTitle.setAttribute('id', 'projectTitle');
        projectTitle.innerHTML=projectName;
        project.appendChild(projectTitle);
        const menuVert = document.createElement('img');
        menuVert.setAttribute('id', 'menuVert');
        menuVert.src="./imgs/menu-vertical.png";
        project.appendChild(menuVert);

}

const projectForm = document.createElement('form');
projectForm.setAttribute('id', 'projectForm');
const input1 = document.createElement('input');
input1.setAttribute('id', 'input1');
input1.type = 'text';
input1.project = 'project';
projectForm.appendChild(input1);
const submit = document.createElement('button');
submit.type = 'submit';
submit.textContent = 'Add';
projectForm.appendChild(submit);

const addProject = document.getElementById('addProject');
addProject.addEventListener('click', function(event) {
    document.getElementById('projects').appendChild(projectForm);

});


projectForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {};

  const projectName = document.getElementById('input1').value;

  formData.name = projectName;

  console.log(formData.name);
  input1.value=""
  createProject(projectName);
  projectForm.remove();

});


const inboxBtn = document.getElementById('inbox');
function styleInboxbtn() {
    inboxBtn.style.backgroundColor='#1C9BEF'
    inboxBtn.style.borderRadius='5px'
}

function inbox() {
    rightContainer.appendChild(titleContainer);
    titleContainer.appendChild(allTasksTitle);
    rightContainer.appendChild(taskContainer);
    taskContainer.appendChild(completeTaskBtn);
    taskContainer.appendChild(textContainer);
    textContainer.appendChild(taskTitle);
    textContainer.appendChild(taskDesc);
    taskContainer.appendChild(dateContainer);
    dateContainer.appendChild(dateText);
    taskContainer.appendChild(importantBtn);
    taskContainer.appendChild(editBtn);
    styleInboxbtn();
}

export {inbox, createProject};
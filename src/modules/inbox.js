const rightContainer = document.getElementById('rightContainer');
const titleContainer = document.createElement('div');
titleContainer.setAttribute('id', 'titleContainer');

const allTasksTitle = document.createElement('h1');
allTasksTitle.setAttribute('id', 'allTasksTitle');

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


let projectId = 0;
var projectName;
function createProject(projectName) {
    projectId++;
    const projectContainer = document.getElementById('projects');

    const project = document.createElement('div');
    project.setAttribute('class', 'project');
    project.setAttribute('id', `project-${projectId}`);
    projectContainer.appendChild(project);
        const projectImg = document.createElement('img');
        projectImg.setAttribute('id', 'projectImg');
        projectImg.src="./imgs/sidebarBtn.png";
        project.appendChild(projectImg);
        const projectTitle = document.createElement('div');
        projectTitle.setAttribute('id', 'projectTitle');
        projectTitle.innerHTML=projectName;
        project.appendChild(projectTitle);
        const menuvertWrap = document.createElement('div');
        menuvertWrap.setAttribute('id', 'menuvertWrap');
        project.appendChild(menuvertWrap)
        const menuVert = document.createElement('img');
        menuVert.setAttribute('id', 'menuVert');
        menuVert.src="./imgs/menu-vertical.png";
        menuvertWrap.appendChild(menuVert);

    selectProject();
    menuvertWrap.addEventListener('click', toggleEditContainer);

}

function toggleEditContainer(event) {
  const menuvertWrap = event.target.parentNode;
  const editContainer = document.getElementById('editContainer');

  if (editContainer && menuvertWrap.contains(editContainer)) {
    editContainer.remove();
  } else {
    const newEditContainer = document.createElement('div');
    newEditContainer.setAttribute('id', 'editContainer');
    const renameBtn = document.createElement('button');
    renameBtn.setAttribute('id', 'renameBtn');
    renameBtn.textContent = "Rename";
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('id', 'deleteBtn');
    deleteBtn.textContent = "Delete";
    newEditContainer.appendChild(renameBtn);
    newEditContainer.appendChild(deleteBtn);
    renameBtn.addEventListener('click', renameProject);
    deleteBtn.addEventListener('click', deleteProject);
    menuvertWrap.appendChild(newEditContainer);
  }
}




function deleteProject() {
  const project = event.target.closest('.project');
  project.remove();
}

function renameProject() {
  // Get the current project
  const project = event.target.closest('.project');
  
  // Hide the project title and show the form
  const projectTitle = project.querySelector('#projectTitle');
  const projectForm = document.createElement('form');
  projectForm.setAttribute('id', 'renameForm');
  const input = document.createElement('input');
  input.type = 'text';
  input.value = projectTitle.innerText;
  projectForm.appendChild(input);
  const submitBtn = document.createElement('button');
  submitBtn.type = 'submit';
  submitBtn.innerText = 'Rename';
  projectForm.appendChild(submitBtn);
  project.replaceChild(projectForm, projectTitle);
  
  const editContainer = document.getElementById('editContainer');
  editContainer.remove();
  
  // Update the project title and alltaskstitle when the form is submitted
  projectForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const newTitle = input.value;
    const newProjectTitle = document.createElement('div');
    newProjectTitle.setAttribute('id', 'projectTitle');
    newProjectTitle.innerText = newTitle;
    project.replaceChild(newProjectTitle, projectForm);
    
    const allTasksTitle = document.getElementById('allTasksTitle');
    allTasksTitle.innerText = newTitle;
  });
}

const renameBtns = document.querySelectorAll('.renameBtn');
renameBtns.forEach(function(btn) {
  btn.addEventListener('click', renameProject);
});


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
const cancel = document.createElement('button');
cancel.setAttribute('id', 'cancel');
cancel.textContent = 'Cancel';
projectForm.appendChild(cancel);

const addProject = document.getElementById('addProject');
addProject.addEventListener('click', function(event) {
    document.getElementById('projects').appendChild(projectForm);
    const cancelBtn = document.getElementById('cancel')
    cancelBtn.addEventListener('click', function(event) {
        projectForm.remove();
    
    });
});


projectForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = {};

  const projectName = document.getElementById('input1').value;

  formData.name = projectName;

  console.log(formData.name);
  input1.value=""
  createProject(projectName);;
  projectForm.remove();

});



function selectProject() {
  const projects = document.querySelectorAll('.project');
  projects.forEach(function(project) {
    project.addEventListener('click', function() {
      const selectedProject = document.querySelector('.selected');
      if (selectedProject) {
        selectedProject.classList.remove('selected');
      }
      project.classList.add('selected');
      const projectTitle = project.querySelector('#projectTitle');
      const allTasksTitle = document.getElementById('allTasksTitle');
      allTasksTitle.innerHTML = projectTitle.innerText;
    });
  });
}


function loadPage() {
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
    var projectName="Default";
    createProject(projectName);
    const project = document.getElementById('project-1');
    project.classList.add('selected');
    allTasksTitle.innerHTML=projectName;
}

export {loadPage, createProject};
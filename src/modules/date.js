import format from "date-fns/format";
import { removeAddTask } from "./edit";
function dateFormat() {
    const date = new Date();
    console.log(date);
    const dateFormatted = format(date, "MM/dd/yyyy");
    console.log(dateFormatted);
    const dateContainer = document.getElementById('todayDate');
    dateContainer.innerHTML = dateFormatted;
}

function loadToday() {
  removeAddTask();
  const allTasksTitle = document.getElementById('allTasksTitle');
  allTasksTitle.innerHTML = "Today";
  const leftContainer = document.getElementById('leftContainer');
  const selectedDivs = leftContainer.querySelectorAll('.selected');
  selectedDivs.forEach(function(selectedDiv) {
    selectedDiv.classList.remove('selected');
  });

  const today = document.getElementById('today');
  today.classList.add('selected');

  const tasks = document.querySelectorAll('.taskContainer');
  const todayString = format(new Date(), 'MM/dd/yyyy'); // format today's date as a string
  tasks.forEach(function(task) {
    const dueDate = task.querySelector('#dateText').textContent; // get the task's due date as a string
    if (dueDate === todayString) { // compare the task's due date to today's date string
      task.classList.remove('hidden');
    } else {
      task.classList.add('hidden');
    }
  });
}


function loadNext7() {
    removeAddTask();
    const allTasksTitle = document.getElementById('allTasksTitle');
    allTasksTitle.innerHTML = "Next 7 Days";
    const leftContainer = document.getElementById('leftContainer');
    const selectedDivs = leftContainer.querySelectorAll('.selected');
    selectedDivs.forEach(function(selectedDiv) {
      selectedDiv.classList.remove('selected');
    });
  
    const next7 = document.getElementById('next7');
    next7.classList.add('selected');
  
    const tasks = document.querySelectorAll('.taskContainer');
    tasks.forEach(function(task) {
        task.classList.remove('hidden');
    });

    const today = new Date(); // get the current date
    const oneWeekForward = new Date(today.getTime() + (7 * 24 * 60 * 60 * 1000)); // get a date 7 days (1 week) ahead of the current date
    const todayString = format(today, "MM/dd/yyyy"); // format the current date as a string
    const oneWeekForwardString = format(oneWeekForward, "MM/dd/yyyy"); // format the date 1 week ahead as a string
    
    tasks.forEach(function(task) {
      const dueDate = task.querySelector('#dateText').textContent; // get the task's due date as a string
      if (dueDate >= todayString && dueDate <= oneWeekForwardString) { // compare the task's due date to the current date and 1 week forward
        task.classList.remove('hidden');
      } else {
        task.classList.add('hidden');
      }
    });
    
  }


export {dateFormat, loadNext7, loadToday}
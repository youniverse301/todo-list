import format from "date-fns/format";
function dateFormat() {
    const date = new Date();
    console.log(date);
    const dateFormatted = format(date, "MM/dd/yyyy");
    console.log(dateFormatted);
    const dateContainer = document.getElementById('todayDate');
    dateContainer.innerHTML = dateFormatted;
}

function loadToday() {
    const leftContainer = document.getElementById('leftContainer');
    const selectedDivs = leftContainer.querySelectorAll('.selected');
    selectedDivs.forEach(function(selectedDiv) {
      selectedDiv.classList.remove('selected');
    });
  
    const today = document.getElementById('today');
    today.classList.add('selected');
  
    const tasks = document.querySelectorAll('.taskContainer');
    tasks.forEach(function(task) {
        task.classList.remove('hidden');
    });

    const date = new Date();
    tasks.forEach(function(task) {
        const dueDate = task.querySelector('dateText')
        if (dueDate && isToday(new Date(dueDate.innerText))) {
          task.classList.remove('hidden');
        } else {
          task.classList.add('hidden');
        }
      });
  }

function loadNext7() {
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
  }


export {dateFormat, loadNext7, loadToday}
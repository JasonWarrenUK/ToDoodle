let palette = "light";

const taskForm = document.querySelector("form");
const toDoListContainer = document.getElementById("to-do-list");

//get info from local storage (this is the new stored list)
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];


/* Debug Tools */
//Console Log All Tasks in the Current List
const debugLogTasks = document.getElementById("logTasks");
debugLogTasks.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(tasks);
});

const debugClearTasks = document.getElementById("clearTasks");
debugClearTasks.addEventListener("click", function (event) {
  /* event.preventDefault(); */
  // Clear all items from the 'tasks' array
  tasks.length = 0;

  // Update local storage with the empty 'tasks' array
  localStorage.setItem('tasks', JSON.stringify(tasks));
});


/* Task Template */
function Task(taskName, taskDateDue, taskImportance) {
  this.name = taskName;
  this.dateDue = taskDateDue;
  this.importance = taskImportance;
  this.status = "open";
  
  //* Generate a unique id for each task so that it can be searched in tests
  this.id = this.name.replace(/\b(\w)\w*\b/g, '$1').replace(/\s/g, '');
  while (this.id.length < 10) {
    this.id += this.id;
  }
  this.id = this.id.slice(0, 10);
}


/* Task Creation Event Listener */
function createTask (event){
  event.preventDefault();//Prevent the page reloading

  const taskName = document.getElementById("taskName").value;
  let taskDateDue = document.getElementById("taskDateDue").value;
  let taskImportance = document.querySelector(
    'input[name="taskImportance"]:checked'
  );

  console.log("Task Name Submitted: " + taskName);
  console.log("Task Due Submitted: " + taskDateDue);
  console.log("Task Importance Submitted: " + taskImportance);

  // Set default values if they are not provided
  if (taskDateDue === "") {
    taskDateDue = null;
  }
  if (!taskImportance) {
    taskImportance = "normal";
  } else {
    taskImportance = taskImportance.value;
  }

  console.log("Task Name Assigned: " + taskName);
  console.log("Task Due Assigned: " + taskDateDue);
  console.log("Task Importance Assigned: " + taskImportance);

  const newTask = new Task(taskName, taskDateDue, taskImportance);
  console.log("Task to Be Pushed: " + newTask);

  //Push a new task to the stored list
  tasks.push(newTask);
  //set the stored list
  localStorage.setItem('tasks', JSON.stringify(tasks));
  //display stored tasks
  displayListItems(tasks); 
  console.log("Local Storage Task List:" + localStorage.getItem('tasks'));
};

taskForm.addEventListener("submit", createTask);

/* List Display */
function displayListItems(array) {
  //Clear the list
  toDoListContainer.innerHTML = "";

  //Generate a new list
  array.forEach((task) => {
    let taskItem = document.createElement("li");
    taskItem.className = "to-do-item";
    taskItem.id = task.id;

    if (task.status === "open") {
      taskItem.innerHTML = 
      `<div class="tick-container">
        <img src="images/check-circle.svg"/>
      </div>
      <div class="to-do-text-container">
        <p class="task-name">${task.name}</p>
      </div>
      <div class="importance-container">
        <p class="task-importance">${task.importance}</p>
      </div>
      <div class="delete-container">
        <img src="images/delete.svg"/>
      </div>`;
      } else {
      taskItem.innerHTML =
      `<div class="tick-container">
        <img src="images/check-circle-filled.svg"/>
      </div>
      <div class="to-do-text-container">
        <p class="task-name">${task.name}</p>
      </div>
      <div class="importance-container">
        <p class="task-importance">${task.importance}</p>
      </div>
      <div class="delete-container">
        <img src="images/delete.svg"/>
      </div>`;
    }

    /* const tick = taskItem.querySelector(".tick-container"); */
    const iconComplete = taskItem.querySelector('.tick-container img');
    const iconDelete = taskItem.querySelector('.delete-container img');

    iconComplete.addEventListener("click", completeTaskHTML);
    iconDelete.addEventListener("click", deleteTaskHTML);
    
    toDoListContainer.appendChild(taskItem);
  });
}


/* Task Completion */
function completeTaskHTML(event) {
  const taskItem = event.target.closest(".to-do-item");
  completeTaskJS(taskItem);
  displayListItems(tasks);
}

function completeTaskJS(taskItem) {
  if (taskItem) {
    const taskName = taskItem.querySelector(".to-do-text-container p").textContent;
    const correspondingTask = tasks.find((task) => task.name === taskName);
    const tick = taskItem.querySelector(".tick-container img");
    
    if (correspondingTask) {
      if (correspondingTask.status === "open") {
        correspondingTask.status = "complete";
        tick.src = "images/check-circle-filled.svg";
      } else {
        correspondingTask.status = "open";
        tick.src = "images/check-circle.svg";
      }
    }
  }
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
}


/* Task Deletion */
function deleteTaskHTML(event){
  const taskItem = event.target.closest(".to-do-item");
  deleteTaskJS(taskItem);
}

function deleteTaskJS(taskItem){
  if (taskItem) {
    const taskName = taskItem.querySelector(".to-do-text-container p").textContent;
    const correspondingTaskIndex = tasks.findIndex((task) => task.name === taskName);

    if (correspondingTaskIndex !== -1) {
      tasks.splice(correspondingTaskIndex, 1);
      taskItem.remove();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }
}


/* List Filtering */
const completeButton = document.getElementById("completeButton");

function toggleCompleteTasks() {
  let stillToDo = tasks.filter((item) => item.status === "open");
  if (completeButton.innerText === "Hide Completed") {
    completeButton.innerText = "Show Completed";
    displayListItems(stillToDo);
  } else {
    completeButton.innerText = "Hide Completed";
    displayListItems(tasks);
  }

  console.log("Still to do:" + stillToDo);
}

completeButton.addEventListener("click", toggleCompleteTasks);


// Initial Page Load
document.addEventListener('DOMContentLoaded', () => {
  displayListItems(tasks); 
});

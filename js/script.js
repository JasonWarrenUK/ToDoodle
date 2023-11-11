//Please can we keep whitespace between segments and indentation under comment headings? It really helps me read the code.

/* Set Variables */
// let taskList = [];  Not needed if we use local storage
const taskForm = document.querySelector("form");
//const submitTask = document.getElementById('taskSubmit');
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
function Task(taskName, taskDateDue, taskImportance, taskId) {
  this.name = taskName;
  this.dateDue = taskDateDue;
  this.importance = taskImportance;
  this.status = "open";
  
  //* Generate a unique id for each task so that it can be searched in tests
  // this.id = this.name.replace(/\b(\w)\w*\b/g, '$1').replace(/\s/g, '');
  // while (this.id.length < 10) {
  //   this.id += this.id;
  // }
  // this.id = this.id.slice(0, 10);
  this.id = taskId
}


/* Task Creation Event Listener */
function createTask (event){
  event.preventDefault();//Prevent the page reloading

  const taskName = document.getElementById("taskName").value;
  const taskDateDue = document.getElementById("taskDateDue").value;
  let taskImportance = document.querySelector(
    'input[name="taskImportance"]:checked'
  );
  const taskId = Math.random().toString(36).substring(2, 12);


  // console.log("Task Name Submitted: " + taskName);
  // console.log("Task Due Submitted: " + taskDateDue);
  // console.log("Task Importance Submitted: " + taskImportance);

  // Set default values if they are not provided
  if (taskDateDue === "") {
    taskDateDue = null;
  }
  if (!taskImportance) {
    taskImportance = "normal";
  } else {
    taskImportance = taskImportance.value;
  }

  // console.log("Task Name Assigned: " + taskName);
  // console.log("Task Due Assigned: " + taskDateDue);
  // console.log("Task Importance Assigned: " + taskImportance);

  const newTask = new Task(taskName, taskDateDue, taskImportance, taskId);
  console.log("Task to Be Pushed: " + newTask);

  //Push a new task to the stored list
  tasks.push(newTask);
  //set the stored list
  localStorage.setItem('tasks', JSON.stringify(tasks));
  //display stored tasks
  displayListItems(tasks); 
  return(localStorage.getItem('tasks'));
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
  const targetTick = event.target;
  const taskItem = event.target.closest(".to-do-item");
  const taskId = taskItem.id;
  completeTaskJS(taskItem, taskId, targetTick);
  displayListItems(tasks);
}

function completeTaskJS(taskItem, taskId, targetTick) {
  if (taskItem) {
    
    const correspondingTask = tasks.find((task) => task.id === taskId);
   
    if (correspondingTask) {
      console.log("Task status before:", correspondingTask.status); 
      if (correspondingTask.status === "open") {
        correspondingTask.status = "closed";
        targetTick.src = "images/check-circle-filled.svg";
        console.log(tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks));
      } else  {
        correspondingTask.status = "open";
        targetTick.src = "images/check-circle.svg";
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
      console.log("Task status after:", correspondingTask.status); 
    }
  }
  
}


/* Task Deletion */
function deleteTaskHTML(event){
  
  const taskItem = event.target.closest(".to-do-item");
  const taskId = taskItem.id;
  deleteTaskJS(taskItem, taskId);

}

function deleteTaskJS(taskItem, taskId){
  if (taskItem) {
    const correspondingTaskIndex = tasks.findIndex((task) => task.id === taskId);
    
    if (correspondingTaskIndex !== -1) {
      tasks.splice(correspondingTaskIndex, 1);
      taskItem.remove();
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  } 
}


/* List Filtering */
const completeButton = document.getElementById("completeButton");

function toggleCompleteTasks(array) {
  let stillToDo = array.filter((item) => item.status === "open");
  if (completeButton.innerText === "Hide Completed") {
    completeButton.innerText = "Show Completed";
    displayListItems(stillToDo);
  } else {
    completeButton.innerText = "Hide Completed";
    displayListItems(tasks);
  }

  return(stillToDo);
}

completeButton.addEventListener("click", function() {
  toggleCompleteTasks(tasks);
});


// Initial Page Load
document.addEventListener('DOMContentLoaded', () => {
  displayListItems(tasks); 
});

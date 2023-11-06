/* Set Variables */
// let taskList = [{ name: "test 1" }, { name: "test 2" }];
let taskList = [];
const taskForm = document.querySelector("form");
const toDoListContainer = document.getElementById("to-do-list");

/* Debug Tools */
//Console Log All Tasks in the Current List
const debugLogTasks = document.getElementById("logTasks");
debugLogTasks.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(taskList);
});

//Task Template
function Task(taskName, taskDateDue, taskImportance) {
  this.name = taskName;
  this.dateDue = taskDateDue;
  this.importance = taskImportance;
  this.status = "open";
}

// Task Creation Event Listener
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page reloading
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

  taskList.push(newTask);
  displayListItems(taskList);
});

/* List Display */
function displayListItems(newList) {
  toDoListContainer.innerHTML = "";
  newList.forEach((task) => {
    let taskItem = document.createElement("li");
    taskItem.className = "to-do-item flexParent";
    if (task.status === "open") {
      taskItem.innerHTML = `
    <div class="tick-container">
      <img src="images/check-circle.svg" class="iconTicks"/>
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
      taskItem.innerHTML = `
    <div class="tick-container">
      <img src="images/check-circle-filled.svg" class="iconTicks"/>
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

    toDoListContainer.appendChild(taskItem);
    const tick = taskItem.querySelector(".iconTicks");
    tick.addEventListener("click", completeTask);
  });
}

// Task Completion
function completeTask(event) {
  const taskItem = event.target.closest(".to-do-item");

  if (taskItem) {
    const taskName = taskItem.querySelector(
      ".to-do-text-container p"
    ).textContent;
    const correspondingTask = taskList.find((task) => task.name === taskName);
    const tick = taskItem.querySelector(".iconTicks");
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
}

/* Task Deletion
  Stuff*/

/* List Filtering
  Function for toggling between all/to do either with class list
  or filter function?
  Toggle between 'all' and 'to do' */

const completeButton = document.getElementById("completeButton");

function toggleCompleteTasks() {
  let stillToDo = taskList.filter((item) => item.status === "open");
  if (completeButton.innerText === "Hide Completed Tasks") {
    completeButton.innerText = "Show Completed Tasks";
    displayListItems(stillToDo);
  } else {
    completeButton.innerText = "Hide Completed Tasks";
    displayListItems(taskList);
  }

  console.log("Still to do:" + stillToDo);
}

completeButton.addEventListener("click", toggleCompleteTasks);

// Initial Page Load
displayListItems();

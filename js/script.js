/* Set Variables */
let taskList = [{ name: "test 1" }, { name: "test 2" }];
const taskForm = document.querySelector("form");
const toDoListContainer = document.getElementById("to-do-list");

/* Debug Tools */
//Console Log All Tasks in the Current List
const debugLogTasks = document.getElementById("logTasks");
debugLogTasks.addEventListener("click", function (event) {
  event.preventDefault();
  console.log(taskList);
});

/* Task Creation */
//Task Template
function Task(taskName, taskDateDue, taskImportance) {
  this.name = taskName;
  this.dateDue = taskDateDue;
  this.importance = taskImportance;
  this.status = "open";
}

//Event Listener
taskForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Don't let the button make the page reload

  const taskName = document.getElementById("taskName").value;
  console.log("Task Name: " + taskName);
  let taskDateDue = document.getElementById("taskDateDue").value;
  console.log("Task Due: " + taskDateDue);
  let taskImportance = document.querySelector(
    'input[name="taskImportance"]:checked'
  );
  console.log("Task Importance: " + taskImportance);

  // Set default values if they are not provided
  if (taskDateDue === "") {
    taskDateDue = null;
  }
  if (!taskImportance) {
    taskImportance = "normal";
  } else {
    taskImportance = taskImportance.value;
  }

  const newTask = new Task(taskName, taskDateDue, taskImportance);

  taskList.push(newTask);
  console.log(newTask);
  displayListItems(newTask);
});

/* List Display */

function displayListItems(task) {
  let taskItem = document.createElement("div");
  taskItem.className = "to-do-item";
  taskItem.innerHTML = ` <div class="tick-container">
            <img src="images/check-circle.svg" class="iconTicks"/>
          </div>
          <div class="to-do-text-container">
            <p class="task-name">${task.name}</p>
          </div>
          <div class="importance-container">
            <p class="task-importance">${task.importance}</p>
          </div>
          <div class="delete-container">
            <img src="images/delete.svg" class="iconDelete"/>
          </div>
    `;

  toDoListContainer.appendChild(taskItem);
  const tick = taskItem.querySelector(".iconTicks");
  tick.addEventListener("click", completeTask);
}

// Task Completion
//when you click on the tick, the tick changes colour and the task status changes to 'complete'/
//(class toggles from open to complete)

function completeTask(event) {
  const taskItem = event.target.closest(".to-do-item");

  if (taskItem) {
    const taskName = taskItem.querySelector(
      ".to-do-text-container p"
    ).textContent;
    const correspondingTask = taskList.find((task) => task.name === taskName);

    if (correspondingTask) {
      // Update the status of the corresponding task to "complete"
      correspondingTask.status = "complete";

      // Change the image src to filled
      const tick = taskItem.querySelector(".ticks");
      tick.src = "images/check-circle-filled.svg";

      // Toggle class to complete
      taskItem.classList.add("complete");
    }
    console.log(taskItem);
  }
}

/* Task Deletion
  Stuff*/

/* List Filtering
  Function for toggling between all/to do either with class list
  or filter function?
  Toggle between 'all' and 'to do' */

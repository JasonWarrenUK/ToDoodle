/* Set Variables */
let taskList = [{name: "test 1"}, {name: "test 2"}];
const taskForm = document.querySelector('form');
const toDoListContainer = document.getElementById('to-do-list')

/* Debug Tools */
  //Console Log All Tasks in the Current List
  const debugLogTasks = document.getElementById('logTasks');
  debugLogTasks.addEventListener('click', function (event) {
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
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Don't let the button make the page reload

    const taskName = document.getElementById('taskName').value;
    console.log("Task Name: " + taskName);
    let taskDateDue = document.getElementById('taskDateDue').value;
    console.log("Task Due: " + taskDateDue);
    let taskImportance = document.querySelector('input[name="taskImportance"]:checked');
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
function displayListItems (task){
    let taskItem = document.createElement('div');
    taskItem.innerHTML = 
    `   <div class="to-do-item">
          <div class="tick-container">
            <img src="images/check-circle.svg" />
          </div>
          <div class="to-do-text-container">
            <p>${task.name}</p>
          </div>
        </div>
    `
    toDoListContainer.appendChild('taskItem');
}

taskList.forEach((task)=>{
    displayListItems(task)
});


/* Task Deletion
  Stuff*/

/* Task Completion
  When complete, show complete tick
  get added to different list/ gets a .hidden ?>
  class added to the class list? */

/* List Filtering
  Function for toggling between all/to do either with class list
  or filter function?
  Toggle between 'all' and 'to do' */

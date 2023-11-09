test("Clicking on complete button marks the task as complete", () => {
  // First, let's create a new task.
  const taskName = "Test Task";
  const taskDateDue = "2023-12-31";

  // Fill in the form with the test task details
  document.getElementById("taskName").value = taskName;
  document.getElementById("taskDateDue").value = taskDateDue;
  document.querySelector('input[name="taskImportance"][value="high"]').checked = true;

  // Trigger the task creation event by submitting the form
  taskForm.dispatchEvent(new Event("submit"));

  // Now, let's find the newly created task in the list
  let taskItem = null;
  const taskItems = document.querySelectorAll(".to-do-item");
  for (const item of taskItems) {
    if (item.querySelector(".to-do-text-container p").textContent === taskName) {
      taskItem = item;
      break;
    }
  }

  // Confirm that the task was created
  notEqual(taskItem, null, "New task was created");

  // Check if the task is initially open
  equal(taskItem.status, "open", "Task is initially open");

  // Simulate clicking on the complete button
  taskItem.querySelector(".tick-container img").dispatchEvent(new Event("click"));

  // Check if the task is now marked as complete
  equal(taskItem.querySelector(".tick-container img").src, "images/check-circle-filled.svg", "Task is marked as complete");
});


//Add tasks to a list array so that I can keep track of them
test("Submitting a new task adds it to the list", () => {
    // test goes here


    //could I test this park of the function
    //  const newTask = new Task(taskName, taskDateDue, taskImportance);
    // console.log("Task to Be Pushed: " + newTask);

    //Push a new task to the stored list
    //tasks.push(newTask);
    //set the stored list
    //localStorage.setItem('tasks', JSON.stringify(tasks));
  });

  
//display tasks from array
test("Tasks from array show on screen", () => {
const taskData = [{ name: "test 1", importance: "high", status:"open" }];
displayListItems(taskData);

const taskElement = document.querySelector('.to-do-item');
const taskNameElement = document.querySelector('.to-do-text-container .task-name');
const taskImportanceElement = document.querySelector('.importance-container .task-importance');

equal(taskElement.classList.contains('to-do-item'), true, 'Task element has the correct class');
equal(taskNameElement.textContent, 'test 1', 'Task name is correct');
equal(taskImportanceElement.textContent, 'high', 'Task importance is correct');

});



//Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", () => {
    // test goes here
  });

//As a busy person, I want to filter out completed to-dos from my list so that I can focus on what’s left to do
test("Toggling the filter hides completed tasks from the list", () => {
    const completeButton = document.getElementById("completeButton");
    const actualContainer = document.getElementById('to-do-list');
    let tasks = [{name:"Wake up", status:"open"},{name:"Get some tea", status:"open"},{name:"Brush teeth", status:"open"}];
    completeButton.innerText = "Hide Completed Tasks";
    
    toggleCompleteTasks(tasks);
    const expected = "";

    equal(actualContainer.innerHTML, expected)

  });


//Other tests?

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
  });

  
//display tasks from array
test("Tasks from array show on screen when all items selected", () => {
  const taskData = { name: "test 1", importance: "high" };
  displayListItems(taskData);

  const taskElement = document.querySelector('.to-do-item');
  const taskName = taskElement.querySelector(".task-name");
  const taskImportance = taskElement.querySelector(".task-importance");
  
  const expectedName = "test 1";
  const expectedImportance = "high";
  
  equal(taskElement !== null, true, "Task element was added");
  equal(taskName.textContent, expectedName);
  equal(taskImportance.textContent, expectedImportance);
});


//Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", () => {
    // test goes here
  });

//As a busy person, I want to filter out completed to-dos from my list so that I can focus on what’s left to do
test("Toggling the filter hides completed tasks from the list", () => {
    // test goes here
  });


//Other tests?

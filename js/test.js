//* Complete

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

test("Toggling the filter hides completed tasks from the list", () => {
  const completeButton = document.getElementById("completeButton");
  const actualContainer = document.getElementById('to-do-list');
  let tasks = [{name:"Wake up", status:"open"},{name:"Get some tea", status:"open"},{name:"Brush teeth", status:"open"}];
  completeButton.innerText = "Hide Completed Tasks";
  
  toggleCompleteTasks(tasks);
  const expected = "";

  equal(actualContainer.innerHTML, expected)
});

test("Clicking on complete button marks the task as complete", () => {
  const mockTask = new Task("Mock Task", "2023-11-09", "normal");
  console.groupCollapsed("Before Pushing to Tasks");
    console.log("Name: " + mockTask.name);
    console.log("ID: " + mockTask.id);
    console.log("Status: " + mockTask.status);
    console.log("Tasks in List: " + tasks.length);
  console.groupEnd();
  
  tasks.push(mockTask);

  console.groupCollapsed("After Pushing to Tasks");
    console.log("Name: " + mockTask.name);
    console.log("ID: " + mockTask.id);
    console.log("Status: " + mockTask.status);
    console.log("Tasks in List: " + tasks.length);
  console.groupEnd();
  
  notEqual(mockTask.status, "complete", "Task should not be marked as complete");

  displayListItems(tasks);

  const mockLi = document.getElementById(mockTask.id);
  console.log("Task Li found: " + mockLi);
  completeTaskJS(mockLi);

  console.groupCollapsed("After Completing Task");
    console.log("Name: " + mockTask.name);
    console.log("ID: " + mockTask.id);
    console.log("Status: " + mockTask.status);
    console.log("Tasks in List: " + tasks.length);
  console.groupEnd();

  equal(mockTask.status, "complete", "Task should be marked as complete");

  console.log("Tasks in List Before Deleting: " + tasks.length);
  tasks.splice(tasks.findIndex(task => task.name === mockTask.name), 1);
  console.log("Tasks in List After Deleting: " + tasks.length);
});


//TODO Write These

test("Submitting a new task adds it to the list", () => {
  //could I test this park of the function
  //const newTask = new Task(taskName, taskDateDue, taskImportance);
  //console.log("Task to Be Pushed: " + newTask);

  //Push a new task to the stored list
  //tasks.push(newTask);
  //set the stored list
  //localStorage.setItem('tasks', JSON.stringify(tasks));
});

test("Deleting an entry removes it from the list", () => {
  // test goes here
});
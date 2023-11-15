
// test("Submitting a new task adds it to the list", () => {
//   const button = document.getElementById("taskSubmit");
//   const input = document.getElementById("taskName");
//   input.value = "New fake task";

//   button.click();

//   const fakeIndex = tasks.findIndex((task) => task.name === "New fake task");

//   equal(tasks[fakeIndex].status, "open", "task added has correct status");
//   equal(
//     tasks[fakeIndex].importance,
//     "normal",
//     "task added has correct importance"
//   );
//   equal(tasks[fakeIndex].name, "New fake task", "task added has correct name");

//   tasks.splice(fakeIndex, 1);
//   input.value = "";
// });


test("Tasks from array show on screen", () => {
  const taskData = [{ name: "test 1", importance: "high", status: "open" }];
  displayListItems(taskData);

  const taskElement = document.querySelector(".to-do-item");
  const taskNameElement = document.querySelector(
    ".to-do-text-container .task-name"
  );
  const taskImportanceElement = document.querySelector(
    ".importance-container .task-importance"
  );

  equal(
    taskElement.classList.contains("to-do-item"),
    true,
    "Task element has the correct class"
  );
  equal(taskNameElement.textContent, "test 1", "Task name is correct");
  equal(
    taskImportanceElement.textContent,
    "high",
    "Task importance is correct"
  );
});

// test("Clicking on complete button marks the task as complete", () => {
//   const mockTask = new Task("Complete Test", "2023-11-09", "normal");

//   console.groupCollapsed("Set Up");
//     console.groupCollapsed("Before Pushing to Tasks");
//       console.log("Name: " + mockTask.name);
//       console.log("ID: " + mockTask.id);
//       console.log("Status: " + mockTask.status);
//       console.log("Tasks in List: " + tasks.length);
//     console.groupEnd();

//     tasks.push(mockTask);

//     console.groupCollapsed("After Pushing to Tasks");
//       console.log("Name: " + mockTask.name);
//       console.log("ID: " + mockTask.id);
//       console.log("Status: " + mockTask.status);
//       console.log("Tasks in List: " + tasks.length);
//     console.groupEnd();
//   console.groupEnd();

//   console.group("Tests");
//     notEqual(mockTask.status, "complete", "Task should not be marked as complete");

//     displayListItems(tasks);

//     const mockLi = document.getElementById(mockTask.id);
//     console.log("Task Li found: " + mockLi);
//     completeTaskJS(mockLi);

//     console.groupCollapsed("After Completing Task");
//       console.log("Name: " + mockTask.name);
//       console.log("ID: " + mockTask.id);
//       console.log("Status: " + mockTask.status);
//       console.log("Tasks in List: " + tasks.length);
//     console.groupEnd();

//     equal(mockTask.status, "complete", "Task should be marked as complete");
//   console.groupEnd();

//   console.groupCollapsed("Clean Up")
//     console.groupCollapsed("Before CleanUp");
//       console.log("Tasks in List: " + tasks.length);
//       console.log("Tasks in Local Storage: " + localStorage.getItem('tasks'));
//     console.groupEnd();

//     tasks.splice(tasks.findIndex(task => task.name === mockTask.name), 1);

//     console.groupCollapsed("Array Cleaned");
//       console.log("Tasks in List: " + tasks.length);
//       console.log("Tasks in Local Storage: " + localStorage.getItem('tasks'));
//     console.groupEnd();

//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     console.groupCollapsed("Local Storage Cleaned");
//       console.log("Tasks in List: " + tasks.length);
//       console.log("Tasks in Local Storage: " + localStorage.getItem('tasks'));
//     console.groupEnd();
//   console.groupEnd();
// });

// test("Deleting an entry removes it from the list", () => {
//   const mockTask = new Task("Delete Test", "2023-11-09", "normal");
//   let mockTaskExists = doesXHaveY(tasks, mockTask);

//   console.groupCollapsed("Set Up");
//   console.groupCollapsed("Before Pushing to Tasks");
//   console.log("Name: " + mockTask.name);
//   console.log("ID: " + mockTask.id);
//   console.log("Status: " + mockTask.status);
//   console.log("Tasks in List: " + tasks.length);
//   console.log("List Contains Mock Task: " + mockTaskExists);
//   console.groupEnd();

//   tasks.push(mockTask);
//   mockTaskExists = doesXHaveY(tasks, mockTask);

//   console.groupCollapsed("After Pushing to Tasks");
//   console.log("Name: " + mockTask.name);
//   console.log("ID: " + mockTask.id);
//   console.log("Status: " + mockTask.status);
//   console.log("Tasks in List: " + tasks.length);
//   console.log("List Contains Mock Task: " + mockTaskExists);
//   console.groupEnd();
//   console.groupEnd();

//   console.group("Tests");
//   equal(mockTaskExists, true, "Task Should Exist");

//   displayListItems(tasks);

//   const mockLi = document.getElementById(mockTask.id);
//   console.log("Task Li found: " + mockLi);
//   deleteTaskJS(mockLi);
//   mockTaskExists = doesXHaveY(tasks, mockTask);

//   console.groupCollapsed("After Deleting Task");
//   console.log("Name: " + mockTask.name);
//   console.log("ID: " + mockTask.id);
//   console.log("Status: " + mockTask.status);
//   console.log("Tasks in List: " + tasks.length);
//   console.log("List Contains Mock Task: " + mockTaskExists);
//   console.groupEnd();

//   notEqual(mockTaskExists, true, "Task Should Not Exist");
//   console.groupEnd();

//   console.groupCollapsed("Clean Up");
//   console.groupCollapsed("Before Cleanup");
//   console.log("Tasks in List: " + tasks.length);
//   console.log("Tasks in Local Storage: " + localStorage.getItem("tasks"));
//   console.groupEnd();

//   tasks.splice(
//     tasks.findIndex((task) => task.name === mockTask.name),
//     1
//   );
//   localStorage.setItem("tasks", JSON.stringify(tasks));

//   console.groupCollapsed("After Cleanup");
//   console.log("Tasks in List: " + tasks.length);
//   console.log("Tasks in Local Storage: " + localStorage.getItem("tasks"));
//   console.groupEnd();
//   console.groupEnd();
// });

test("Toggling filters completed tasks from the list", () => {
  completeButton.innerText = "Hide Completed Tasks";

  const testTasks = [
    { name: "Wake up", status: "closed", id: "toggleTest1" },
    { name: "Get some tea", status: "open", id: "toggleTest2" },
    { name: "Brush your teeth", status: "open", id: "toggleTest3" },
  ];
  const test1 = toggleCompleteTasks(testTasks);

  equal(test1.length, 2, "New array is shorter than original");
  notEqual(
    test1[0].status,
    "closed",
    "status of first task in array is not closed"
  );
  notEqual(
    test1[1].status,
    "closed",
    "status of second task in array is not closed"
  );
});


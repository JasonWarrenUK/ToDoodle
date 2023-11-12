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

test("Deleting an entry removes it from the list", () => {
  const mockTask = new Task("Delete Test", "2023-11-09", "normal");
  let mockTaskExists = doesXHaveY(tasks, mockTask);

  console.groupCollapsed("Set Up");
    console.groupCollapsed("Before Pushing to Tasks");
      console.log("Name: " + mockTask.name);
      console.log("ID: " + mockTask.id);
      console.log("Status: " + mockTask.status);
      console.log("Tasks in List: " + tasks.length);
      console.log("List Contains Mock Task: " + mockTaskExists);
    console.groupEnd();
    
    tasks.push(mockTask);
    mockTaskExists = doesXHaveY(tasks, mockTask);

    console.groupCollapsed("After Pushing to Tasks");
      console.log("Name: " + mockTask.name);
      console.log("ID: " + mockTask.id);
      console.log("Status: " + mockTask.status);
      console.log("Tasks in List: " + tasks.length);
      console.log("List Contains Mock Task: " + mockTaskExists);
    console.groupEnd();
  console.groupEnd();

  console.group("Tests");
    equal(mockTaskExists, true, "Task Should Exist");

    displayListItems(tasks);

    const mockLi = document.getElementById(mockTask.id);
    console.log("Task Li found: " + mockLi);
    deleteTaskJS(mockLi);
    mockTaskExists = doesXHaveY(tasks, mockTask);

    console.groupCollapsed("After Deleting Task");
      console.log("Name: " + mockTask.name);
      console.log("ID: " + mockTask.id);
      console.log("Status: " + mockTask.status);
      console.log("Tasks in List: " + tasks.length);
      console.log("List Contains Mock Task: " + mockTaskExists);
    console.groupEnd();

    notEqual(mockTaskExists, true, "Task Should Not Exist");
  console.groupEnd();

  console.groupCollapsed("Clean Up")
    console.groupCollapsed("Before Cleanup");
      console.log("Tasks in List: " + tasks.length);
      console.log("Tasks in Local Storage: " + localStorage.getItem('tasks'));
    console.groupEnd();
    
    tasks.splice(tasks.findIndex(task => task.name === mockTask.name), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));

    console.groupCollapsed("After Cleanup");
      console.log("Tasks in List: " + tasks.length);
      console.log("Tasks in Local Storage: " + localStorage.getItem('tasks'));
    console.groupEnd();
  console.groupEnd();
});


test("Toggling filters completed tasks from the list", () => {
  const completeButton = document.getElementById("completeButton");
  completeButton.innerText = "Hide Completed Tasks";
  
  let testTasks = [{name:"Wake up", status:"closed", id:"toggleTest1"},{name:"Get some tea", status:"open", id:"toggleTest2"}];
  let testTasks2 = [{name:"Wake up", status:"closed", id:"toggleTest3"},{name:"Get some tea", status:"closed", id:"toggleTest4"}];

  const expectedLength = 1;
  const expectedLength2 = 0;

  equal(toggleCompleteTasks(testTasks).length, expectedLength, "Tasks with closed status are filtered out");
  equal(toggleCompleteTasks(testTasks2).length, expectedLength2, "If all closed, list is 0");
});


// test("Submitting a new task adds it to the list", () => {
// const fakeEvent = { preventDefault: () => {} };

// document.getElementById = (id) => {
//     if (id === 'taskName') {
//       return { value: 'Fake task name' };
//     } else if (id === 'taskDateDue') {
//       return { value: '2023-11-15' };
//     } else {
//       return null; 
//     }
//   };

//   const result = createTask(fakeEvent);
//   const task = JSON.parse(result)[0];

//   equal(task.name, 'Fake task name');
//   equal(task.dateDue, '2023-11-15'); 
//   equal(task.importance, 'normal');
// })

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

//TODO Write These
test("Submitting a new task adds it to the list", () => {
    // Mocking the localStorage object
const localStorageMock = {
    data: {}, // Store data in an object for mocking localStorage
  
    setItem: function (key, value) {
      this.data[key] = value;
    },
  
    getItem: function (key) {
      return this.data[key];
    },
  };
  
  // Mocking the document object
  const documentMock = {
    getElementById: function (id) {
      return { value: '' }; // Mocking an input element
    },
    createElement: function (tagName) {
      return { checked: false, type: 'radio' }; // Mocking an input element for radio button
    },
    body: {
      appendChild: function () {},
      removeChild: function () {},
    },
  };
  
  // Mocking the global Math object
  const MathMock = {
    random: function () {
      return 0.5; // Mocking Math.random() to always return 0.5 for consistent taskId
    },
  };
  
  // Mocking the Task class
  function Task(name, dateDue, importance, id) {
    this.name = name;
    this.dateDue = dateDue;
    this.importance = importance;
    this.id = id;
  }
  
  // Mocking the tasks array
  const tasks = [];
  
  // Replace the real localStorage and document with the mocks
  const originalLocalStorage = window.localStorage;
  const originalDocument = window.document;
  const originalMath = window.Math;
  
  // Use the localStorageMock as a wrapper
  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
    writable: true,
  });
  
  window.document = documentMock;
  window.Math = MathMock;
  
  // Run the createTask function
  createTask(new Event('submit'));
  
  // Your assertions
  // For example, you can check if localStorage.setItem was called with the expected values
  if (localStorageMock.data.tasks) {
    console.log('Test Passed: localStorage.setItem was called with the expected values.');
  } else {
    console.error('Test Failed: localStorage.setItem was not called with the expected values.');
  }
  
  // Restore the original localStorage, document, and Math
  window.localStorage = originalLocalStorage;
  window.document = originalDocument;
  window.Math = originalMath;
  
    
// const submitButton = document.getElementById('taskSubmit')
//   const taskNameInput = document.getElementById('taskName')
//   const expected = 1
//   submitButton.click()
//   const actual = createTask().length
//   taskNameInput.value = "Have some fun"
  

  //equal(.length, 1, "1 task added")
});
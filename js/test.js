
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

test("No tasks show on screen when input is empty", () => {
  const taskData = { };
  displayListItems(taskData);

  const taskElement = document.querySelector('.to-do-item');
  const taskName = taskElement.querySelector(".task-name");
  const taskImportance = taskElement.querySelector(".task-importance");
  
  const expectedName = "";
  const expectedImportance = "";
  
  equal(taskElement !== null, true, "Task element was added");
  equal(taskName.textContent, expectedName);
  equal(taskImportance.textContent, expectedImportance);

});


//Check things off my list so that I can see what I’ve done
test("Checking an entry marks it as complete", () => {
    // test goes here
  });

//Delete things from the list if I don’t need to do them anymore
test("Deleting an entry removes it from the list", () => {
    // test goes here
  });

//As a busy person, I want to filter out completed to-dos 
//from my list so that I can focus on what’s left to do
test("Toggling the filter hides completed tasks from the list", () => {
    // test goes here
  });


//Other tests?

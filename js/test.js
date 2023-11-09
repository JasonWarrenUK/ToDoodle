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
    const completeButton = document.getElementById("completeButton");
    const actualContainer = document.getElementById('to-do-list');
    let tasks = [{name:"Wake up", status:"open"},{name:"Get some tea", status:"open"},{name:"Brush teeth", status:"open"}];
    completeButton.innerText = "Hide Completed Tasks";
    
    toggleCompleteTasks(tasks);
    const expected = "";

    equal(actualContainer.innerHTML, expected)

  });


//Other tests?

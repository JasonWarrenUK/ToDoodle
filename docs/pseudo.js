//Pseudocode Workthroughs of Ideas

let taskList = [];


//Adding Tasks
  const taskBox = document.getElementById("newTaskForm");

  const taskAdd = taskBox.getElement("button");

  taskAdd.addEventListener(click) {
    addTask(stuff);
  }

  function addTask(taskName, taskDue, taskDo, taskStatus, taskPriority) {
    let task = {
      name: taskName,
      due: taskDue,
      do: taskDo,
      status: taskStatus,
      priority: taskPriority
    }
    taskList.push(task);
  }


//Filters & Views
  const listViews = document.getElementById("listViews");

  const listAll = listViews.getElementById("listAll");
  const listOpen = listViews.getElementById("listOpen");
  const listUrgent = listViews.getElementById("listUrgent");

  listAll.addEventListener(click) {
    view(stuff);
  }
  listOpen.addEventListener(click) {
    view(stuff);
  }
  listUrgent.addEventListener(click) {
    view(stuff);
  }

  function view(stuff) {
    return taskList.filter(stuff)
  }
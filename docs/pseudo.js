//Pseudocode Workthroughs of Ideas

  let taskList = [];


//Task Structure
  let task = {
    name: string,
    due: date, default none,
    type: string, default task,
    do: date, default today,
    status: string, default open,
    importance: string, default normal,

    //recurrence
    recur: book, default false,
    recurGap: int, default 1,
    recurUnit: string, default day,
    recurTrigger: eventListener, default status,
    recurAnchor: property, default due,
    end: ?,

    //calculated
    priority: days til due + importance
  }


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
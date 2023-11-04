//Task Properties
  type: string, default task
  do: date, default today
  //recurrence
  recur: book, default false,
  recurGap: int, default 1,
  recurUnit: string, default day,
  recurTrigger: eventListener, default status,
  recurAnchor: property, default due,
  end: ?,
  //calculated
  priority: days til due + importance

//Adding Tasks
  const taskBox = document.getElementById("newTaskForm");

  const taskAdd = taskBox.getElement("button");

  taskAdd.addEventListener(click) {
    addTask(stuff);
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
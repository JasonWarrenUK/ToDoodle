// select the form/input/result
const toDoListContainer = document.getElementById('to-do-list')

let taskList = [];



//Function for adding tasks(when submit is pressed add it to list array)


//Function for displaying tasks on the array
function displayListItems (task){
    let taskItem = document.createElement('div');
    taskItem.innerHTML = 
    `   <div class="to-do-item">
          <div class="tick-container">
            <img src="images/check-circle.svg" />
          </div>
          <div class="to-do-text-container">
            <p>${task}</p>
          </div>
        </div>
    `
    toDoListContainer.appendChild('taskItem');
}

taskList.forEach((task)=>{
    displayListItems(task)
});


//Function to remove tasks



//Function for complete tasks
// When complete, show complete tick
//get added to different list/ gets a .hidden ?>
// class added to the class list? 



//Function for toggling between all/to do either with class list
// or filter function?
// Toggle between 'all' and 'to do' 



//Ideas
//Ideas for how to create list?
// tasks could be added to an array
//(array.push to add and array.splice to remove?)
// (this could be a table? Each time we add something we add 
// a <tr>? Or could declare variable n and every time
// submit is pressed, add to <tr>[n] then n+1)
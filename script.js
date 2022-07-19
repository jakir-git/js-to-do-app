/**
 * Title: TO DO Application 
 * New Date: 20/07/2022
 * Credit: Learn with Sumit
 */

//Select element and assigning varialbes
let newTask         = document.querySelector('#new-task');
let form            = document.querySelector('form');
let incompleteUi    = document.querySelector('#items');
let completeUi      = document.querySelector('.complete-list ul');

let createTask = function(task){
    let listItem    = document.createElement('li');
    let label       = document.createElement('label');
    let inputBox    = document.createElement('input');
    label.innerText = task;

    inputBox.type   = 'checkbox';
    listItem.appendChild(inputBox);
    listItem.appendChild(label);
    
    return listItem;
}

let addTask = function(event){
    event.preventDefault();
    let listItem = createTask(newTask.value);
    if(newTask.value === ""){
        alert('Write something');
    }else{
        incompleteUi.appendChild(listItem);
        newTask.value = "";
    }
    bindIncompleteItems(listItem, completeTask);
}

let completeTask = function(){
    let listItem        = this.parentNode;
    let deleteBtn       = document.createElement('button');
    deleteBtn.innerText = 'Remove';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    let checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUi.appendChild(listItem);

    bindcompleteItems(listItem, deleteTask);
}

let deleteTask = function(){
    let listItem   = this.parentNode;
    let ul        = listItem.parentNode;
    ul.removeChild(listItem); 
}

let bindIncompleteItems = function(taskItem, checkboxClick){
    let checkBox        = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange   = checkboxClick;
}

let bindcompleteItems = function(taskItem, deleteBtnClick){
    let deleteBtn       = taskItem.querySelector('.delete');
    deleteBtn.onclick   = deleteBtnClick;
}

for(let i=0; i< incompleteUi.children.length; i++){
    bindIncompleteItems(incompleteUi.children[i], completeTask);
}

for(let i=0; i< completeUi.children.length; i++){
    bindcompleteItems(completeUi.children[i], deleteTask);
}

form.addEventListener('submit', addTask);
newTask.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    form.addEventListener('submit', addTask);
  }
});







let add=document.getElementById("d");
add.addEventListener("click", ()=>{
    addToDoItem();
});


let clear=document.getElementById("clearcompleted");
clear.addEventListener("click", ()=>{
    clearCompletedToDoItems();
});


let empty=document.getElementById("emptylist");
empty.addEventListener("click", ()=>{
    emptyList();
});



var toDoEntryBox = document.getElementById("entrybox");
var toDoList = document.getElementById("list");



function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    

    toDoList.appendChild(toDoItem);
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    toDoEntryBox.value="";
    newToDoItem(itemText, false);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}


function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    var toDoItems = toDoList.children;
    while (toDoItems.length > 0) {
        toDoItems.item(0).remove();
    }
}

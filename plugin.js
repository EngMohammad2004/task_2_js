let array = JSON.parse(localStorage.getItem("tasks") || "[]");

let addTask = document.getElementById("add");
let input = document.getElementById("input");
let tasks = document.getElementById("tasks");
let mission = document.getElementById("mission");
let edit = document.createElement("button");
let deleteButton = document.createElement("button");

addTask.addEventListener("click" , ()=> {
    if (!input.value) {
        alert("please enter your task")
    }
    else{
    let divs = document.createElement("div");
    let buttons = document.createElement("div");
    let edit = document.createElement("button");
    let deleteButton = document.createElement("button");
    divs.classList.add("divs");
    buttons.classList.add("buttons");
    edit.classList.add("edit");
    deleteButton.classList.add("deleteButton");
    let divsText = document.createTextNode(input.value);
    edit.textContent= "edit";
    let deleteText = document.createTextNode("Delete");
    divs.appendChild(divsText);
    deleteButton.appendChild(deleteText);
    buttons.appendChild(edit);
    buttons.appendChild(deleteButton);
    divs.appendChild(buttons);
    mission.appendChild(divs);
    //local storage
    array.push(input.value);
    localStorage.setItem("tasks" , JSON.stringify(array));
    location.reload();
    input.value = "";
    
    //edit
    edit.addEventListener("click" , ()=>{
        if (edit.textContent == "edit") {
            edit.textContent= "Save";
            input.value = divs.firstChild.textContent;
            addTask.disabled =true;
        }else{
            divs.textContent = input.value;
            input.value = "";
            divs.appendChild(buttons);
            edit.textContent = "edit"
            localStorage.setItem("tasks" , JSON.stringify(array));
            addTask.disabled =false;
        }
    });
    //remove
    deleteButton.addEventListener("click" ,()=>{
        array.splice(i,1);
        localStorage.setItem("tasks" , JSON.stringify(array));
        location.reload();
        divs.remove(deleteButton.parentElement);
    });
    }
});
window.onload = ()=>{
    if ( localStorage.getItem("tasks")) {
    localStorage.getItem("tasks") == JSON.parse(localStorage.getItem("tasks"));
            
        array.forEach(task => {
        let divs = document.createElement("div");
        let buttons = document.createElement("div");
        let edit = document.createElement("button");
        let deleteButton = document.createElement("button");
        divs.classList.add("divs");
        buttons.classList.add("buttons");
        edit.classList.add("edit");
        deleteButton.classList.add("deleteButton");
        let divsText = document.createTextNode(task);
        edit.textContent= "edit";
        let deleteText = document.createTextNode("Delete");
        divs.appendChild(divsText);
        deleteButton.appendChild(deleteText);
        buttons.appendChild(edit);
        buttons.appendChild(deleteButton);
        divs.appendChild(buttons);
        mission.appendChild(divs);
        edit.addEventListener("click" , ()=>{
        if (edit.textContent == "edit") {
            edit.textContent= "Save";
            input.value = divs.firstChild.textContent;
            addTask.disabled =true;
        }else{
            divs.firstChild.textContent = input.value;
            let i =Array.from(mission.children).indexOf(divs);
            array[i] = input.value;
            localStorage.setItem("tasks" , JSON.stringify(array));
            input.value ="";
            edit.textContent = "edit";
            addTask.disabled =false;
        }
    });
     //remove
    deleteButton.addEventListener("click" ,()=>{
            let i =Array.from(mission.children).indexOf(divs);
            array.splice(i,1);
            localStorage.setItem("tasks" , JSON.stringify(array));
            divs.remove();
        });
    });
}
    }    

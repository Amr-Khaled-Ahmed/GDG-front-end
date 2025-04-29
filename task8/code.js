let input = document.getElementById("input-field");
let addBtn = document.querySelector(".submit-button");
let radioInputs = document.querySelectorAll('input[type="radio"]');
let bottom = document.querySelector(".bottom");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];


document.addEventListener("DOMContentLoaded", () => {
    loadTask()
    setupEventListeners();
});



function loadTask(){
    const savedTasks = localStorage.getItem("tasks");
    if(savedTasks){
        tasks = JSON.parse(savedTasks)
    }
    filterTasks()
}

function setupEventListeners(){
    addBtn.addEventListener("click", ()=>{addTask()});
    
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    radioInputs.forEach(radio => {
        radio.addEventListener("change", filterTasks);
      });


    bottom.addEventListener("click" , handleTaskAction)
      
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
    const taskText = input.value.trim();
    console.log(taskText)
    // Basic validation 
    if (!taskText ) {
        alert("Please enter a task.");
        return;
    }
    
    const newTask = {
        id:Date.now(),
        text: taskText,
        completed: false,
    }
    
    tasks.push(newTask);
    saveTasks();
    filterTasks()
    input.value = ""
    
}

function filterTasks(){
    let filteredTasks = []
    const selectedFilter = document.querySelector('input[type="radio"]:checked').id;

    console.log(selectedFilter)

    switch(selectedFilter) {
        case "value-1":
            filteredTasks = tasks.filter(task => !task.completed);
            break;
        case "value-2":
            filteredTasks = tasks.filter(task => task.completed);
            break;
        case "value-3":
            filteredTasks = [...tasks]
            break;
    }
    renderTasks(filteredTasks)

}

function renderTasks(tasksToRender) {
    if (tasksToRender.length === 0) {
        bottom.innerHTML = `<div class="empty-state"> No Tasks found</div>`; // Fixed innerHtml to innerHTML
        return;
    }

    bottom.innerHTML = ""; // Clear the container before rendering

    tasksToRender.forEach(task => {
        const taskElement = document.createElement("div");
        taskElement.className = `card ${task.completed ? "completed" : ""}`;
        taskElement.dataset.id = task.id;

        taskElement.innerHTML = `
        <label class="container-checkbox">
            <input type="checkbox" class="task-checkbox" ${task.completed ? "checked" : ""}> <!-- Added checkbox functionality -->
        </label>
        <span class="task-text"> ${task.text} </span>
        <div class="action-buttons">
            <button class="delete-button">Delete</button>
            <button class="edit-button">Edit</button>
        </div>    
        `;
        bottom.appendChild(taskElement);
    });
}

function deleteTask(taskId) {
    tasks = tasks.filter(task => task.id !== taskId);
    saveTasks();
    filterTasks();
}

function handleTaskAction(event) {
    const taskElement = event.target.closest(".card");
    if (!taskElement) return; // If the click is not on a task element, do nothing

    const taskId = parseInt(taskElement.dataset.id);

    if (event.target.classList.contains("delete-button")) {
        deleteTask(taskId);
        return;
    }

    if (event.target.classList.contains("task-checkbox")) {
        toggleTaskCompletion(taskId, event.target.checked); // Handle checkbox toggle
        return;
    }
}

function toggleTaskCompletion(taskId, isCompleted) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = isCompleted; // Update the completed status
        saveTasks();
        filterTasks();
    }
}


function editTask(taskId) {
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        const newTaskText = prompt("Edit your task:", task.text);
        if (newTaskText !== null && newTaskText.trim() !== "") {
            task.text = newTaskText.trim(); // Update the task text
            saveTasks();
            filterTasks();
        }
    }
}

function handleTaskAction(event) {
    const taskElement = event.target.closest(".card");
    if (!taskElement) return; 

    const taskId = parseInt(taskElement.dataset.id);

    if (event.target.classList.contains("delete-button")) {
        deleteTask(taskId);
        return;
    }

    if (event.target.classList.contains("edit-button")) {
        editTask(taskId); 
        return;
    }

    if (event.target.classList.contains("task-checkbox")) {
        toggleTaskCompletion(taskId, event.target.checked); 
        return;
    }
}
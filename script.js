// Select elements
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks
function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = "task-item";
        if (task.completed) li.classList.add("completed");

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="complete-btn" onclick="toggleComplete(${index})">✔</button>
                <button class="edit-btn" onclick="editTask(${index})">✏</button>
                <button class="delete-btn" onclick="deleteTask(${index})">🗑</button>
            </div>
        `;
        taskList.appendChild(li);
    });
}

// Add task
addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text === "") return alert("Please enter a task");
    tasks.push({ text, completed: false });
    taskInput.value = "";
    saveTasks();
    renderTasks();
});

// Mark complete
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    saveTasks();
    renderTasks();
}

// Edit task
function editTask(index) {
    const newText = prompt("Edit your task:", tasks[index].text);
    if (newText !== null && newText.trim() !== "") {
        tasks[index].text = newText.trim();
        saveTasks();
        renderTasks();
    }
}

// Delete task
function deleteTask(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }
}

// Save to localStorage
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Initial render
renderTasks();

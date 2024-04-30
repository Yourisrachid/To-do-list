export let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
export const submit = document.getElementById("submit")
export const taskInput = document.getElementById("task")
export const ul = document.getElementById("taskList");

export function updateLocalStorage() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

export function submitTask() {
    const taskValue = taskInput.value.trim();
    if (taskValue !== "") {
        const newTask = { task: taskValue, time: getCurrentDateTime(), done: false };
        tasks.push(newTask);
        taskInput.value = "";
        displayTable(newTask);
        updateLocalStorage();
    } else {
        alert("No task to submit !");
    }
}

export function updateCheckboxState(index, isChecked) {
    tasks[index].done = isChecked;
    updateLocalStorage();
}

export function displayTable(taskitem) {

    const li = document.createElement('li');
    li.className = "task";

    const taskText = document.createElement('p');
    taskText.textContent = taskitem.task;
    li.appendChild(taskText);

    const timeSpan = document.createElement('span');
    timeSpan.textContent = taskitem.time;
    li.appendChild(timeSpan);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = taskitem.done;
    checkbox.addEventListener('change', function() {
        taskitem.done = this.checked;
        updateLocalStorage();
        if (this.checked) {
            li.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
            li
        } else {
            li.style.backgroundColor = '';
        }
    });

    const removeButton = document.createElement('img');
    removeButton.classList.add('bin')
    removeButton.src = 'assets/img/bin.svg';
    removeButton.addEventListener('click', function() {
        ul.removeChild(li);
        tasks = tasks.filter(task => task !== taskitem);
        updateLocalStorage();
    });


    li.appendChild(checkbox);
    li.appendChild(removeButton);
    ul.appendChild(li);
}


export function displayTasksFromLocalStorage() {
    tasks.forEach(task => {
        displayTable(task);
    });
}

const _initTime = Date.now()

function getElapsedTime() {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function getCurrentDateTime() {
    const currentDate = new Date();


    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();


    const hour = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');
    const seconds = String(currentDate.getSeconds()).padStart(2, '0');


    const dateTimeString = `${day}/${month}/${year} - ${hour}:${minutes}:${seconds}`;

    return dateTimeString;
}



//-------------------------------------------------------


let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.body.querySelector('#dark-mode-toggle');

const activateDarkMode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'active');
}

const deactivateDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkMode', null);
}

const toggleDarkMode = () => {
    if (darkModeToggle.checked) {
        activateDarkMode();
    } else {
        deactivateDarkMode();
    }
}

if (darkMode === 'active') {
    darkModeToggle.checked = true;
    activateDarkMode();
} else {
    darkModeToggle.checked = false;
    deactivateDarkMode();
}

darkModeToggle.addEventListener('change', () => {
    toggleDarkMode();
});


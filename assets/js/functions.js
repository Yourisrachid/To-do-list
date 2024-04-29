export const tasks = []
export const submit = document.getElementById("submit")
export const taskInput = document.getElementById("task")
export const ul = document.getElementsByName("ul")

export function submitTask () {
    const taskValue = taskInput.value.trim();
    if (taskValue !== "") {
        const currentTime = getElapsedTime();
        tasks.push(taskValue)
        taskInput.value = ""
        displayTable(taskValue);
    } else {
        alert("No task to submit !")
    }
}


export function displayTable(taskValue) {

    const li = document.createElement('li')
    const ul = document.querySelector('ul')
    
    li.className="task"

    const taskText = document.createElement('p');
    taskText.textContent = taskValue;
    li.appendChild(taskText);

    const timeSpan = document.createElement('span');
    timeSpan.textContent = getCurrentDateTime();
    li.appendChild(timeSpan);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);

    ul.appendChild(li)


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
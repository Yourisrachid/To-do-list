import * as mod from "./functions.js";

document.addEventListener('DOMContentLoaded', function() {
    mod.updateLocalStorage();
    mod.displayTasksFromLocalStorage();
    submit.addEventListener("click", mod.submitTask)
});


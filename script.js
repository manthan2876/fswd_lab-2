import { tasks, addTask, sortTasksByPriority, getTasksDueWithin, scheduleReminders } from "./task.js";
const task = {
    title: "Submit Assignment",
    dueTime: 2,
    priority: "High",
};
addTask(tasks,task)

document.getElementById("add-task-form").addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const duetime = document.getElementById("duetime").value;
    const priority = parseFloat(document.getElementById("priority").value);
    addTask(tasks, { title, duetime, priority});
    e.target.reset();
});
document.getElementById("due-task-form").addEventListener("submit",e => {
    e.preventDefault();
    const duetime = document.getElementById("due").value;
    getTasksDueWithin(duetime);
    e.target.reset();
});
document.querySelector('.sort-button').addEventListener('click', fun);
function fun(){
    sortTasksByPriority();
}
scheduleReminders();
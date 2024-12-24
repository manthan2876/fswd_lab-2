export const tasks = [];
export const addTask = (collection, task) => {
    collection.push(task);
};
export function sortTasksByPriority() {
    tasks.sort((a, b) => {
        const priorityOrder = { High: 1, Medium: 2, Low: 3 };
        return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
    console.log("Tasks sorted by priority:", tasks);
}
export function getTasksDueWithin(minutes) {
    const now = 0; 
    const dueTasks = tasks.filter(task => task.dueTime <= now + minutes);
    document.getElementById("taskListContainer").innerHTML = dueTasks.map(task => `
        <p class="taskDescription">${task.title} Due in: ${task.dueTime} min, Priority: ${task.priority}</p>
    `);
    return dueTasks;
}
export function scheduleReminders() {
    tasks.forEach(task => {
        setTimeout(() => {
            document.getElementById("taskReminderContainer").innerHTML = `
                <p class="taskDescription">Task "${task.title}" is due now!</p>
            `;
            console.log(`Reminder: Task "${task.title}" is due now!`);
        }, task.dueTime * 1000); 
    });
}
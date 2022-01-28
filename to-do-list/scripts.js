let addTask = () => {
    let parent = document.querySelector('#task-list');
    let newli = document.createElement("li");
    newli.innerHTML = '<input type="checkbox">\n' +
        '<span class="task">'+ document.querySelector("#input-task").value + '</span>\n' +
        '<button class="delete-btn" onclick = "deleteTask(this); refreshTasks();">x</button>';
    parent.appendChild(newli);
    document.querySelector("#input-task").value = '';
};

let taskList;
let refreshTasks = () => {
    let result = [];
    let getTaskList = () => {
        let tasks = document.querySelectorAll('.task');
        for (let i = 0; i < tasks.length; i++) {
            result.push(tasks[i].textContent);
        }
        return result;
    };
    getTaskList();
    taskList = result;

    localStorage.setItem("tasks", JSON.stringify(taskList));
};

let deleteTask = (obj) => {obj.parentNode.remove();};

let begining = () => {
    taskList = JSON.parse(localStorage.getItem('tasks')) || []; console.log(taskList);
    for (x in taskList) {
        parent = document.querySelector('#task-list');
        newli = document.createElement('li');
        newli.innerHTML = '<input type=\'checkbox\'>\n' +
            '<span class=\'task\'>' + taskList[x] + '</span>\n' +
            '<button class=\'delete-btn\' onclick = \'deleteTask(this); refreshTasks();\'>x</button>';
        parent.appendChild(newli);
    }
};
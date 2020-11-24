const btn = document.getElementById("btn");
const target = document.getElementById("task");

function gettask() {
    const task = [];
    let newtask = {};
    let taskid = task.length + 1;
    let taskname = document.getElementById("new-task").value;
    let taskstatus = "作業中";
    newtask.id = taskid;
    newtask.name = taskname;
    newtask.status = taskstatus;
    task.push(newtask);
}

function add() {
    gettask();
    let tr = document.createElement('tr');
    for (i = 0; i <= task.length; i++) {
        let tdid = document.createElement('td');
        td.innerHTML = task[i].taskid;
        tr.appendChild(tdid);
        let tdname = document.createElement('td');
        td.innerHTML = task[i].taskname;
        tr.appendChild(tdname);
        let tdstatus = document.createElement('td');
        td.innerHTML = task[i].taskstatus;
        tr.appendChild(tdstatus);
    }
}
btn.addEventListener("click", add)
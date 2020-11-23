const btn = document.getElementById("btn");
const target = document.getElementById("task");
let task = [];
let newtask = {};

function gettask() {
    let taskid = task.length + 1;
    let taskname = document.getElementById("new-task").value;
    let taskstatus = "作業中";
    newtask.id = taskid;
    newtask.name = taskname;
    newtask.status = taskstatus;
    task.push(newtask);
    return newtask
}

function add() {
    gettask();
    let tr = document.createElement("tr");
    tr.innerHTML = '<td>' + newtask.id + '</td><td>' + newtask.name + '</td><td><button>' + newtask.status + '</button></td><td><button>削除</button></td>';
    target.appendChild(tr);
}
btn.addEventListener("click", add)
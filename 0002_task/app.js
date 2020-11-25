const btn = document.getElementById('btn');
const tasklist = [];

function gettask() {
    let newtask = {};
    let taskid = tasklist.length + 1;
    let taskname = document.getElementById('new-task').value;
    newtask.id = taskid;
    newtask.name = taskname;
    newtask.status = '作業中';
    tasklist.push(newtask);
    newtask = {};
}

function add() {
    gettask();
    const target = document.getElementById('task');
    let tr = document.createElement('tr');
    let tdid = document.createElement('td');
    tdid.innerHTML = tasklist[tasklist.length - 1].id;
    tr.appendChild(tdid);
    let tdname = document.createElement('td');
    tdname.innerHTML = tasklist[tasklist.length - 1].name;
    tr.appendChild(tdname);
    let tdstatus = document.createElement('td');
    tdstatus.innerHTML = tasklist[tasklist.length - 1].status;
    tr.appendChild(tdstatus);
    target.appendChild(tr);
}
btn.addEventListener('click', add)
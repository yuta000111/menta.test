const btn = document.getElementById('btn');
const tasklist = [];

function gettask() {
    let newtask = {};
    const taskid = tasklist.length + 1;
    const taskname = document.getElementById('new-task').value;
    newtask.id = taskid;
    newtask.name = taskname;
    newtask.status = '作業中';
    tasklist.push(newtask);
    newtask = {};
}

function add() {
    gettask();
    const target = document.getElementById('task');
    const tr = document.createElement('tr');
    const tdid = document.createElement('td');
    tdid.innerHTML = tasklist[tasklist.length - 1].id;
    tr.appendChild(tdid);
    const tdname = document.createElement('td');
    tdname.innerHTML = tasklist[tasklist.length - 1].name;
    tr.appendChild(tdname);
    const tdstatus = document.createElement('td');
    tdstatus.innerHTML = tasklist[tasklist.length - 1].status;
    tr.appendChild(tdstatus);
    target.appendChild(tr);
}
btn.addEventListener('click', add)
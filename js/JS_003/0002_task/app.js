const btn = document.getElementById('btn');
const tasklist = [];

function gettask() {
    const newtask = {
        id: tasklist.length + 1,
        name: document.getElementById('new-task').value,
        status: '作業中',
    };
    tasklist.push(newtask);
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
const btn = document.getElementById("btn");
const target = document.getElementById("task");
const tasklist = [];

function gettask() {
    let newtask = {};
    let taskid = tasklist.length + 1;
    let taskname = document.getElementById("new-task").value;
    let taskstatus = "作業中";
    newtask.id = taskid;
    newtask.name = taskname;
    newtask.status = taskstatus;
    tasklist.push(newtask);
    newtask = {};
}

function add() {
    gettask();
    console.log(tasklist[0].id)
    let tr = document.createElement('tr');
    for (i = 0; i < tasklist.length; i++) {
        let tdid = document.createElement('td');
        tdid.innerHTML = tasklist[i].id;
        tr.appendChild(tdid);
        let tdname = document.createElement('td');
        tdname.innerHTML = tasklist[i].name;
        tr.appendChild(tdname);
        let tdstatus = document.createElement('td');
        tdstatus.innerHTML = tasklist[i].status;
        tr.appendChild(tdstatus);
    }
    target.appendChild(tr);
}
btn.addEventListener("click", add)
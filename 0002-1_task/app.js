const btn = document.getElementById('btn');
const target = document.getElementById('task')
const todolist = []

btn.addEventListener('click', () => {
    let newtask = document.getElementById('new-task');
    const task = { name: newtask.value, status: "作業中" };
    todolist.push(task);
    newtask.textContent = '';
    showtodo();
})

const showtodo = () => {
    target.textContent = '';
    todolist.forEach((todo, index) => {
        const tr = document.createElement('tr');
        target.appendChild(tr);
        const todolistid = document.createElement('td');
        const todolistname = document.createElement('td');
        const todoliststatus = document.createElement('td');
        const todolistdelete = document.createElement('td');

        todolistid.textContent = index + 1;
        todolistname.textContent = todo.name;

        tr.appendChild(todolistid);
        tr.appendChild(todolistname);
        tr.appendChild(todoliststatus);
        tr.appendChild(todolistdelete);

        todoliststatus.appendChild(workbtn());
        todolistdelete.appendChild(deletebtn(tr));
    })
};

const workbtn = () => {
    const statusbutton = document.createElement('button');
    statusbutton.textContent = '作業中';
    return statusbutton
};

const deletebtn = tr => {
    const deletebutton = document.createElement('button');
    deletebutton.textContent = '削除'
    const number = tr.rowIndex - 1;
    deletebutton.addEventListener('click', function() {
        todolist.splice(number, 1);
        showtodo();
    })
    return deletebutton;
}
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


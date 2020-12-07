const btn = document.getElementById('btn');
const target = document.getElementById('task');
const todolist = [];
const workstatus = document.getElementById('workstatus');
const donestatus = document.getElementById('donestatus');
const allstatus = document.getElementById('allstatus');

workstatus.addEventListener('input', () => {
    const worktask = todolist.filter(todo => {
        return (todo.status == '作業中')
    })
    showtodo(worktask)
})

donestatus.addEventListener('input', () => {
    const donetask = todolist.filter(todo => {
        return (todo.status == '完了')
    })
    showtodo(donetask)
})

allstatus.addEventListener('input', () => {
    showtodo()
})

btn.addEventListener('click', () => {
    const newtask = document.getElementById('new-task');
    const task = { id: "", name: newtask.value, status: '作業中' };
    todolist.push(task);
    newtask.value = '';
    if (donestatus.checked) {
        return
    } else if (workstatus.checked) {
        const worktask = todolist.filter(todo => {
            todolist[todolist.length - 1].id = todolist.length
            return (todo.status == '作業中')
        })
        showtodo(worktask)
    } else { showtodo(); }

})

const showtodo = array => {
    target.innerHTML = '';
    if (array) {
        array.forEach((todo, index) => {
            const tr = document.createElement('tr');
            target.appendChild(tr);
            const todolistid = document.createElement('td');
            const todolistname = document.createElement('td');
            const todoliststatus = document.createElement('td');
            const todolistdelete = document.createElement('td');
            const number = todo.id - 1
            todolistid.textContent = todo.id;
            todolistname.textContent = todo.name;
            tr.appendChild(todolistid);
            tr.appendChild(todolistname);
            tr.appendChild(todoliststatus);
            tr.appendChild(todolistdelete);
            todoliststatus.appendChild(workbtn(todo, number));
            todolistdelete.appendChild(deletebtn(index));

        })
    } else {
        target.textContent = '';
        todolist.forEach((todo, index) => {
            const tr = document.createElement('tr');
            target.appendChild(tr);
            const todolistid = document.createElement('td');
            const todolistname = document.createElement('td');
            const todoliststatus = document.createElement('td');
            const todolistdelete = document.createElement('td');
            todo.id = index + 1;
            todolistid.textContent = index + 1;
            todolistname.textContent = todo.name;
            tr.appendChild(todolistid);
            tr.appendChild(todolistname);
            tr.appendChild(todoliststatus);
            tr.appendChild(todolistdelete);

            todoliststatus.appendChild(workbtn(todo, index));
            todolistdelete.appendChild(deletebtn(index));
        })
    }
};

const workbtn = (todo, number) => {
    const statusbutton = document.createElement('button');
    statusbutton.textContent = todo.status;
    statusbutton.addEventListener('click', () => {
        if (statusbutton.textContent == '作業中') {
            todolist[number].status = '完了'
            showtodo(todolist);
        } else if (statusbutton.textContent == '完了') {
            todolist[number].status = '作業中'
            showtodo(todolist);
        } else { showtodo(todolist); }
    })
    return statusbutton
};

const deletebtn = index => {
    const deletebutton = document.createElement('button');
    deletebutton.textContent = '削除'
    deletebutton.addEventListener('click', () => {
        todolist.splice(index, 1);
        showtodo();
    })
    return deletebutton;
}
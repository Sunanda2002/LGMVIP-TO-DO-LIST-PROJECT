document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
  
    addBtn.addEventListener('click', addTodo);
  
    function addTodo() {
      const task = todoInput.value.trim();
      if (task === '') return;
  
      const todoItem = createTodoItem(task);
      todoList.appendChild(todoItem);
      todoInput.value = '';
    }
  
    function createTodoItem(task) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const label = document.createElement('label');
      label.textContent = task;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', deleteTodo);
  
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteBtn);
      return li;
    }
  
    function deleteTodo() {
      const listItem = this.parentElement;
      todoList.removeChild(listItem);
    }
  });
  
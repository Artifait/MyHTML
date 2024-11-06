function toggleComplete(item) {
    item.classList.toggle('completed');
  }
  
  function deleteItem(event) {
    event.stopPropagation();
    const item = event.target.closest('.todo-item');
    item.remove();
  }
  
  function addTask() {
    const taskInput = document.getElementById('new-task-input');
    const taskText = taskInput.value.trim();
    
    if (taskText === "") {
        alert("Пожалуйста, введите текст задачи.");
        return;
    }
  
    // Создаем новый элемент задачи
    const newTask = document.createElement('li');
    newTask.classList.add('todo-item');
    newTask.onclick = () => toggleComplete(newTask);
    
    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.textContent = '✔️';
    newTask.appendChild(icon);
    
    const text = document.createElement('span');
    text.classList.add('task-text');
    text.textContent = taskText;
    newTask.appendChild(text);
    
    const deleteButton = document.createElement('span');
    deleteButton.classList.add('delete');
    deleteButton.textContent = '❌';
    deleteButton.onclick = (event) => deleteItem(event);
    newTask.appendChild(deleteButton);
    
    // Добавляем новую задачу в список
    document.querySelector('.todo-list').appendChild(newTask);
  
    // Очищаем поле ввода
    taskInput.value = "";
  }
  
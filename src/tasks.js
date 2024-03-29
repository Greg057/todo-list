class Task {
  constructor(text, priority = 'low', dueDate = null, project = null) {
    this.text = text;
    this.priority = priority;
    this.dueDate = dueDate;
    this.project = project;
  }

  createUI() {
    const tasks = document.querySelector('#tasks');
    const taskItem = document.createElement('div');
    taskItem.innerHTML = `<div class="task-item" id="project-${this.project}">
                                <span class="material-symbols-outlined clickable" id="remove-button-task">radio_button_unchecked</span>
                                <div class="task-text">${this.text}</div>
                                <div class="date">${this.dueDate}</div>
                                <span class="material-symbols-outlined" id=${this.priority}>priority_high</span>
                                <span class="material-symbols-outlined clickable remove-button" id="remove-button-task">delete</span>
                            </div>`;
    tasks.appendChild(taskItem);

    const childToRemove = document.querySelector('.task-field');
    tasks.removeChild(childToRemove);

    const addTaskBtn = document.querySelector('#add-task');
    addTaskBtn.style.visibility = 'visible';

    const removeButtons = document.querySelectorAll('#remove-button-task');
    removeButtons.forEach((button) => button.addEventListener('click', this.removeTask));

    return tasks;
  }

  removeTask() {
    const taskItem = this.parentNode;
    taskItem.parentNode.removeChild(taskItem);
  }
}

function addTask(event) {
  event.preventDefault();
  const textForm = document.getElementById('text-field').value;
  const priorityForm = document.querySelector('#priority').value;
  const dateForm = document.querySelector('#date').value;

  const header = document.querySelector('.header-main').textContent;
  const headerText = ['Today', 'This week', 'Inbox'];
  if (!headerText.includes(header)) {
    const task = new Task(textForm, priorityForm, dateForm, header);
    task.createUI();
  } else {
    const task = new Task(textForm, priorityForm, dateForm);
    task.createUI();
  }
}

function closeInput(event) {
  const inputField = event.target.parentNode.parentNode;
  inputField.parentNode.removeChild(inputField);
  const addTaskBtn = document.querySelector('#add-task');
  addTaskBtn.style.visibility = 'visible';
}

function success() {
  if (document.getElementById('text-field').value === '') {
    document.getElementById('add-task-form').disabled = true;
  } else {
    document.getElementById('add-task-form').disabled = false;
  }
}

export default function openTaskInput() {
  const tasks = document.querySelector('#tasks');
  const inputField = document.createElement('div');
  inputField.classList.add('task-field');
  inputField.innerHTML = `<form>
                                <input type="text" id="text-field" placeholder="What is your task?" required>
                                <select id="priority">
                                    <option value="low">Priority low</option>
                                    <option value="medium">Priority medium</option>
                                    <option value="high">Priority high</option>
                                </select>
                                <input type="date" id="date"></input>
                                <button type="submit" class="clickable" id="add-task-form" disabled>Add task</button>
                                <span class="material-symbols-outlined clickable" id="close">close</span>
                            </form>`;
  tasks.appendChild(inputField);

  const addTaskBtn = document.querySelector('#add-task');
  addTaskBtn.style.visibility = 'hidden';

  const closeBtn = document.querySelector('#close');
  closeBtn.addEventListener('click', closeInput);

  const textInput = document.querySelector('#text-field');
  textInput.addEventListener('keyup', success);

  const addTaskFormBtn = document.querySelector('#add-task-form');
  addTaskFormBtn.addEventListener('click', (event) => addTask(event));
}

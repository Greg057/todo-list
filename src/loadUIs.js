function loadUIInbox() {
  const header = document.querySelector('.header-main');
  header.textContent = 'Inbox';

  const addTask = document.querySelector('#add-task');
  addTask.style.display = 'flex';

  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach((task) => {
    if (task.style.display === 'none') {
      task.style.display = 'flex';
    }
  });
}

function loadUIToday() {
  const addTask = document.querySelector('#add-task');
  addTask.style.display = 'none';

  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach((task) => {
    if (task.children[2].textContent !== getDate('today')) {
      task.style.display = 'none';
    } else if (task.style.display === 'none') {
      task.style.display = 'flex';
    }
  });
}

function loadUIThisWeek() {
  const addTask = document.querySelector('#add-task');
  addTask.style.display = 'none';

  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach((task) => {
    if (!getDate('week').includes(task.children[2].textContent)) {
      task.style.display = 'none';
    } else if (task.style.display === 'none') {
      task.style.display = 'flex';
    }
  });
}

function loadUIProject(projectName) {
  const header = document.querySelector('.header-main');
  header.textContent = projectName;

  const addTask = document.querySelector('#add-task');
  addTask.style.display = 'flex';

  const taskItems = document.querySelectorAll('.task-item');
  taskItems.forEach((task) => {
    if (task.id !== `project-${header.textContent}`) {
      task.style.display = 'none';
    } else if (task.style.display === 'none') {
      task.style.display = 'flex';
    }
  });
}

function getDate(text) {
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  const yyyy = today.getFullYear();
  if (dd < 10) {
    dd = `0${dd}`;
  }

  if (mm < 10) {
    mm = `0${mm}`;
  }
  today = `${yyyy}-${mm}-${dd}`;

  if (text === 'today') {
    return today;
  }
  const curr = new Date();
  const week = [];
  for (let i = 1; i <= 7; i++) {
    const first = curr.getDate() - curr.getDay() + i;
    const day = new Date(curr.setDate(first)).toISOString().slice(0, 10);
    week.push(day);
  }
  return week;
}

export {
  loadUIInbox, loadUIToday, loadUIThisWeek, loadUIProject,
};

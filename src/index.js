import './style/sidebar.css';
import './style/main.css';
import { openTaskInput } from './tasks';

const addTaskBtn = document.querySelector("#add-task")

addTaskBtn.addEventListener("click", openTaskInput)

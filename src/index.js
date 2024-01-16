import './style/sidebar.css';
import './style/main.css';
import { openTaskInput } from './tasks';
import { loadUIInbox, loadUIToday, loadUIThisWeek } from './loadUIs';


const addTaskBtn = document.querySelector("#add-task")
addTaskBtn.addEventListener("click", openTaskInput)


const navItems = document.querySelectorAll(".clickable")
navItems.forEach((button) => {button.addEventListener("click", () => openMain(button.children[1].textContent))})

function openMain (text) {
    const header = document.querySelector(".header-main")
    header.textContent = text
    if (text === "Inbox") {
        loadUIInbox()
    } else if (text === "Today") {
        loadUIToday()
    }
    else {
        loadUIThisWeek()
    }
}

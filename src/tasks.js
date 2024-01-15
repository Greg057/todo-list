

class Task {
    constructor(text, priority = "low", dueDate = null) {
        this.text = text
        this.priority = priority
        this.dueDate = dueDate
    }

    createUI () {
        const tasks = document.querySelector("#tasks")
        const taskItem = document.createElement("div")
        taskItem.innerHTML = `<div class="task-item">
                                <span class="material-symbols-outlined">radio_button_unchecked</span>
                                <div class="task-text">${this.text}</div>
                                <div>${this.dueDate}</div>
                                <span class="material-symbols-outlined" id=${this.priority}>priority_high</span>
                                <span class="material-symbols-outlined">edit</span>
                                <span class="material-symbols-outlined">delete</span>
                            </div>`
        tasks.appendChild(taskItem)

        const childToRemove = document.querySelector(".task-field")
        tasks.removeChild(childToRemove)

        const addTaskBtn = document.querySelector("#add-task")
        addTaskBtn.style.visibility = "visible"

        return tasks
    }

    removeTask () {

    }


}

function addTask (event) {
    event.preventDefault();
    const textForm = document.getElementById("text-field").value
    const priorityForm = document.querySelector("#priority").value
    const dateForm = document.querySelector("#date").value
    const task = new Task(textForm, priorityForm, dateForm)
    task.createUI()

}

function openTaskInput() {
    const tasks = document.querySelector("#tasks")
    const inputField = document.createElement("div")
    inputField.classList.add("task-field")
    inputField.innerHTML = `<form>
                                <input type="text" id="text-field" name="text-field" placeholder="What is your task?" required>
                                <select id="priority">
                                    <option value="low">Priority low</option>
                                    <option value="medium">Priority medium</option>
                                    <option value="high">Priority high</option>
                                </select>
                                <input type="date" id="date"></input>
                                <button type="submit" id="add-task-form">Add task</button>
                            </form>`
    tasks.appendChild(inputField)

    const addTaskBtn = document.querySelector("#add-task")
    addTaskBtn.style.visibility = "hidden"

    const addTaskFormBtn = document.querySelector("#add-task-form")
    addTaskFormBtn.addEventListener("click", (event) => addTask(event))
}

export { openTaskInput }
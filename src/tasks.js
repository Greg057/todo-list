

class Task {
    constructor(text, priority = "low", dueDate = null) {
        this.text = text
        this.priority = priority
        this.dueDate = dueDate
    }

    createUI () {
        console.log(this.text)
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
        return tasks
    }


}

function addTask (event, text, priority, date) {
    form.reset();
    event.preventDefault();
    console.log(text)
    const task = new Task(text, priority, date)
    task.createUI()

}

function openTaskInput() {
    const tasks = document.querySelector("#tasks")
    const inputField = document.createElement("div")
    inputField.innerHTML = `<div class="task-field">
                                    <form>
                                        <input type="text" id="text-field" name="text-field" placeholder="What is your task?" required>
                                        <select id="priority">
                                            <option value="low">Priority low</option>
                                            <option value="medium">Priority medium</option>
                                            <option value="high">Priority high</option>
                                        </select>
                                        <input type="date" id="date"></input>
                                        <button type="submit" id="add-task-form">Add task</button>
                                    </form>
                                </div>`
    tasks.appendChild(inputField)

    const addTaskBtn = document.querySelector("#add-task")
    addTaskBtn.style.visibility = "hidden"

    const textForm = document.getElementById("text-field")
    console.log(textForm.value)
    const priorityForm = document.querySelector("#priority").value
    const dateForm = document.querySelector("#date").value

    const addTaskFormBtn = document.querySelector("#add-task-form")
    addTaskFormBtn.addEventListener("click", (event) => addTask(event, textForm, priorityForm, dateForm))
}

export { openTaskInput }
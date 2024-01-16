
function openProjectInput () {
    const projects = document.querySelector("#projects")
    const inputField = document.createElement("div")
    inputField.classList.add("project-field")
    inputField.innerHTML = `<form>
                                <input type="text" id="text-field-project" placeholder="Project Name" required>
                                <button type="submit" class="clickable" id="add-project-form" disabled>Add</button>
                                <span class="material-symbols-outlined clickable" id="close-project">close</span>
                            </form>`
    projects.appendChild(inputField)

    const addProjectBtn = document.querySelector("#add-project")
    addProjectBtn.style.visibility = "hidden"

    const closeBtn = document.querySelector("#close-project")
    closeBtn.addEventListener("click", closeInput)

    const textInput = document.querySelector("#text-field-project")
    textInput.addEventListener("keyup", success)

    const addProjectFormBtn = document.querySelector("#add-project-form")
    addProjectFormBtn.addEventListener("click", (event) => addProject(event))
}

function addProject (event) {
    event.preventDefault();
    const textForm = document.getElementById("text-field-project").value
    const projects = document.querySelector("#projects")
    const projectItem = document.createElement("div")
    projectItem.classList.add("nav-item", "clickable", "project-item")
    projectItem.innerHTML =`<span class="material-symbols-outlined">list</span>
                            <div>${textForm}</div>
                            <span class="material-symbols-outlined clickable remove-button" id="remove-button-project">delete</span>`
    projects.appendChild(projectItem)

    const childToRemove = document.querySelector(".project-field")
    projects.removeChild(childToRemove)

    const addProjectBtn = document.querySelector("#add-project")
    addProjectBtn.style.visibility = "visible"

    const removeButtons = document.querySelectorAll("#remove-button-project")
    removeButtons.forEach((button) => button.addEventListener("click", removeTask))

}

function removeTask (event) {
    const projectItem = event.target.parentNode
    projectItem.parentNode.removeChild(projectItem)
}

function closeInput (event) {
    const inputField = event.target.parentNode.parentNode
    inputField.parentNode.removeChild(inputField)
    const addProjectBtn = document.querySelector("#add-project")
    addProjectBtn.style.visibility = "visible"
}

function success() {
    if(document.getElementById("text-field-project").value==="") { 
           document.getElementById('add-project-form').disabled = true; 
       } else { 
           document.getElementById('add-project-form').disabled = false;
       }
   }


function loadUIProject (name) {

}

export { openProjectInput }
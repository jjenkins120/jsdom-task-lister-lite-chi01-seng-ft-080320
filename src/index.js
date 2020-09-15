//constants
const toDoTaskList = document.querySelector('#tasks')
const form = document.querySelector('#create-task-form')

//functions

function createListItem(event){
  event.preventDefault()
  const submission = event.target['new-task-description'].value

  const liTag = document.createElement('li')
  liTag.innerText = submission
  toDoTaskList.append(liTag)

  const dBtn = document.createElement('button')
  dBtn.innerHTML = "Delete Task"
  toDoTaskList.append(dBtn)

  event.target.reset()
}

function deleteListItemHandler(event){
  if (event.target.tagName === "BUTTON"){
    deleteListItem(event)
  }
}

function deleteListItem(event){
  const li = event.target.previousElementSibling
  const btn = event.target
  
  li.remove()
  btn.remove()
}

// event listeners
form.addEventListener('submit', createListItem)
toDoTaskList.addEventListener('click', deleteListItemHandler)

// invoked functions






// Deliverables:
// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, the task string that I provided should appear on the DOM after the submit button has been activated. 

// Stretch Deliverables: 
// A delete function that will remove tasks from your list
// A priority value selected from a dropdown that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As a challenge, implement a sorting functionality that displays the tasks ascending or descending order based on priority
// An additional input field (e.g. user, duration, date due)
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM
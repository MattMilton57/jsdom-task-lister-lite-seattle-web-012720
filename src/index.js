document.addEventListener("DOMContentLoaded", () => {
  function addTask(task) {
    let newTask = document.createElement("li");
    newTask.textContent = task 
    document.getElementById('tasks').appendChild(newTask)
  }

function removeTask(task){
  const listItems = document.querySelectorAll("li")
  for (let i=0; i<listItems.length; i++){
    if (listItems[i].textContent == task){
      document.getElementById('tasks').removeChild(listItems[i])
    }
  }
}

  const form = document.querySelector("form")
  form.addEventListener("submit", function(event){
    event.preventDefault()
    const todo = event.target["new-task-description"].value
    if (todo != " ") {
    addTask(todo); 
    }
  })

  const deleteForm = document.getElementById("delete-task-form")
  deleteForm.addEventListener("submit", function(event){
    event.preventDefault()
    const done = event.target["delete-task-description"].value
    removeTask(done)
    })
  
  
});



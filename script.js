// Get input field and task list
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task function
const addTask = () => {
  // Get task input value
  const task = taskInput.value;

  // Check if task is not empty
  if (task) {
    // Create task list item
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = task;
    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";

    // Append task and remove button to list item
    li.appendChild(span);
    li.appendChild(removeButton);

    // Append list item to task list
    taskList.appendChild(li);

    // Clear task input field
    taskInput.value = "";

    // Remove task function
    removeButton.addEventListener("click", () => {
      taskList.removeChild(li);
    });
  }
};

// Add task on click or enter
document.getElementById("addTask").addEventListener("click", addTask);
taskInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    add
  }})

function addTodo() {
  var input = document.getElementById("todoInput");
  var inputValue = input.value.trim();
  if (inputValue === "") {
    alert("Please enter a task.");
    return;
  }
  var ul = document.getElementById("todoList");
  var li = document.createElement("li");
  li.textContent = inputValue;
  ul.appendChild(li);
  input.value = "";

  // Add delete button
  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.className = "delete";
  deleteButton.onclick = function() {
    ul.removeChild(li);
  };
  li.appendChild(deleteButton);
}
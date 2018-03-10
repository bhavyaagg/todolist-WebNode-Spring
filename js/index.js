/**
 * Created by bhavyaagg on 10/03/18.
 */

let todos = [];

$(document).ready(function () {
  let todoList = $('#todoList');
  let newTodoInput = $("#newTodo");
  let addTodoBtn = $("#addTodo");
  let clearTodosBtn = $("#clearTodos");
  
  let savedTodos = localStorage.getItem("todos");
  
  if (savedTodos) {
    let todos = JSON.parse(savedTodos)
    console.log(todos);
  }
  
  addTodoBtn.click(function () {
    let newTodoValue = newTodoInput.val();
    
    todos.push({
      task: newTodoValue,
      done: false
    });
    
    localStorage.setItem("todos", JSON.stringify(todos));
    
    let todoItem = $(`<li class="list-group-item"></li>`)
    
    let contentDiv = $(`<div class="row"></div>`)
    
    let checkBoxDiv = $(`<div class="col-2 text-center"></div>`)
    
    let check = $(`<input type="checkbox">`).click(function () {
      contentDiv.css("text-decoration", "line-through");
    })
    
    let task = $(`<div class="col">${newTodoValue}</div>`)
    
    contentDiv.append(checkBoxDiv.append(check)).append(task)
    
    todoItem.append(contentDiv)
    
    todoList.append(todoItem)
  });
  
});
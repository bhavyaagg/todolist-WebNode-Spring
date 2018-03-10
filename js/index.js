/**
 * Created by bhavyaagg on 10/03/18.
 */

$(document).ready(function () {
  let todoList = $('#todoList');
  let newTodo = $("#newTodo");
  let addTodo = $("#addTodo");
  let clearTodos = $("#clearTodos");
  
  
  addTodo.click(function () {
    let newTodoValue = newTodo.val();
    
    let todoItem = $(`<li class="list-group-item"></li>`)
    
    let contentDiv = $(`<div class="row"></div>`)
    
    let checkBoxDiv = $(`<div class="col-2 text-center"></div>`)
    
    let check = $(`<input type="checkbox">`).click(function () {
      contentDiv.css("text-decoration", "line-through");
    })
    
    let task = $(`<div class="col">${newTodoValue}</div>`)
    
    // checkBoxDiv.append(check);
    
    contentDiv.append(checkBoxDiv.append(check)).append(task)
    
    todoItem.append(contentDiv)
    
    todoList.append(todoItem)
  });
  
});
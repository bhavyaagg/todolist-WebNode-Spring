/**
 * Created by bhavyaagg on 10/03/18.
 */

let todos = [];

$(document).ready(function () {
  let todoList = $('#todoList');
  let newTodoInput = $("#newTodo");
  let addTodoBtn = $("#addTodo");
  let clearTodosBtn = $("#clearTodos");
  
  retrieveTodos();
  
  for (i in todos) {
    let todoItem = createTodoItem(+i);
    todoList.append(todoItem);
  }
  
  addTodoBtn.click(function () {
    addTodo(newTodoInput.val());
  })
  
  // addTodoBtn.click(function () {
  //   let newTodoValue = newTodoInput.val();
  //
  //   todos.push({
  //     task: newTodoValue,
  //     done: false
  //   });
  //
  //   localStorage.setItem("todos", JSON.stringify(todos));
  //
  //   let todoItem = $(`<li class="list-group-item"></li>`)
  //
  //   let contentDiv = $(`<div class="row"></div>`)
  //
  //   let checkBoxDiv = $(`<div class="col-2 text-center"></div>`)
  //
  //   let check = $(`<input type="checkbox">`).click(function () {
  //     contentDiv.css("text-decoration", "line-through");
  //   })
  //
  //   let task = $(`<div class="col">${newTodoValue}</div>`)
  //
  //   contentDiv.append(checkBoxDiv.append(check)).append(task)
  //
  //   todoItem.append(contentDiv)
  //
  //   todoList.append(todoItem)
  // });
  
});


function createTodoItem(i) {
  let todoItem = $(`<li class="list-group-item"></li>`)
  
  let contentDiv = $(`<div class="row"></div>`)
  
  let checkBoxDiv = $(`<div class="col-2 text-center"></div>`)
  
  let check = $(`<input type="checkbox" ${todos[i].done ? 'checked' : ''}>`).click(function () {
    contentDiv.css("text-decoration", "line-through");
  })
  
  if (todos[i].done) {
    check.prop("checked", "true");
  }
  
  let task = $(`<div class="col">${todos[i].task}</div>`)
  
  contentDiv.append(checkBoxDiv.append(check)).append(task)
  
  todoItem.append(contentDiv)
  
  return todoItem;
}

function retrieveTodos() {
  let savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    todos = JSON.parse(savedTodos);
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(task) {
  todos.push({
    task: task,
    done: false
  });
  saveTodos();
  refreshTodos();
}
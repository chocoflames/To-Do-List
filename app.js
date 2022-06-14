let todoInp = document.querySelector(".todo-inp")
let taskInp = document.querySelector(".taskinp")
let taskBtn = document.querySelector(".taskbtn")
let addBtn = document.querySelector(".addbtn")
let contList = document.querySelector(".contlist")
let todoList = document.createElement("ol")

function getTodoNumber(){
  let todoNumber = document.querySelectorAll(".list");
  console.log(todoNumber.length);
  let todoNum = document.querySelector(".todo-num");
  todoNum.textContent = todoNumber.length > 1 ? todoNumber.length + ""+ "todos": todoNumber.length + ""+ "todo";
}

addBtn.addEventListener("click", function(){
    todoInp.style.display = "block";
    addBtn.style.display = "none"
})

todoInp.addEventListener("click", function(){
    if (taskInp.value == "") {
      alert ("Task Is Null")  
    }else {
    let listItem = document.createElement("li");
    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fas", "fa-trash")
    listItem.classList.add("list")
    listItem.textContent = taskInp.value;
    listItem.appendChild(deleteBtn)

    todoList.appendChild(listItem)
    contList.appendChild(todoList)
    todoInp.style.display = "none";
    addBtn.style.display = "block"
    taskInp.value = "";

    deleteBtn.addEventListener("click", function(){
      listItem.remove()
      getTodoNumber()
    })
    }
    getTodoNumber();
})
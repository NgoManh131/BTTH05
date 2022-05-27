const deleteBtn = document.querySelector('.delete')
const comfirmBtn = document.querySelector('.comfirm')
const cancel = document.querySelector('.cancel')
const modal =document.querySelector('body')
let txtTodo = document.querySelector('.txtTodo')

const txtTodoList = ["Learn React"]


window.addEventListener("DOMContentLoaded",()=>{
    txtTodo.innerHTML = todoList[0];
})

deleteBtn.addEventListener('click',function(){
    modal.classList.add('show')
})

cancel.addEventListener('click',function(){
    modal.classList.remove('show')
})

comfirmBtn.addEventListener('click',function(){
    todoList.splice(0,1);
    if(todoList.length<1){
        txtTodo.innerHTML="";
    }
    else{
        txtTodo.innerHTML = todoList[0];
    }

    modal.classList.remove('show')
   
})
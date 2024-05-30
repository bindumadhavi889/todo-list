let todoList=JSON.parse(localStorage.getItem('todoList'))||[{
  name:'add todo',
  date:'2024-04-12'
}
];
let count=0;
function renderTodoList(){
  let todoListHTML='';
  if(count!==0){
    todoList.forEach((todoobject,index)=>{
      const {name,date}=todoobject;
      const html=`
      <div>${name}</div>
      <div>${date}</div>
      <button class="delete-button js-delete-button">Delete</button>
      `;
      todoListHTML+=html;
    });
  }
  document.querySelector('.js-todo-invisible').innerHTML=todoListHTML;
  document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
      todoList.splice(index,1);
      renderTodoList();
    })
  })
}
document.querySelector('.js-add-button').addEventListener('click',()=>{
  addTodo();
})
function addTodo(){
  const inputElement=document.querySelector('.js-input');
  const name = inputElement.value;
  const dateElement=document.querySelector('.js-date');
  const date = dateElement.value;
  todoList.push({
    name,
    date
  });
  localStorage.setItem('todoList',JSON.stringify(todoList));
  count++;
  inputElement.value='';
  dateElement.value='';
  renderTodoList();
}

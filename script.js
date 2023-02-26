var task_input = document.querySelector('#task-input');
var task_add = document.querySelector('#add-button');
var task_list = document.querySelector('.task-list');
var task_form = document.querySelector('#form');
var date_input = document.querySelector('#date-input');
task_add.addEventListener('click', addsupertask);
task_form.addEventListener('submit', handleForm);
function handleForm(event) { 
    event.preventDefault(); 
    addsupertask();
} 
var count=1;



function addsupertask(){
    var task_type_input = document.querySelector('input[name="type"]:checked').value;
    var numitems = task_list.children.length;
    var li = document.createElement('li');
    li.classList.add("list-group-item", "full-task","bg-transparent");
    if(task_type_input=="School"){
        li.classList.add('school-type');
    }
    else if(task_type_input=="Work"){
        li.classList.add("work-type");
    }
    else if(task_type_input=="Personal"){
        li.classList.add('personal-type');
    }
    var supertask = document.createElement('div');
    supertask.classList.add("super-task",'mb-3','d-flex','justify-content-between', 'align-items-end');
    var content = document.createElement('span');
    content.classList.add("form-check", "task-name");
    var label = document.createElement('label');
    label.classList.add('form-check-label');
    label.setAttribute('for', 'task'+(numitems+1+count));
    var task_content = document.createElement('h4');
    task_content.classList.add('nomen');
    var t = document.createTextNode(task_input.value);
    var checkbox = document.createElement('input');
    checkbox.addEventListener("change", handlecheck);
    checkbox.classList.add('form-check-input','complete-check');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value',"");
    checkbox.setAttribute('id','task'+(numitems+1+count));
    task_content.appendChild(t);
    label.appendChild(task_content);
    content.appendChild(label);
    content.appendChild(checkbox);
    supertask.appendChild(content);
    task_list.appendChild(li);


    var date_span = document.createElement('span');
    var due_date = document.createElement('h4');
    due_date.classList.add('due-date');
    var x = document.createTextNode(date_input.value);
    if(date_input.value!=''){
      var y= document.createTextNode('Due'+" ");
      due_date.appendChild(y);
    }
    due_date.appendChild(x);
    date_span.appendChild(due_date);
    supertask.appendChild(date_span);
    


    var task_type = document.createElement('span');
    task_type.classList.add('type');
    var task_type_content = document.createElement('h4');
    task_type_content.classList.add('d-flex', 'justify-content-center');
    var y = document.createTextNode(task_type_input);
    task_type_content.appendChild(y);
    var icon = document.createElement('div');
    icon.classList.add('icon','d-flex','justify-content-center');
    var task_type_input = document.querySelector('input[name="type"]:checked').value;

    
    if(task_type_input == "School"){
        icon.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
      </svg>`
    }
    else if(task_type_input == "Work"){
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-briefcase" viewBox="0 0 16 16">
        <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
      </svg>`
    }
    else if(task_type_input == "Personal"){
        icon.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-joystick" viewBox="0 0 16 16">
        <path d="M10 2a2 2 0 0 1-1.5 1.937v5.087c.863.083 1.5.377 1.5.726 0 .414-.895.75-2 .75s-2-.336-2-.75c0-.35.637-.643 1.5-.726V3.937A2 2 0 1 1 10 2z"/>
        <path d="M0 9.665v1.717a1 1 0 0 0 .553.894l6.553 3.277a2 2 0 0 0 1.788 0l6.553-3.277a1 1 0 0 0 .553-.894V9.665c0-.1-.06-.19-.152-.23L9.5 6.715v.993l5.227 2.178a.125.125 0 0 1 .001.23l-5.94 2.546a2 2 0 0 1-1.576 0l-5.94-2.546a.125.125 0 0 1 .001-.23L6.5 7.708l-.013-.988L.152 9.435a.25.25 0 0 0-.152.23z"/>
      </svg>`
    }

    var buttons = document.createElement('span');
    buttons.classList.add('action-buttons');
    var btn_div = document.createElement('div');
    btn_div.classList.add('btn-group');
    btn_div.setAttribute('role','group');


    var addsubtask = document.createElement('button');
    addsubtask.classList.add('btn', 'btn-success', 'btn-sm', 'action-btn','addsubtask-btn');
    addsubtask.setAttribute('type','button');
    addsubtask.setAttribute('title','Add subtask');
    addsubtask.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
  </svg>`;

  var deletebtn = document.createElement('button');
  deletebtn.classList.add('btn', 'btn-danger', 'btn-sm', 'action-btn','delete-btn');
  deletebtn.setAttribute('type','button');
  deletebtn.setAttribute('title', 'Delete Task')
  deletebtn.setAttribute('id','delete-button');
  deletebtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2h4a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
  </svg>`;
    
    btn_div.appendChild(addsubtask);
    btn_div.appendChild(deletebtn);
    buttons.appendChild(btn_div);

    task_type.appendChild(task_type_content);
    task_type.appendChild(icon);
    supertask.appendChild(task_type);
    supertask.appendChild(buttons);
    li.appendChild(supertask);
    li.setAttribute('id', 'item'+(numitems+1+count));
    var sublist = document.createElement('ul');
    sublist.classList.add('bg-transparent','subtasks');
    li.appendChild(sublist);
    task_list.appendChild(li);
    count++;
    task_form.reset();

  }


    
  var checkboxes = document.getElementsByClassName("complete-check"), i;
    const handlecheck = (e) => {
    
    var wholeitem = e.target.parentElement.parentElement.parentElement;
    var taskname = e.target.previousElementSibling;
    var subtasks = wholeitem.getElementsByClassName('subtask');

    if(e.target.checked){ 
      if(wholeitem.classList.contains("full-task")){
        var task_due_date = wholeitem.children[0].children[1].children[0];
        var task_category = wholeitem.children[0].children[2].children[0];
        var task_icon = wholeitem.children[0].children[2].children[1];
        wholeitem.classList.add('checked');
        taskname.children[0].classList.add('checked');
        task_due_date.classList.add('checked');
        task_category.classList.add('checked');
        task_icon.classList.add('checked');
        
        for(var j=0;j<subtasks.length;j++){
          subtasks[j].getElementsByClassName('nomen')[0].classList.add("checked");
          subtasks[j].getElementsByClassName('form-check-input')[0].checked=true;
          subtasks[j].getElementsByClassName('form-check-input')[0].setAttribute("disabled","");
        }
      }
      else{
        wholeitem.classList.add('checked');
        taskname.children[0].classList.add('checked');
      }  
    }
    else{
      if(wholeitem.classList.contains("subtask")){
        wholeitem.classList.remove('checked');
        taskname.children[0].classList.remove('checked');
      }
      else{
        var task_due_date = wholeitem.children[0].children[1].children[0];
        var task_category = wholeitem.children[0].children[2].children[0];
        var task_icon = wholeitem.children[0].children[2].children[1];
        wholeitem.classList.remove('checked');
        taskname.children[0].classList.remove('checked');
        task_due_date.classList.remove('checked');
        task_category.classList.remove('checked');
        task_icon.classList.remove('checked');
        for(var k=0;k<subtasks.length;k++){
          subtasks[k].getElementsByClassName('form-check-input')[0].removeAttribute("disabled");
          subtasks[k].getElementsByClassName('form-check-input')[0].checked=false;
          subtasks[k].getElementsByClassName('nomen')[0].classList.remove('checked');
        }

      }
    }
  }

  for(i=0;i<checkboxes.length;i++){
    checkboxes[i].addEventListener('change',handlecheck);
  }

  var list_container = document.querySelector('.list-container');
  
  list_container.addEventListener('click', (e) => {
    if(e.target.classList.contains('delete-btn')){
        if(confirm("Are you sure you want to delete?") == true){
        e.target.closest("li").remove();
        }
    }
    if(e.target.classList.contains('edit-btn')){
      var new_task= window.prompt("Enter task");
      var new_date=window.prompt("Enter the due date as YYYY-MM-DD");
      var new_type=window.prompt("Enter task type: School, Work, or Personal");
    }
    if(e.target.classList.contains('addsubtask-btn')){
      var new_sub_input=window.prompt("Enter new subtask");
      if(new_sub_input){
        
        console.log(new_sub_input.valueOf());
        console.log(new_sub_input);
        var sublist_items = e.target.closest('li').getElementsByClassName('subtask');
        var nomen = document.createElement('h4');
        nomen.classList.add('nomen');

        var label = document.createElement('label');
        label.classList.add('form-check-label')
        label.setAttribute('for','sub'+(sublist_items.length+count));
        label.appendChild(nomen);
        var x = document.createTextNode(new_sub_input.valueOf());
        nomen.appendChild(x);

        var check = document.createElement('input');
        check.addEventListener("change", handlecheck);
        check.classList.add('form-check-input', 'complete-check');
        check.setAttribute('type','checkbox');
        check.setAttribute('value','');
        check.setAttribute('id','sub'+(sublist_items.length+count));

        var sub_name_span = document.createElement('span');
        sub_name_span.classList.add('form-check', 'task-name');
        sub_name_span.appendChild(label);
        sub_name_span.appendChild(check);

        var buttons = document.createElement('span');
        buttons.classList.add('action-buttons');
        var btn_div = document.createElement('div');
        btn_div.classList.add('btn-group');
        btn_div.setAttribute('role','group');


        var deletebtn = document.createElement('button');
        deletebtn.classList.add('btn', 'btn-danger', 'btn-sm', 'action-btn','delete-btn');
        deletebtn.setAttribute('type','button');
        deletebtn.setAttribute('title', 'Delete Task')
        deletebtn.setAttribute('id','delete-button');
        deletebtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2h4a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>`;

        
        btn_div.appendChild(deletebtn);
        buttons.appendChild(btn_div);

        var subtask_contents = document.createElement('div');
        subtask_contents.classList.add('subtask-contents', 'd-flex', 'justify-content-between','align-items-center');
        subtask_contents.appendChild(sub_name_span);
        subtask_contents.appendChild(buttons);

        var subtask = document.createElement('li');
        subtask.classList.add('bg-transparent', 'subtask');
        subtask.appendChild(subtask_contents);

        var list = e.target.closest('li').querySelector('ul');

        list.append(subtask);
        count++;  
      }
    }
})
  
  

  







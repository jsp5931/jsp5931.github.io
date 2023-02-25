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
    label.setAttribute('for', 'task'+(numitems+1));
    var task_content = document.createElement('h4');
    task_content.classList.add('nomen');
    var t = document.createTextNode(task_input.value);
    var checkbox = document.createElement('input');
    checkbox.addEventListener("change", handlecheck);
    checkbox.classList.add('form-check-input','complete-check');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('value',"");
    checkbox.setAttribute('id','task'+(numitems+1));
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
    //https://stackoverflow.com/questions/9618504/how-to-get-the-selected-radio-button-s-value
    var task_type_input = document.querySelector('input[name="type"]:checked').value;
    console.log(task_type_input)
    
    if(task_type_input == "School"){
        icon.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16">
        <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
      </svg>`
    }
    else if(task_type_input == "Work"){
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard2-fill" viewBox="0 0 16 16">
        <path d="M9.5 0a.5.5 0 0 1 .5.5.5.5 0 0 0 .5.5.5.5 0 0 1 .5.5V2a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 2v-.5a.5.5 0 0 1 .5-.5.5.5 0 0 0 .5-.5.5.5 0 0 1 .5-.5h3Z"/>
        <path d="M3.5 1h.585A1.498 1.498 0 0 0 4 1.5V2a1.5 1.5 0 0 0 1.5 1.5h5A1.5 1.5 0 0 0 12 2v-.5c0-.175-.03-.344-.085-.5h.585A1.5 1.5 0 0 1 14 2.5v12a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-12A1.5 1.5 0 0 1 3.5 1Z"/>
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
    buttons.innerHTML = `<div class="btn-group" role="group">
    <button type="button" class="btn btn-secondary btn-sm action-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book" viewBox="0 0 16 16"><path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/></svg>
    </button>
    <button type="button" class="btn btn-primary btn-sm action-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16"><path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/></svg>
  </button>
    <button type="button" class="btn btn-danger btn-sm action-btn"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2h4a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/></svg>
  </button>
  </div>`;


    task_type.appendChild(task_type_content);
    task_type.appendChild(icon);
    supertask.appendChild(task_type);
    supertask.appendChild(buttons);
    li.appendChild(supertask);
    task_list.appendChild(li);
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


  

  







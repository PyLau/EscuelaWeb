// todo.js
var taskDone = 0;
var taskCreated = 0;
$(document).ready(function(){
  
  $('#task-new').focus(); 
  
  function refreshCounters(){
    $('#task-count-new').text(taskCreated);
    $('#task-count-done').text(taskDone);
  }
  
  $('#task-form').submit(function(evt){
    evt.preventDefault();
    var taskText = $('#task-new').val();
    if(taskText === '')
      return;
    $('#task-new').val('');
    $('#task-text').text(taskText);
    var taskElement = $('#hidden-item').children();
    $('#task-list').append(taskElement.clone());
    $('#task-list #task-text').prop('id','');
    taskCreated++;
    refreshCounters();
  });
  
  $('#task-list').on('change','.task-check', function (evt){
    $(this).parent().toggleClass('task-done');
    if($(this).parent().toggleClass('task-done')){
      taskDone++;
    }else{
      taskDone--;
    }
    refreshCounters();
  });
    
  $('#task-list').on('click','.task-btn', function (evt){
    $(this).parent().remove();
    taskCreated--;
    refreshCounters();
  });  
});
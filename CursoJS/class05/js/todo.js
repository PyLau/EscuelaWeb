//  todo.js

// $ -> jQuery.ready

// 
//function init() {
//  console.log('hola, document ready');
//}

//$(document).ready(init);

var taskCreated = 0;
var taskDone = 0;

$(document).ready( function () {
  
  function refreshCounters () {
    $('#task-count-new').text(taskCreated);
    $('#task-count-done').text(taskDone);
  }
  
  $('#task-new').focus();
  
  $('#task-form').submit( function (evt) {
    evt.preventDefault();
    var taskText = $('#task-new').val();
    if (taskText === '')
      return;
    $('#task-new').val('');
    $('#task-text').text(taskText);
    var taskElement = $('#hidden-item').children();
    $('#task-list').append(taskElement.clone());
    $('#task-list #task-text').prop('id', '');
    taskCreated++;
    refreshCounters();
  });
  
  $('#task-list').on('change', '.task-check', function (evt) {
    $(this).parent().toggleClass('task-done');
    if ($(this).parent().hasClass('task-done')) {
      taskDone++;
    } else {
      taskDone--;
    }
    refreshCounters();
  });
      

      
  $('#task-list').on('click', '.task-btn', function (evt) {
    $(this).parent().remove();
    taskCreated--;
    refreshCounters();
  });
  
  
  
  
});

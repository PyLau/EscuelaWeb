var boardCreated = 0;
var taskCreated = 0;

function addTask(){
    var taskElement = $('#hidden-item').children();
    tasknumber = taskCreated;
    taskElement.prop('id', 'taskID_' + taskCreated++);
    //Añado la tarea
    $(this).parent().parent().find('#task-list').append(taskElement.clone());
    //Asocio el evento click al boton
    tarea = $('#taskID_'+tasknumber);
    $('#taskID_'+tasknumber+' .actions #export-option').click(function() {
      $(this).parent().parent().find('.dropdown').toggleClass('hidden');
    });
    console.log(tarea.parent().parent());
    //Lleno el dropdown
    $('#board-list .main-board').each(function(){
      if (tarea.parent().parent().find('header a').text() != $(this).find('header a').text()){
        tarea.find('.dropdown-menu').append('<li><a href="#" onclick="moveTask('+$(this).attr('id')+')">'+$(this).find('header a').text()+'</a></li>');
      }
    });

    // tarea.find('.dropdown-menu li').each(function(){
    //   $(this).click(function() {
    //     id = $(this).text();
    //     console.log($('board-list header a #'+id));
    //     console.log($(this).parent().parent().parent().parent().parent().parent());
    //   });
    // });
}

function moveTask(){
  console.log($(this));
}

$(document).ready(function(){
  $('#board-new').focus();
  //Create board
  $('#board-form').submit(function(evt){
    evt.preventDefault();
    //Creacion de tablero y su titulo
    var boardText = $('#board-new').val();
    if(boardText === '')
      return;
    $('#board-new').val('');
    $('#hidden-board .board-text').text(boardText);
    var boardElement = $('#hidden-board').children();
    boardElement.prop('id', 'boardID_' + boardCreated++);
    $('#board-list').append(boardElement.clone());
    $('.board-text').editable({type: 'text', title: 'Enter title'});
  });

  //Create task inside board
  $('#board-list').on('click','.board-plus-btn', addTask); 
});


$(document).ready(function(){

  $('#board-new').focus();
  
  $('#board-form').submit(function(evt){
    evt.preventDefault();
    //Creacion de tablero y su titulo
    var boardText = $('#board-new').val();
    if(boardText === '')
      return;
    $('#board-new').val('');
    $('#hidden-board .board-text').text(boardText);
    var boardElement = $('#hidden-board').children();
    $('#board-list').append(boardElement.clone());
    $('.board-text').editable({type: 'text', title: 'Enter title'});
  });

  //Creacion del task todo dentro del tablero    
  $('#board-list').on('click','.board-plus-btn', function (evt){
    var taskElement = $('#hidden-item').children();
    $(this).parent().parent().find('#task-list').append(taskElement.clone());
    $('#task-list #task-text').prop('id','');
    $.fn.editable.defaults.mode = 'inline';
    $('.todo-text').editable();
  }); 

  $('#task-list').on('click','.task-btn', function (evt){
    $(this).parent().remove();
  });

});
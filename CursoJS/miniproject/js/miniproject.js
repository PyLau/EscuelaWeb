var boardCreated = 0;
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
    $('#board-list').append(boardElement.clone());
    $('.board-text').editable({type: 'text', title: 'Enter title'});
    boardCreated++;
  });

  //Create task inside board
  $('#board-list').on('click','.board-plus-btn', function (evt){
    var taskElement = $('#hidden-item').children();
    $(this).parent().parent().find('#task-list').append(taskElement.clone());
    $('#task-list #task-text').prop('id','');
    $.fn.editable.defaults.mode = 'inline';
    $('.todo-text').editable({value: ""});
    $('#task-list').on('click','.glyphicon-trash', function (evt){
      $(this).parent().parent().remove();
    });
      //Dropdown option inside task
    $('#task-list').on('click','.glyphicon-export', function (evt){
      var optionElement = $('#hidden-select').children();
      $(this).parent().parent().parent().find('#options').append(optionElement.clone());
    });


  }); 

  $('.dropdown-toggle').dropdown()



});


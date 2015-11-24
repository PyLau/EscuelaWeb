$(document).ready(function(){
  $('#board-text').editable();
  $('#board-new').focus();
  
  $('#board-form').submit(function(evt){
    evt.preventDefault();
    var boardText = $('#board-new').val();
    if(boardText === '')
      return;
    $('#board-new').val('');
    $('#hidden-board .board-text').text(boardText);
    var boardElement = $('#hidden-board').children();
    $('#board-list').append(boardElement.clone());
    $('.board-text').editable({type: 'text', title: 'Enter title'});
    // $('#board-list #board-text').prop('id','');
  });

  // $(this).parent().remove(); this is for delete
    
  $('#board-list').on('click','.board-plus-btn', function (evt){
    var taskElement = $('#hidden-item').children();
    // $('#task-list').append(taskElement.clone());
    $(this).parent().parent().find('#task-list').append(taskElement.clone());
    $('#task-list #task-text').prop('id','');
  }); 

  $('#task-list').on('click','.task-btn', function (evt){
    $(this).parent().remove();
  });

});
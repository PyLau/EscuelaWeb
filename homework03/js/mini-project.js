$(document).ready(function(){
	$('#board-new').focus(); 
	$('#board-form').submit(function(evt){
		evt.preventDefault();
    	var boardText = $('#board-new').val();
    	if(boardText === '')
     		return;
     	$('#board-new').val('');
     	$('#board-text').text(boardText);
    	var boardElement = $('#hidden-item').children();
    	$('#board-list').append(boardElement.clone());
   		$('#board-list #board-text').prop('id','');
  });
	$('#board-list').on('click','.board-btn', function (evt){
		$(this).parent().remove();
	});	 	
});
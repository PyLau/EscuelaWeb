// class06.js

$(document).ready(function(){
  $('.spiffy').hide();
  $('#form-ign-count').focus();
  $('#form-ign').submit(function(evt){
    evt.preventDefault();
    var count = $('#form-ign-count').val();
    count = parseInt(count);
    var gameStr = $('#form-ign-game').val();
    if(gameStr === '')
      return;
    if(count <= 0)
      count = 1;
    var key = 'nY7NSl3KMvmshvB3cyy1iCao0ftgp1tbCpajsnkIFTIFyna1Cs';
    
    var ignJson = {
      count: count,
      game: gameStr
    };
      $('.spiffy').show();
    $.ajax({
      url: 'https://videogamesrating.p.mashape.com/get.php',
      method: 'GET',
      dataType: 'json',
      data: ignJson,
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Mashape-Key', key);  
      }
    })
    .done(function(response){
      console.log('AJAX success');
      console.log(JSON.stringify(response));
    })
    .fail(function(error){
      console.error('AJAX failed');
    })
    .complete(function(data){
      console.log('AJAX complete');
      $('.spiffy').hide();
    })
  });
});
//class06.js

var gameList = [];
function showGames(gameList) {
  $('#form-result').empty();
  var i;
  for (i = 0; i < gameList.length; i++) {
    var game = gameList[i];
    $('#game-title').text(game.title);
    $('#game-description').text(game.short_description);
    if (game.score != undefined) {
      $('#game-score').text(game.score);
    }
    $('#game-img').attr('src', game.thumb);
    var gameElement = $('#hidden-item').children();
    var clone = gameElement.clone();
    $('#form-result').append(clone);
    $('#form-result #game-title').prop('id', '');
    $('#form-result #game-description').prop('id', '');
    $('#form-result #game-img').prop('id', '');
    $('#form-result #game-score').prop('id', '');
    clone.hide();
    clone.delay(900 * i).fadeIn();
  }// end for
//  $('#form-result .panel').hide();
//  var panels = $('#form-result .panel');
//  for (i = 0; i < panels.length; i++) {
//    var delay = 900;
//    $(panels[i]).delay(delay * i).fadeIn();
//  }
}

function filterGames(gameList, minScore) {
  var newList = [];
  var i;
  for (i = 0; i < gameList.length; i++) {
    var game = gameList[i];
    if (game.score === undefined || game.score < minScore)
      continue;
    newList.push(game);
  }
  return newList;
}

$(document).ready( function () {
  $('.spiffy').hide();
  $('#form-ign-count').focus();
  
  $('#form-ign-filter').click(function(evt){
    var score = $('#form-ign-score').val();
    var minScore = parseInt(score);
    var list = filterGames(gameList, minScore);
    showGames(list);
  });
  
  $('#form-ign').submit( function(evt) {
    evt.preventDefault();
    var count = $('#form-ign-count').val();
    count = parseInt(count);
    console.log(count);
    var gameStr = $('#form-ign-game').val();
    if (gameStr === '')
      return;
    if (count <= 0)
      count = 1;
    var key = 'h6zhvv3FNLmsh9LwUQDBFfd5RQx0p1sJNNjjsn9lm07QNdykrQ';
    
    var ignJson = {
      count: count,
      game: gameStr
    };
    $('.spiffy').show();
    $.ajax({
      url: 'GEThttps://zazkov-youtube-grabber-v1.p.mashape.com/search.video.php
',
      method: 'GET',
      dataType: 'json',
      data: ignJson,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-Mashape-Key', key);
      }
    })
    .done(function (response) {
      gameList = response;
      showGames(gameList);
    })
    .fail(function (error) {
      console.error('AJAX failed');
    })
    .complete(function (data) {
      console.log('AJAX complete');
      $('.spiffy').hide();
    });
    
  });
  
});








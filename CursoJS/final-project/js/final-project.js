var videoList = [];
function showVideos(videoList) {
  $('#form-result').empty();
  var i;
  for (i = 0; i < videoList.length; i++) {
    var video = videoList[i];
    $('#video-title').text(video.title);
    $('#video-description').text(video.description);
    $('#video-img').attr('src', video.img.default);
    var videoElement = $('#hidden-item').children();
    var clone = videoElement.clone();
    $('#form-result').append(clone);
    $('#form-result #video-title').prop('id', '');
    $('#form-result #video-description').prop('id', '');
    $('#form-result #video-img').prop('id', '');
    clone.hide();
    clone.delay(900 * i).fadeIn();
  }// end for
}

$(document).ready(function() {
  $('.spiffy').hide();
  
  $('#form-ign').submit( function(evt) {
    evt.preventDefault();
    var videoStr = $('#form-ign-video').val();
    if (videoStr === '')
      return;
    var key = 'h6zhvv3FNLmsh9LwUQDBFfd5RQx0p1sJNNjjsn9lm07QNdykrQ';
    
    var ignJson = {
      maxResults: 15,
      query: videoStr
    };
    $('.spiffy').show();
    $.ajax({
      url: 'https://zazkov-youtube-grabber-v1.p.mashape.com/search.video.php',
      method: 'GET',
      dataType: 'json',
      data: ignJson,
      beforeSend: function (xhr) {
        xhr.setRequestHeader('X-Mashape-Key', key);
      }
    })
    .done(function (response) {
      videoList = response;
      showVideos(videoList);
    })
    .fail(function (error) {
      console.error('AJAX failed');
    })
    .complete(function (data) {
      console.log('AJAX complete',data);
      var response =  JSON.parse(data.responseText);
      console.log('aquita el next', response.control.nextPageToken);
      $('.spiffy').hide();
    });
    
  });
  
});
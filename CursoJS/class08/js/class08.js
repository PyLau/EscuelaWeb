//class08.js

function isValidEmail(text) {
   // expresion regular sencilla
  var emailRe = /[a-z][\w]*@[a-z][\w]*[.][a-z]{2,}/;
  return emailRe.test(text);
}

function isValidKey(keyCode) {
  var validChars = 'ABCOabco@.';
  var i;
  for (i = 0; i < validChars.length; i++){
    var code = validChars.charCodeAt(i);
    if (keyCode === code)
      return true;
  }
  return false;
}

$(document).ready(function(){
  
  function checkEmail(){
    var email = $('#form-email').val();
    var isValid = isValidEmail(email);
    $('#form-submit').prop('disabled', !isValid);
  }
  
  $('#form-email').keydown(function(evt){
    console.log(evt.keyCode);
    if (evt.keyCode === 16 || evt.keyCode === 50 || evt.keyCode === 190)
        return true;
    if (!isValidKey(evt.keyCode)){
      evt.preventDefault();
    }
  });
  
  $('#form-email').keyup(function(evt){
    checkEmail();
  });
  $('#form-email').on('input', function(evt){
    checkEmail();
  });
});





$(document).ready(function(){
  $('#user_check').hide();
  $('#pass_check').hide();
  $('#con_check').hide();

 
  var user_err = true;
  var pass_err = true;
  var con_err = true;

  $('#userN').keyup(function(){
    userName_check();
  })

  function userName_check(){

    var user_val = $('#userN').val();
    if(user_val.length =='' ){
      $('#user_check').show();
      $('#user_check').html('**Please enter user name');
      $('#user_check').focus();
      $('#user_check').css("color","red");

      user_err = false;
      return false;
    }
    else{
      $('#user_check').hide();
    }
  }

})
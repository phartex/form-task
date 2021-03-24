$(document).ready(function () {
  //PASSWORD MATCHING
  $('#password, #confirm_password').on('keyup', function () {
    if ($('#password').val() == $('#confirm_password').val()) {
      $('#confirmverify').html('Matching').css('color', 'green');
    } else $('#confirmverify').html('Not Matching').css('color', 'red');
  });

  //PASSWORD SHOW/HIDE TOGGLE
  const changeEye = () => {
    const pass = document.getElementById('password');
    const hide1 = document.getElementById('hide1');
    const hide2 = document.getElementById('hide2');
    if (pass.type === 'password') {
      pass.type = 'text';
      hide2.style.display = 'inline-block';
      hide1.style.display = 'none';
    } else {
      pass.type = 'password';
      hide2.style.display = 'none';
      hide1.style.display = 'inline-block';
    }
  };
  $('.password_eye').on('click', changeEye);

  ///FIELDS VERIFY
  $('#name').on('focus', () => {
    $('#nameverify').html('minimum 7 characters').css('color', 'green');
  });
  $('#name').on('blur', () => {
    $('#nameverify').html('');
  });

  $('#email').on('focus', () => {
    $('#emailverify').html('must follow standard mail format e.g example@mail.com').css('color', 'green');
  });
  $('#email').on('blur', () => {
    $('#emailverify').html('');
  });

  $('#password').on('focus', () => {
    $('#passverify').html('aleast a letter, number, uppercase and minimum 8 characters').css('color', 'green');
  });
  $('#password').on('blur', () => {
    $('#passverify').html('');
  });
  // const myInput = document.getElementById('password');
  // myInput.onfocus = function () {
  //   document.getElementById('message').style.display = 'inline-block';
  // };
  // myInput.onblur = function () {
  //   document.getElementById('message').style.display = 'none';
  // };
});

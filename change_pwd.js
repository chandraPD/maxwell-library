  function submitChangePassword() {
  // const saveChangePwd = document.querySelector('input#save-change');
  var email = document.getElementById('inputEmail').value;
  var oldPassword = document.getElementById('inputOldPassword').value;
  var newPassword = document.getElementById('inputNewPassword').value;
  var verifyPassword = document.getElementById('inpurVerifyPassword').value;

  if (email == '' || oldPassword == '' || newPassword == '' || verifyPassword == ''){
      Swal.fire(
          'Submit Failed !',
          'You should fill in the blank',
          'error'
        );
  }else{
      Swal.fire(
          'Submitted !',
          'You clicked the button!',
          'success'
        );
  }

}

// Password Validation Change Password//
$(document).ready(function () {
    $.validator.setDefaults({
      submitHandler: function () {
        window.location.href = "../Profile.html";
      }
    });
    $('#changePwdForm').validate({
      rules: {
        email: {
          required: true,
          email: true,
        },
        oldPassword: {
          required: true,
          minlength: 8,
          maxlength: 20
        },
        newPassword: {
          required: true,
          minlength: 8,
          maxlength: 20
        },
        verifyPassword: {
          required: true,
          minlength: 8,
          maxlength: 20
        },
      },
      messages: {
        email: {
          required: "Please enter a email address",
          email: "Please enter a vaild email address"
        },
        oldPassword: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long",
          maxlength: "Your password more than 20 characters long"
        },
        newPassword: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long",
          maxlength: "Your password more than 20 characters long"
        },
        verifyPassword: {
          required: "Please provide a password",
          minlength: "Your password must be at least 8 characters long",
          maxlength: "Your password more than 20 characters long"
        },
      },
      errorElement: 'span',
      errorPlacement: function (error, element) {
        error.addClass('invalid-feedback');
        element.closest('.form-group').append(error);
      },
      highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
      },
      unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
      }
    });
  });

  // function submitChangePassword() {
  //   const saveChangePwd = document.querySelector('input#save-change');
  //   var email = document.getElementById('inputEmail').value;
  //   var oldPassword = document.getElementById('inputOldPassword').value;
  //   var newPassword = document.getElementById('inputNewPassword').value;
  //   var verifyPassword = document.getElementById('inpurVerifyPassword').value;

  //   if (email == '' || oldPassword == '' || newPassword == '' || verifyPassword == ''){
  //       Swal.fire(
  //           'Submit Failed !',
  //           'You should fill in the blank',
  //           'error'
  //         );
  //   }else{
  //       Swal.fire(
  //           'Submitted !',
  //           'You clicked the button!',
  //           'success'
  //         );
  //   }

  // }
 
  
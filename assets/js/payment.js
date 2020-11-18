$('#selector').on('change',function()
{
   var divClass = $(this).val();
   $(".detail").hide();
   $("."+divClass).slideDown('medium');
});

var buttons = document.querySelectorAll('#btn-pay')
    var buttonsDeclined = document.querySelectorAll('#btn-declined')

    for(var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function() {
        swal("Success", "Your Payment has been Accepted", "success")
      }
    }

    for(var i = 0; i < buttonsDeclined.length; i++) {
      buttonsDeclined[i].onclick = function() {
        swal("Declined", "Sorry, Your Current Balance is Insufficient", "error")
      }
    }
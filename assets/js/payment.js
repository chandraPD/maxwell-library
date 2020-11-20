$('#selector').on('change',function()
{
   var divClass = $(this).val();
   $(".detail").hide();
  console.log(divClass)
   $("."+divClass).slideDown('medium');
});

var buttons = document.querySelectorAll('#btn-pay')
    var buttonsDeclined = document.querySelectorAll('#btn-declined')

    for(var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = function() {
        Swal.fire("Success", "Your Payment has been Accepted", "success")
      }
    }

    for(var i = 0; i < buttonsDeclined.length; i++) {
      buttonsDeclined[i].onclick = function() {
        Swal.fire({
          icon: 'error',
          title: 'Declined',
          text: 'Sorry, Your Current Balance is Insufficient.',
          footer: '<a href="top_up.html">Top Up Balance</a>'
        })
      }
    }
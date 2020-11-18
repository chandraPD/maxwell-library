$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity,totalnominal,anynominal;
    var current = 1;
    var steps = $("fieldset").length;    
    
    setProgressBar(current);    

    $('.radio-group2 .radio1').click(function(){
        document.getElementById("paymentmethod").value = $(this).data("id");
    }); 

    $(".any").keyup(function(){
        anynominal = document.getElementById("any").value;  
        document.getElementById("option7").value=anynominal;     
      });     
  
    $(".next").click(function(){                
    if ($('input[name=option]:checked').val() !== "") {
        if ($('input[name=option]:checked').val() >= 10000){
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        
        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
        step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        next_fs.css({'opacity': opacity});
        },
        duration: 500
        });
        setProgressBar(++current);
        } else{
            Swal.fire(
                'Error!',
                'Must Above RP 10.0000!',
                'error'
              )  
        }
        
    } else{
        Swal.fire(
            'Error!',
            'There is Blank Space!',
            'error'
          )  
    }


    });

    $(".next1").click(function(){                
        if (document.getElementById("paymentmethod").value !== "")        {        
            current_fs = $(this).parent();
            next_fs = $(this).parent().next();
            document.getElementById("totalnominal").value = $('input[name=option]:checked').val();        
            //Add Class Active
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            
            //show the next fieldset
            next_fs.show();
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
            step: function(now) {
            // for making fielset appear animation
            opacity = 1 - now;
            
            current_fs.css({
            'display': 'none',
            'position': 'relative'
            });
            next_fs.css({'opacity': opacity});
            },
            duration: 500
            });
            setProgressBar(++current);
        } else{
            Swal.fire(
                'Error!',
                'Select Payment Method!',
                'error'
              )
        }
    
    
        });

    
    $(".previous").click(function(){
        
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
    
    });

    $('.radio-group2 .radio1').click(function(){
        $(this).parent().find('.radio1').removeClass('selected');
        $(this).addClass('selected');
        });

    function checkpassword(){
        var password1=document.getElementById("passwordconfirm").value;
        var password2=document.getElementById("passwordconfirm2").value;
        if (password1 !=="" && password2 !==""){                         
            if(password1==password2){
                Swal.fire({
                    
                    icon: 'success',
                    title: 'Success!',
                    text: 'Top Up Succes Wait for Confirmation Admin!',                    
                  }).then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        window.location.href = "../index.html";
                    } 
                  })                                               
            } else{
                Swal.fire(
                    'Error!',
                    'Password Not Match!',
                    'error'
                  )
            }
        } else{
            Swal.fire(
                'Error!',
                'There is Blank Space!',
                'error'
              )
        }    
    }

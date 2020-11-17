$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity,totalnominal,x;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    $('input[name=option]').click(function() {
        document.getElementById("totalnominal").value = $('input[name=option]:checked').val();        
        totalnominal=document.getElementById("totalnominal").value;
    });

    $('.radio-group2 .radio1').click(function(){
        document.getElementById("paymentmethod").value = $(this).data("id");
    }); 

    $(".any").keyup(function(){
        x = document.getElementById("any").value;  
        document.getElementById("option6").value = x;     
      });

  
    $(".next").click(function(){                
    if (document.getElementById("totalnominal").value !== "")        {        
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
        alert("Please Insert Your Nominal First!")
    }


    });

    $(".next1").click(function(){                
        if (document.getElementById("paymentmethod").value !== "")        {        
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
            alert("Please Select Your Payment Method!")
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

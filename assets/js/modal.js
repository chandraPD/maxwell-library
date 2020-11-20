function showModal(arg) {
    resetModal();
    if (arg == 'add') {
        document.querySelector('#modal-title').textContent = 'Add Data';
        CKEDITOR.instances["description"].setData("");
    } else if (arg == 'edit') {
        document.querySelector('#modal-title').textContent = 'Edit Data';
        // get data book
        $('[name="url"]').val('./assets/novel-dilan.jpg');
        $('[name="title"]').val('Dilan 1991');
        $('[name="date"]').val('11/08/2020');
        $('[name="category"] option[value="Novel"]').attr('selected', 'selected');
        CKEDITOR.instances["description"].setData("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar. Proin sit amet accumsan lectus. Nullam auctor auctor consequat. Donec semper magna erat, sed fringilla lacus pretium eget. Cras porttitor, nibh sit amet interdum bibendum, nibh velit accumsan tellus, vel vehicula tellus leo vitae ipsum. Praesent sit amet libero sed orci ullamcorper efficitur. Pellentesque in euismod purus, sit amet ultrices tortor. Vestibulum ante dui, tempor at dui id, tincidunt euismod diam. Integer pellentesque massa nibh, aceleifend odio malesuada sed. Phasellus orci sem, cursus nec orci ut, accumsan facilisis lacus. Nullam atelementum nibh, ac gravida felis. In sagittis rhoncus nisi tempus dignissim. Sed fringilla consequat ante vitae lobortis. Cras posuere ligula vel enim suscipit malesuada. Vivamus non nulla ut ante imperdiet euismod quis nec massa.</p>")
    }
    $('#ModalBook').modal('show');
}

function showModal1(arg) {
    if (arg == 'borrow') {
        today = new Date();
        document.getElementsByName('borrowdate')[0].value = today.toLocaleDateString();
        document.getElementsByName('returndate')[0].value = '';
        $('#BorrowModal').modal('show');
    } else if (arg == 'borrowed') {
        $('#cancelModal').modal('show');
    }
}

function showModal2(arg) {
    if (arg == 'topup') {        
        $('#topupModal').modal('show');        
    } 
}

$('[name="url"]').keyup(function () {
    var url = $('[name="url"]').val();
    if (url == '') {
        $('[name="url"]').addClass('is-invalid');
        $('[class="error invalid-feedback url"]').remove();
        $('[name="url"]').parent().append('<span class="error invalid-feedback url">URL Required</span>');
    } else {
        $('[name="url"]').removeClass('is-invalid');
        $('[class="error invalid-feedback url"]').remove();
    }
});
$('[name="title"]').keyup(function () {
    var title = $('[name="title"]').val();
    if (title == '') {
        $('[name="title"]').addClass('is-invalid');
        var test = $('[name="title"]').parent();
        $('[class="error invalid-feedback title"]').remove();
        $('[name="title"]').parent().append('<span class="error invalid-feedback title">Title Required</span>');
    } else {
        $('[name="title"]').removeClass('is-invalid');
        $('[class="error invalid-feedback title"]').remove();
    }
});

$('[name="category"]').change(function () {
    var category = $('[name="category"] :selected').val();
    if (category == '') {
        $('[name="category"]').addClass('is-invalid');
    } else {
        $('[name="category"]').removeClass('is-invalid');
    }
});

function confirmBook() {
    var url = $('[name="url"]').val();
    var title = $('[name="title"]').val();
    var date = $('[name="date"]').val();
    var category = $('[name="category"] :selected').val();
    if (url == '') {
        $('[name="url"]').addClass('is-invalid');
        $('[class="error invalid-feedback url"]').remove();
        $('[name="url"]').parent().append('<span class="error invalid-feedback url">URL Required</span>');
    } else {
        $('[name="url"]').removeClass('is-invalid');
        $('[class="error invalid-feedback url"]').remove();
    }
    if (title == '') {
        $('[name="title"]').addClass('is-invalid');
        var test = $('[name="title"]').parent();
        $('[class="error invalid-feedback title"]').remove();
        $('[name="title"]').parent().append('<span class="error invalid-feedback title">Title Required</span>');
    } else {
        $('[name="title"]').removeClass('is-invalid');
        $('[class="error invalid-feedback title"]').remove();
    }
    if (date == '') {
        $('[name="date"]').addClass('is-invalid');
        $('[class="error invalid-feedback date"]').remove();
        $('[name="date"]').parent().append('<span class="error invalid-feedback date">Date Required</span>');
    } else {
        $('[name="date"]').removeClass('is-invalid');
        $('[class="error invalid-feedback date"]').remove();
    }
    if (category == '') {
        $('[name="category"]').addClass('is-invalid');
    } else {
        $('[name="category"]').removeClass('is-invalid');
    }

    if (url != '' && title != '' && date != '' && category != '') {
        $('#ModalBook').modal('hide');
        $('#BerhasilModal2').modal('show');
    }

}

function resetModal(){
    $('[name="url"]').removeClass('is-invalid');
    $('[class="error invalid-feedback url"]').remove();
    $('[name="title"]').removeClass('is-invalid');
    $('[class="error invalid-feedback title"]').remove();
    $('[name="date"]').removeClass('is-invalid');
    $('[class="error invalid-feedback date"]').remove();
    $('[name="category"]').removeClass('is-invalid');
    $('[class="error invalid-feedback date"]').remove();
    $('[name="url"]').val('');
    $('[name="title"]').val('');
    $('[name="date"]').val('');
    $('[name="category"]').val('');
}

function clickstatus() {
    var status = document.getElementById("button_borrow").value;
    if (status == "borrowed") {
        sessionStorage.setItem("lastname", "Borrow");
        document.getElementById("button_borrow").value = "borrow";
        document.getElementById("button_borrow").innerHTML = sessionStorage.getItem("lastname");
    } else {
        if (document.getElementById("returndate").value !== "" && document.getElementById("borrowdate").value !== "") {
            sessionStorage.setItem("lastname", "Borrowed");
            document.getElementById("button_borrow").value = "borrowed";
            document.getElementById("button_borrow").innerHTML = sessionStorage.getItem("lastname");
            $('#BorrowModal').modal('hide');
            $('#BerhasilModal3').modal('show');
        }
    }

}

function confirmclick(){
    Swal.fire({
                    
        icon: 'warning',
        title: 'Warning!',
        showCancelButton: true,
        text: 'Are you sure want to confirm this?',                    
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire(
                'Success!',
                'Confirm Top Up Already Success!',
                'success'
              )
        } 
      })  
}

function cancelclick(){
    Swal.fire({
                    
        icon: 'warning',
        title: 'Warning!',
        showCancelButton: true,
        text: 'Are you sure want to cancel this?',                    
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire(
                'Success!',
                'Cancel Top Up Already Success!',
                'success'
              )
        } 
      })  
}

$(".any").keyup(function(){    
    anynominal = document.getElementById("any").value;  
    document.getElementById("option7").value=anynominal;     
  });


  
function topup_process(){
    if (document.getElementById("topup-user").value !== "" && $('input[name=option1]:checked').val() !=="" && $('input[name=option2]:checked').val() !=="") {
        if ($('input[name=option]:checked').val() >= 10000){
            if ($('input[name=option2]:checked').val() == "Credit Card" || $('input[name=option2]:checked').val() == "Paypall" || $('input[name=option2]:checked').val() == "OVO" || $('input[name=option2]:checked').val() == "Gopay" || $('input[name=option2]:checked').val() == "Dana" || $('input[name=option2]:checked').val() == "Cash"){
                document.getElementById("checkuser").setAttribute("value",document.getElementById("topup-user").value);
                document.getElementById("checknominal").setAttribute("value",$('input[name=option]:checked').val());
                document.getElementById("checkmethod").setAttribute("value",$('input[name=option2]:checked').val());
                $('#checkModal').modal('show');
                $('#topupModal').modal('hide');
            } else{
                Swal.fire(
                    'Warning!',
                    'Select Payment Method !',
                    'warning'
                  )
            }
            
        } else{
            Swal.fire(
                'Warning!',
                'Must Above RP 10.000! or There is Blank Space!',
                'warning'
              ) 
        }
        
    } else {
        Swal.fire(
            'Warning!',
            'There is Blank Space!',
            'warning'
          ) 
    }
    
}

function topupstatus(){
    var password1=document.getElementById("passwordconfirm").value;
    var password2=document.getElementById("passwordconfirm2").value;
        if (password1 !=="" && password2 !==""){                         
            if(password1==password2){
            Swal.fire(
                'Success!',
                'Top Up Succes Wait for Confirmation Admin!',
                'success'
              )
              $('#passwordModal').modal('hide');
        } else{
            Swal.fire(
                'Warning!',
                'Password Not Match!',
                'warning'
              )
        }
    
    } else {
        Swal.fire(
            'Warning!',
            'There is Blank Space!',
            'warning'
          )
    }
}



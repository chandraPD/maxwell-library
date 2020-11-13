function showModal(arg) {
    if (arg == 'add') {
        document.querySelector('#modal-title').textContent = 'Add Data';
        $('[name="url"]').val('');
        $('[name="title"]').val('');
        $('[name="date"]').val('');
        $('[name="category"] option[value=""]').attr('selected', 'selected');
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
        $('#BorrowModal').modal('show');
        $('#borrow_button').val('Borrowed');
    } else if (arg == 'borrowed') {
        $('#cancelModal').modal('show')
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
function showModal1(arg) {
    if (arg == 'borrow') {
        $('#BorrowModal').modal('show');
        $('#borrow_button').val('Borrowed');
    } else if (arg == 'borrowed') {
        $('#cancelModal').modal('show')
    }
}

function clickstatus() {
    var status = document.getElementById("button_borrow").value;
    var borrowedbtn = document.getElementById("button_borrow");
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





function showModal(arg){
    if(arg == 'add'){
        document.querySelector('#modal-title').textContent = 'Add Data';
        $('[name="url"]').val('');
        $('[name="title"]').val('');
        $('[name="date"]').val('');
        $('[name="category"] option[value=""]').attr('selected','selected');
        CKEDITOR.instances["description"].setData("");
    }else if (arg == 'edit'){
        document.querySelector('#modal-title').textContent = 'Edit Data';

        // get data book
        $('[name="url"]').val('./assets/novel-dilan.jpg');
        $('[name="title"]').val('Dilan 1991');
        $('[name="date"]').val('11/08/2020');
        $('[name="category"] option[value="Novel"]').attr('selected','selected');
        CKEDITOR.instances["description"].setData("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar. Proin sit amet accumsan lectus. Nullam auctor auctor consequat. Donec semper magna erat, sed fringilla lacus pretium eget. Cras porttitor, nibh sit amet interdum bibendum, nibh velit accumsan tellus, vel vehicula tellus leo vitae ipsum. Praesent sit amet libero sed orci ullamcorper efficitur. Pellentesque in euismod purus, sit amet ultrices tortor. Vestibulum ante dui, tempor at dui id, tincidunt euismod diam. Integer pellentesque massa nibh, aceleifend odio malesuada sed. Phasellus orci sem, cursus nec orci ut, accumsan facilisis lacus. Nullam atelementum nibh, ac gravida felis. In sagittis rhoncus nisi tempus dignissim. Sed fringilla consequat ante vitae lobortis. Cras posuere ligula vel enim suscipit malesuada. Vivamus non nulla ut ante imperdiet euismod quis nec massa.</p>")
    }
    $('#ModalBook').modal('show');
}



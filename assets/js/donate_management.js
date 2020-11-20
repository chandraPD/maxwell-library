function accept() {
    Swal.fire('Saved!', 'Donate has been Accepted!', 'success')
}


function cancel() {
    Swal.fire({
        title: 'Do you want to Cancel this donate?',
        showCancelButton: true,
        confirmButtonText: `Yes`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', 'donate has been Canceled!', 'success')
        }
    })
}
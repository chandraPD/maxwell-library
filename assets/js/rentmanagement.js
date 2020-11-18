
function acceptRent() {
    Swal.fire('Saved!', 'Rent has been Accepted!', 'success')
}


function cancelRent() {
    Swal.fire({
        title: 'Do you want to Cancel this Rent?',
        showCancelButton: true,
        confirmButtonText: `Yes`,
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            Swal.fire('Saved!', 'Rent has been Canceled!', 'success')
        }
    })
}
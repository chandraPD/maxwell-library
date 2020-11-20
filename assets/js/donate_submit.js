//Submit Donate
function submitdonate() {
    // event.preventDefault();

    var Email = document.getElementById('inputEmail').value;
    var Name = document.getElementById('inputName').value;
    var DonationType = document.getElementById('inputDonationtype').value;
    var PhoneNumber = document.getElementById('inputPhone').value;
    var DonationNumber = document.getElementById('inputBookbybook').value;

    if (Email == ''|| Name == ''|| DonationType == ''|| PhoneNumber == ''|| DonationNumber == ''){
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
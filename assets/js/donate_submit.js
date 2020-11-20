const submitform= document.querySelector('btn-submitform');
});
//Submit Donate
function submitdonate() {
    form.form-horizontal.style.display = "none";

    var Email = document.getElementById('inputEmail3')
    var Name = document.getElementById('inputName3')
    var Donation Type = document.getElementById('inputDonationtype3')
    var Phone Number = document.getElementById('inputPhone3')
    var Total Book by number = document.getElementById('inputBookbybook3')

    if (Email == ''|| Name == ''|| Donation Type=''|| Phone Number=''|| Total Book by number=''){
        Swal.fire(
            'Submit Failed !',
            'You should fill in the blank',
            'error'
        );
        form.form-horizontal.style.display = "none";
    }else{
        Swal.fire(
            'Submitted !',
            'You clicked the button!',
            'success'
        );
    }}
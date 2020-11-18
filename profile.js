const editButton = document.querySelector('button.edit-profile');
const editForm = document.querySelector('#container-editform');
const submitForm = document.querySelector('.btn-editform input');
// const submitForm = document.querySelector('#submit-profile');
const cancelForm = document.querySelector('.btn-editform button');

editButton.addEventListener('click', function(){
    editForm.style.display = 'block';
});

submitForm.addEventListener('click', function(){
    editForm.style.display = 'none';
});

cancelForm.addEventListener('click', function(){
    editForm.style.display = 'none';
});

// UPDATE DATA USER 
function submitEditProfile() {
    editForm.style.display = 'none';

    var firstName = document.getElementById('user-firstname').value;
    var lastName = document.getElementById('user-lastname').value;
    var dateOfBirth = document.getElementById('date-birth').value;
    var emailUser = document.getElementById('user-email').value;
    var addressUser = document.getElementById('user-address').value;
    var phoneNumber = document.getElementById('user-number').value;

    if (firstName == '' || lastName == '' || dateOfBirth == '' || emailUser == '' || addressUser == '' || phoneNumber == ''){
            Swal.fire(
                'Submit Failed !',
                'You should fill in the blank',
                'error'
            );
            editForm.style.display = 'none';
        }else{
            Swal.fire(
                'Submitted !',
                'You clicked the button!',
                'success'
            );

            document.getElementById('firstname').innerHTML = firstName;
            document.getElementById('lastname').innerHTML = lastName;
            document.getElementById('birthday').innerHTML = dateOfBirth;
            document.getElementById('email').innerHTML = emailUser;
            document.getElementById('address').innerHTML = addressUser;
            document.getElementById('phonenumber').innerHTML = phoneNumber;
            
        }

}


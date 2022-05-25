// Event listener

document.querySelector('.button-submit').addEventListener('click', validateInputs);

function listenInvalidInputs() {
    document.querySelectorAll('.invalid-input').forEach(e => e.addEventListener('input', removeInvalidInputClass));
}

// Validation

function validateInputs() {
    document.querySelectorAll('[required]').forEach((input) => {
        input.classList.add('invalid-input');
    });

    listenInvalidInputs();
    alertPasswordMismatch();
};

function alertPasswordMismatch(){
    if(document.querySelector('#password').value !== document.querySelector('#confirm-password').value) {
        document.querySelector('.password-invalid').textContent = '* Password do not match';
        document.querySelector('#password').classList.add('invalid-input');
        document.querySelector('#confirm-password').classList.add('invalid-input');
        document.querySelector('#password').setCustomValidity('Passwords do not match');
        document.querySelector('#confirm-password').setCustomValidity('Passwords do not match');    
    } else {
        document.querySelector('#password').setCustomValidity('');
        document.querySelector('#confirm-password').setCustomValidity('');    
    }
}

function removeInvalidInputClass() {
    this.classList.remove('invalid-input');
};
const form = document.getElementById("signUpForm")

form.addEventListener('submit', function(event) {
    event.preventDefault()
    const firstNameInput = form.elements.name

    if (!firstNameInput.checkValidity()) {
        firstNameInput.classList.add('invalid')
    }
    else {
        firstNameInput.classList.remove('invalid')
    }

    if (form.chackValidity()) {
        form.submit()
    }
})
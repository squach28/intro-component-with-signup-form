document.getElementById('account-form').addEventListener('submit', (e) => {
    e.preventDefault()
    const firstName = document.getElementById('first-name')
    const lastName = document.getElementById('last-name')
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    if(firstName.value === '') {
        document.getElementById('first-name-error').style.display = 'block'
        firstName.style.backgroundImage = 'url(./images/icon-error.svg)'
    } else {
        document.getElementById('first-name-error').style.display = 'none'
        firstName.style.backgroundImage = ''
    }

    if(lastName.value === '') {
        document.getElementById('last-name-error').style.display = 'block'
        lastName.style.backgroundImage = 'url(./images/icon-error.svg)'
    } else {
        document.getElementById('last-name-error').style.display = 'none'
        lastName.style.backgroundImage = ''
    }

    if(email.value === '') {
        document.getElementById('email-error').style.display = 'block'
        email.style.backgroundImage = 'url(./images/icon-error.svg)'
        email.placeholder = 'email@example/com'
        email.classList.add('error-email')
    } else {
        document.getElementById('email-error').style.display = 'none'
        email.style.backgroundImage = ''
    }

    if(password.value === '') {
        document.getElementById('password-error').style.display = 'block'
        password.style.backgroundImage = 'url(./images/icon-error.svg)'
    } else {
        document.getElementById('password-error').style.display = 'none'
        password.style.backgroundImage = ''
    }

})


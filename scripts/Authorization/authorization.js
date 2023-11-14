const signInBtn = document.getElementById('signIn-btn');

const form = {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    button: document.querySelector('.log-in-form-btn'),
    error: document.querySelector('.input-error'),
}

signInBtn.addEventListener('click', activateModal)

export function activateModal() {
    const modalEl = document.createElement('div');
    modalEl.classList.add('modal');
    const logInForm = document.querySelector(".log-in-form-wrapper")
    logInForm.classList.remove('hidden')
    modalEl.append(logInForm)

    mui.overlay('on', modalEl);
}



export function checkForm() {
    const email = form.email.getElementsByTagName('input')[0].value
    const password = form.password.getElementsByTagName('input')[0].value

    if (email && password) {
        form.button.classList.remove('disable')
    } else {
        form.button.classList.add('disable')
    }
}
export function handleInput(e, name) {
    const { value } = e.target
    if (value) {
        form[name].classList.add("filled")
    } else {
        form[name].classList.remove("filled")
    }
    checkForm()
}

export function deleteError() {
    form.email.classList.remove('error')
    form.error.classList.remove('view')
}
export function validateEmail() {
    const { value } = form.email.getElementsByTagName('input')[0]
    const reg = /[a-z]{3,20}@[a-z]{3,10}\.[a-z]{2,4}/
    if(reg.test(value)) {
        alert ('Ви увійшли!')
        deleteError()
    } else{
        form.button.classList.add('disable')
        form.email.classList.add('error')
        form.error.classList.add('view')
    }
}
form.email.oninput = (e) => handleInput(e, 'email');
form.password.oninput = (e) => handleInput(e, 'password');
form.button.onclick = validateEmail;
form.email.getElementsByTagName('input')[0].onblur = validateEmail;
form.email.getElementsByTagName('input')[0].onfocus = deleteError;
const signInBtn = document.getElementById('signIn-btn');
signInBtn.addEventListener('click', openModal)

export function openModal() {
    createModal("Реєстрація", getAuthForm())
    document.getElementById('auth-form').addEventListener('submit', authFormHandler, {once: true})
}

export function createModal(title, content) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    modal.innerHTML = `
    <h1>${title}</h1>  
    <div class = "modal-content">${content}</div>
    `
    mui.overlay('on', modal);
}

export function getAuthForm() {
    return `
<div class="log-in-form-wrapper">
   <form class="mui-form" id="auth-form">
   <div class="mui-textfield mui-textfield--float-label">
    <input type="email" id="email" required>
    <label for="email">Email</label>
  </div>
  <div class="mui-textfield mui-textfield--float-label">
    <input type="password" id="password" required>
    <label for="password"">Password</label>
  </div>
  <button type="submit" class="mui-btn mui-btn--raised mui-btn--primary log-in-form-btn" id="formBtn">Увійти</button>
</form>
</div>
   `
}

export function authFormHandler(event) {
    event.preventDefault()
    const email = event.target.querySelector('#email').value;
    const password = event.target.querySelector('#password').value;

    authWithEmailAndPassword(email, password)
}

export function authWithEmailAndPassword (email, password) {
    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: 'your@email.com', password: 'password' })
    })
        .then(response => response.text())
        .then(token => console.log(token))
        .then(addToLocalStorage)

}

export function addToLocalStorage(token) {
localStorage.setItem('token', JSON.stringify(token))
}
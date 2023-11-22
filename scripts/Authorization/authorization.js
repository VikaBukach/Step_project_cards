const signInBtn = document.getElementById('signIn-btn');
signInBtn.addEventListener('click', openModal)
showBtnCreateVisit()

export function openModal() {
    createModal("Реєстрація", getAuthForm())
    document.getElementById('auth-form').addEventListener('submit', authFormHandler, {once: true})
}

export function createModal(title, content) {
    var modal = document.createElement('div');
    modal.setAttribute('id', 'registration-form')
    modal.classList.add('modal');
    modal.innerHTML = `
    <h1 class="title" >${title}</h1>  
    <div class = "modal-content">${content}</div>`
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
</div>`
}

export function authFormHandler(event) {
    event.preventDefault()
    const email = event.target.querySelector('#email').value;
    const password = event.target.querySelector('#password').value;

    authWithEmailAndPassword(email, password)
}

export function authWithEmailAndPassword(email, password) {

    fetch("https://ajax.test-danit.com/api/v2/cards/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email: email, password: password})
    })
        .then(response => response.text())
        .then(token => {
            if(token === "Incorrect username or password") {
                alert('Incorrect username or password')
                location.reload();

                return;
            }

            localStorage.setItem('token', token)
            mui.overlay('off')

            showBtnCreateVisit()
        })
}

export function showBtnCreateVisit() {
    if (isAuthorized()) {
        const CreateVisitBtn = document.getElementById('createVisit-btn');
        const LogoutBtn = document.getElementById('logout-btn');
        signInBtn.style.display = 'none';
        CreateVisitBtn.style.display = 'flex';
        LogoutBtn.style.display = 'flex';
    }
}

export function isAuthorized() {
    return localStorage.getItem('token') && localStorage.getItem('token').length > 0;
}



export function logout() {
    localStorage.removeItem('token');
    location.reload();
}

const LogoutBtn = document.getElementById('logout-btn');
LogoutBtn.addEventListener('click', logout)



// rrrrr@ttt.ua      є 1 створена картка
// 11111
// 91ed8dc3-0171-4061-a126-f66fcd47fca1

// Dfgtr@gmail.com
// 1234we
// 9c254ab4-ac5e-41fc-b944-c1cd249b849b
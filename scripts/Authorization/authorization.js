import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";

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
        body: JSON.stringify({email: 'your@email.com', password: 'password'})
    })
        .then(response => response.text())
        .then(token => {
            console.log((token))
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

async function cardInfo() {
    const requests = await fetch("https://ajax.test-danit.com/api/v2/cards",
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).then(data => data.json())
    Promise.all(requests)
        .then(responses => {
            responses.forEach(item => {
                if (item.doctors === 'DentistVisit') {
                    new DentistVisit(item).render('body');
                }
                if (item.doctors === 'CardioVisit') {
                    new CardioVisit(item).render('body');
                }
                if (item.doctors === 'TherapistVisit') {
                    new TherapistVisit(item).render('body');
                }
            })
        })
}


checkFirstVisit();
export function checkFirstVisit() {
    const div = document.querySelector('.main-container');
    const h2 = document.createElement('h2');

    if (localStorage.getItem('token')) {
        h2.remove()
        cardInfo()
    } else {
        h2.className = "title-main";
        h2.innerHTML = "No items have been added";
        div.prepend(h2);
    }

}


export function logout() {
    localStorage.removeItem('token');
    location.reload();
}

const LogoutBtn = document.getElementById('logout-btn');
LogoutBtn.addEventListener('click', logout)

// 11111@qwe.ua
// 11111
// 5db4c838-6625-4594-b0ea-4feb25002fe6

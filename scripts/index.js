// 726f8982-072f-4309-934f-3fa2041c134c
//korotejev@gmail.com
//123

import {openModal, createModal, getAuthForm, authFormHandler, authWithEmailAndPassword, showBtnCreateVisit, isAuthorized, logout} from "./Authorization/authorization.js";

import DentistVisit from "./classes/DentistVisit.js";
import CardioVisit from "./classes/CardioVisit.js";
import TherapistVisit from "./classes/TherapistVisit.js";
import Visits from "./classes/Visits.js";
import CreateFilterCards from "./classes/Visits.js";
import { getForm } from "./helpers/getForm.js";


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
            console.log('responses', responses)
            if (responses.length < 1) {
                const div = document.querySelector('.main-container');
                const h2 = document.createElement('h2');
                h2.className = "title-main";
                h2.innerHTML = "No items have been added";
                div.prepend(h2);

                return;
            }

            const h2 = document.createElement('h2');
            h2.remove()

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

cardInfo()





const btnVisit = document.getElementById('createVisit-btn')
btnVisit.addEventListener("click", function (event){
  new Visits({}).renderForm()
const option = document.getElementById('selectDoc');
console.log(option)
option.addEventListener("change", function (event) {
  console.log(event.target.value)
 getForm(event.target.value)
}
)
 })






 
  
import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import {arrCardsVisits} from "../index.js";

export function renderCards(cardList) {
    document.querySelector('.grid-container').innerHTML = '';

    cardList.forEach(item => {
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
}

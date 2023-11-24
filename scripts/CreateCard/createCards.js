import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import {arrCardsVisits} from "../index.js";

export function renderCards(cardList) {
    document.querySelector('.grid-container').innerHTML = '';

    if (cardList.length < 1) {
        const div = document.querySelector('.main-container');
        const h2 = document.createElement('h2');
        h2.className = "title-main";
        h2.innerHTML = "No items have been added";
        div.prepend(h2);

        return;
    }

    const h2 = document.createElement('h2');
    h2.remove()

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

    console.log('arrCardsVisits', arrCardsVisits)
}

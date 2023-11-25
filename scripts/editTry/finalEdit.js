import DentistEdit from "./DentistEdit.js";
import CardioEdit from "./CardioEdit.js";
import TherapistEdit from "./TherapistEdit.js";
import {arrCardsVisits} from "../index.js";

export function renderEditCards(cardList) {
    document.querySelector('.grid-container').innerHTML = '';

   // console.log('000000000000', cardList)

    cardList.forEach(item => {
        if (item.doctors === 'DentistVisit') {
            new DentistEdit(item).renderEdit('body');
        }
        if (item.doctors === 'CardioVisit') {
            new CardioEdit(item).renderEdit('body');
        }
        if (item.doctors === 'TherapistVisit') {
            new TherapistEdit(item).renderEdit('body');
        }
    })

    // console.log('arrCardsVisits', arrCardsVisits)
}

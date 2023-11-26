import {arrCardsVisits} from "../index.js";
import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";

document.addEventListener("click", (e) => {
    if(e.target.classList.contains('deleteBtn'))  {
        deleteCard(e.target)
    }
})

export function deleteCard(selector) {
    const card = selector.closest(".card");

    fetch(`https://ajax.test-danit.com/api/v2/cards/${card.id}`,
        {headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }, method: 'DELETE' }).then(response => console.log(response))
    arrCardsVisits.forEach(item => {
        card.remove()
    })
}

import {arrCardsVisits, cardsVisitsRemoveById} from "../index.js";
import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";

document.addEventListener("click", (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        deleteCard(e.target)
    }
})

export function deleteCard(selector) {
    const card = selector.closest(".card");

    fetch(`https://ajax.test-danit.com/api/v2/cards/${card.id}`,
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            }, method: 'DELETE'
        }).then(response => {


        cardsVisitsRemoveById(card.id)

        card.remove()
        console.log(arrCardsVisits)
        if (arrCardsVisits.length < 1) {
            const div = document.querySelector('.main-container');
            const h2 = document.createElement('h2');
            h2.className = "title-main";
            h2.innerHTML = "У Вас відсутні картки запланованих зустрічей до лікарів";
            div.append(h2);
        }
    })
}

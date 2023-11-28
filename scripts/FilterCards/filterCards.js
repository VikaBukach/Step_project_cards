import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";
import { getForm } from "../helpers/getForm.js";
import { arrCardsVisits } from "../index.js";
import { renderCards } from "../CreateCard/createCards.js";


export function CreateFormFilter() {
    const mainContainer = document.querySelector('.main-container')
    mainContainer.insertAdjacentHTML("beforeend", `
   
    <div class= "search__form-wrapper" >
        <form class ="search__form">
            <input type="text" name="search" id="search" placeholder="Введіть прізвище">
                <select name="status-search" id="status">
                    <option value="all">Статус візита</option>
                    <option value="done">Візит пройшов</option>
                    <option value="open">Візит ще не відбувся</option>
                </select>
                <select name="urgency" id="urgency">
                    <option value="choose">Терміновість</option>   
                    <option value="ordinary">Звичайна</option>
                    <option value="priority">Пріорітетна</option>
                    <option value="urgent">Невідкладна</option>
                </select>
        </form>
    </div>
`)
}

function filterCards(text) {
    return arrCardsVisits.filter((card) => {
        return card.fullName.toLowerCase().includes(text.toLowerCase())
    })
}
export default filterCards;

document.addEventListener("input", (event) => {

    if (event.target.id === "search") {
        renderCards(filterCards(event.target.value))
    }
})

export function filterUrgency(index) {
    if(index.toLowerCase() === 'choose') {
        return arrCardsVisits
    }

    return arrCardsVisits.filter((card) => {
        return card.timing === index
    })
}
document.addEventListener("change", (event) => {

    if (event.target.id === "urgency") {
        renderCards(filterUrgency(event.target.value))
    }
})

export function filterStatus(index) {
    if(index.toLowerCase() === 'all') {
        return arrCardsVisits
    }

    return arrCardsVisits.filter((card) => {

        return card.status === index
    })
}

document.addEventListener("change", (event) => {

    if(event.target.id === "status") {
        console.log(event.target.value)
        renderCards(filterStatus(event.target.value))
    }
})


import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";
import { getForm } from "../helpers/getForm.js";
import {arrCardsVisits} from "../index.js";
import {renderCards} from "../CreateCard/createCards.js";


export function CreateFormFilter() {
    const mainContainer = document.querySelector('.main-container')
    mainContainer.insertAdjacentHTML("beforeend", `
   
    <div class= "search__form-wrapper" >
        <form class ="search__form">
            <input type="text" name="search" id="search" placeholder="Введіть прізвище">
                <select name="" id="status">
                    <option value="all">Статус візита</option>
                    <option value="open">Візит пройшов</option>
                    <option value="done">Візит ще не відбувся</option>
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
        return card.fullName.includes(text)
    })

}

export default filterCards;

// const inputSearch = document.querySelector("#search");
document.addEventListener("input", (event) => {

    if(event.target.id === "search") {
        renderCards(filterCards(event.target.value))
    }
})


export function filterUrgency(index) {

    return arrCardsVisits.filter((card) => {
        return card.timing === index
    })
}
document.addEventListener("change", (event) => {

    if(event.target.id === "urgency") {
        renderCards(filterUrgency(event.target.value))
    }
})

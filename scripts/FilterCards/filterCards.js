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
                <select id="doctors">
                    <option value="choose">Обрати лікаря</option>
                    <option value="DentistVisit">Стоматолог</option>
                    <option value="TherapistVisit">Терапевт</option>
                    <option value="CardioVisit">Кардіолог</option>
                </select>
                <select id="urgency">
                    <option value="all">Терміновість</option>   
                    <option value="ordinary">Звичайна</option>
                    <option value="priority">Пріорітетна</option>
                    <option value="low">Невідкладна</option>
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

const inputSearch = document.querySelector("#search");
document.addEventListener("input", (event) => {

    if(event.target.id === "search") {
        renderCards(filterCards(event.target.value))
        // console.log(filterCards(event.target.value))
    }
})

function filterDoctors(event) {

    return arrCardsVisits.filter((card) => {
        return card.doctors.includes(event)
    })
}
document.addEventListener("change", (event) => {
    console.log(event.target)
    if(event.target.id === "doctors") {
        console.log(event.target.value)

    }
})

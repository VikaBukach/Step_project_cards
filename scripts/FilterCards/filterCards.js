import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";
import { getForm } from "../helpers/getForm.js";

export function CreateFormFilter() {

    const mainContainer = document.querySelector('.main-container')
    mainContainer.insertAdjacentHTML("beforeend", `
    
    <div class= "search__form-wrapper" >
        <form class ="search__form">
            <input type="text" name="search" id="search" placeholder="Search by doctor">
                <select name="" id="status">
                    <option value="all">All</option>
                    <option value="open">Open</option>
                    <option value="done">Done</option>
                </select>
                <select name="" id="urgency">
                    <option value="all">All</option>
                    <option value="hign">High</option>
                    <option value="norm">Normal</option>
                    <option value="low">Low</option>
                </select>
        </form>
    </div>
`)
}
CreateFormFilter()

const inputSearch = document.querySelector("#search");
inputSearch.addEventListener("input", filterCards)



function filterCards(event) {
    // console.log(event.target.value);





}
export default filterCards;


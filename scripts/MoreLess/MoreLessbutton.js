import {arrCardsVisits} from "../index.js";
import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";

document.addEventListener("click", (e) => {
    if (e.target.classList.contains('toggle')) {
        showMore(e.target)
    }
})

export function showMore(target) {

    const toggle = target;
    const text = target.closest(".card").querySelector(".text")
    const points = target.closest(".card").querySelector('.dots')
    if (points.style.display === "none") {
        text.style.display = "none";
        points.style.display = "inline";
        toggle.textContent = "Show More";
    } else {
        text.style.display = "flex";
        text.style.flexDirection = "column";
        points.style.display = "none";
        toggle.textContent = "Show Less";
    }
}
  


  




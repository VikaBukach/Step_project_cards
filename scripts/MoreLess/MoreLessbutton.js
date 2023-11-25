import {arrCardsVisits} from "../index.js";
import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";

document.addEventListener("click", (e) => {
    if(e.target.id === 'toggle') {
        showMore(e.target)
    }
})
export function showMore(selector) {
  const card = selector.closest(".card");
  console.log(selector)
  const toggle = document.getElementById("toggle")
  const text = document.getElementById("text")
  const points = document.getElementById("dots")
  if (points.style.display === "none") {
    text.style.display = "none";
    points.style.display = "inline";
    toggle.textContent = "Show More";
}
else {
    text.style.display = "inline";
    points.style.display = "none";
    toggle.textContent = "Show Less";
}
}

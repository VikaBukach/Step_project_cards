import {arrCardsVisits} from "../index.js";
import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";

document.addEventListener("click", (e) => {
    if(e.target.id === 'toggle') {
    showMore(e.target.id)}})
    
export function showMore() {

const toggle = document.querySelectorAll(".toggle")
  const text = document.querySelector(".text")
  const points = document.querySelector('.dots')
  if (points.style.display === "none") {
    text.style.display = "none";
    points.style.display = "inline";
    toggle.textContent = "Show More";
   // toggle.add.className = "toggleBtn";
}
else {
    text.style.display = "flex";
    text.style.flexDirection = "column";
    points.style.display = "none";
    toggle.textContent = "Show Less";
}
      }
  


  




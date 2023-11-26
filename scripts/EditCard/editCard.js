import DentistVisit from "../classes/DentistVisit.js";
import CardioVisit from "../classes/CardioVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";
import Visits from "../classes/Visits.js";
import { getForm } from "../helpers/getForm.js";
import { editFormTemplate } from "../helpers/form.js";

document.addEventListener("click", (e) => {
    if (e.target.classList.contains('editBtn')) {
        editCard(e.target)
    }
})


export function editCard(selector) {
    editFormTemplate(selector)
}

// 726f8982-072f-4309-934f-3fa2041c134c
//korotejev@gmail.com
//123

import {openModal, createModal, getAuthForm, authFormHandler, authWithEmailAndPassword, showBtnCreateVisit, isAuthorized, logout} from "./Authorization/authorization.js";
import {checkFirstVisit} from "./Authorization/authorization.js";

import DentistVisit from "./classes/DentistVisit.js";
import CardioVisit from "./classes/CardioVisit.js";
import TherapistVisit from "./classes/TherapistVisit.js";
import Visits from "./classes/Visits.js";
import { getForm } from "./helpers/getForm.js";






const btnVisit = document.getElementById('createVisit-btn')
btnVisit.addEventListener("click", function (event){
  new Visits({}).renderForm()
const option = document.getElementById('selectDoc');
console.log(option)
option.addEventListener("change", function (event) {
  console.log(event.target.value)
 getForm(event.target.value)


}


)
 })






 
  
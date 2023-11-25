import { getForm } from "../helpers/getForm.js";
import Visits from "./Visits.js";

class DentistVisit extends Visits {
  constructor({id, doctors, fullName, purpose, timing, description, status, lastVisit}) {
    super({id, doctors, fullName, purpose, timing, description, status});

    this.lastVisit = lastVisit;
  }
renderForm(){      
    const addValue = `    
  <div class="lableVisit" id="formForDoctor">
  <lable id="lastVisit">Останній візит:</lable>
  <input type="date" name="lastVisit" required></div>
  `
  super.renderForm(addValue)
  const option = document.getElementById('selectDoc');
  option.value='DentistVisit';
  option.addEventListener("change", function (event) {
    console.log(event.target.value)
   getForm(event.target.value)
  }
  )
}
  render() {
    document.querySelector(".grid-container").insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span class="cardInfo">${this.doctors}</span>
  <span class="cardInfo">${this.fullName}</span> <span id="dots">...</span>
  <div id="text" class="text">

  <span class="cardInfo">${this.purpose}</span>
  <span class="cardInfo">${this.description}</span>
  <span class="cardInfo">${this.timing}</span>
  <span class="cardInfo">${this.status}</span>
  <span class="cardInfo">${this.lastVisit}</span>
  
  <button id="deleteBtn">delete</button>
  <button id="editBtn">Edit Card</button></div>
  <button id="toggle">Show More</button>

  </div>`)}
}

export default DentistVisit;
import { getForm } from "../helpers/getForm.js";
import Visits from "./Visits.js";

class TherapistVisit extends Visits {
  constructor({id, doctors, fullName, purpose, timing, description, status, age}) {
super({id, doctors, fullName, purpose, timing, description, status});
    this.age = age;
  }
  renderForm(){       
    const addValue = `
    <div class="lableVisit" id="formForDoctor">
    <lable id="day">Вік:</lable>
    <input type="number" name="age" required></div>
    `
    super.renderForm(addValue)
    const option = document.getElementById('selectDoc');
    console.log(option)
    option.value='TherapistVisit';
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
  <span class="cardInfo">${this.fullName}</span> <span id="dots" class="dots">...</span>
  <div id="text" class="text">

  <span class="cardInfo">${this.purpose}</span>
  <span class="cardInfo">${this.description}</span>
  <span class="cardInfo">${this.timing}</span>
  <span class="cardInfo">${this.status}</span>
  <span class="cardInfo">${this.age}</span>
  
  <button id="deleteBtn">delete</button>
  <button id="editBtn">Edit Card</button></div>
  <button id="toggle" class="toggle">Show More</button>

  </div>`)}
}

export default TherapistVisit;
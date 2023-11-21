import { getForm } from "../helpers/getForm.js";
import Visits from "./Visits.js";

class CardioVisit extends Visits {
  constructor({id, fullName, purpose, timing, description, pressure, index, diseases, age}) {
    super({id, fullName, purpose, timing, description});

    this.pressure = pressure;
    this.index = index;
    this.diseases = diseases;
    this.age = age;
  }
  renderForm(){    
   //const submitBtn = document.getElementById("submitBtn").parentElement
   //const formForDoctor = document.getElementById("formForDoctor")
   const addValue = `
    <div class="lableVisit" id="formForDoctor">
    <lable id="pressure">Звичайний тиск:</lable>
    <input type="number" name="pressure" required></div>
    <div class="lableVisit">
    <lable id="index">Індекс маси тіла:</lable>
    <input type="number" name="index" required></div>
    <div class="lableVisit">
    <lable id="diseases">Захворювання:</lable>
    <input type="text" name="diseases" required></div>
    <div class="lableVisit">
    <lable id="age">Вік:</lable>
    <input type="number" name="age" required></div>
    `
    //submitBtn.insertAdjacentHTML("beforebegin", addValue)
   super.renderForm(addValue)
   const option = document.getElementById('selectDoc');
   console.log(option)
   option.addEventListener("change", function (event) {
   //  createForm.remove()
     console.log(event.target.value)
    getForm()
 
    
   }
   
   
   )
  }
  render(selector) {
    document.querySelector("body").insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span>${this.fullName}</span>
  <span>${this.purpose}</span>
  <span>${this.description}</span>
  <span>${this.timing}</span>
  <span>${this.pressure}</span>
  <span>${this.index}</span>
  <span>${this.diseases}</span>
  <span>${this.age}</span>
  </div>`)}
}

export default CardioVisit;
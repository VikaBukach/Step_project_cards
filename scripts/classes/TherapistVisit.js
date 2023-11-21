import Visits from "./Visits.js";

class TherapistVisit extends Visits {
  constructor({id, fullName, purpose, timing, description, age}) {
super({id, fullName, purpose, timing, description});
    this.age = age;
  }
  renderForm(){    
    const submitBtn = document.getElementById("submitBtn").parentElement
   
    const addValue = `
    <div class="lableVisit" id="formForDoctor">
    <lable id="day">Вік:</lable>
    <input type="number" name="age" required></div>
    `
    submitBtn.insertAdjacentHTML("beforebegin", addValue)
  }
  render(selector) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span>${this.fullName}</span>
  <span>${this.purpose}</span>
  <span>${this.description}</span>
  <span>${this.timing}</span>
  <span>${this.age}</span>
  </div>`)}
}

export default TherapistVisit;
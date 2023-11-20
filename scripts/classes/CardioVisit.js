import Visits from "./Visits.js";

class CardioVisit extends Visits {
  constructor(id, name, purpose, time, description, pressure, index, diseases, age) {
    super(id, name, purpose, time, description);

    this.pressure = pressure;
    this.index = index;
    this.diseases = diseases;
    this.age = age;
  }
  renderForm(){    
   const submitBtn = document.getElementById("submitBtn").parentElement
   const formForDoctor = document.getElementById("formForDoctor")
   formForDoctor.remove()
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
    submitBtn.insertAdjacentHTML("beforebegin", addValue)
   // super.renderForm(addValue)
  }
  render(selector) {
    document.querySelector("body").insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span>${this.name}</span>
  <span>${this.purpose}</span>
  <span>${this.description}</span>
  <span>${this.time}</span>
  <span>${this.pressure}</span>
  <span>${this.index}</span>
  <span>${this.diseases}</span>
  <span>${this.age}</span>
  </div>`)}
}

export default CardioVisit;
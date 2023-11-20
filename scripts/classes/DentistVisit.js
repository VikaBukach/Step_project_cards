import Visits from "./Visits.js";

class DentistVisit extends Visits {
  constructor(id, name, purpose, time, description, lastVisit) {
    super(id, name, purpose, time, description);

    this.lastVisit = lastVisit;
  }
renderForm(){    
  const submitBtn = document.getElementById("submitBtn").parentElement
  
    const addValue = `    
  <div class="lableVisit" id="formForDoctor">
  <lable id="lastVisit">Останній візит:</lable>
  <input type="date" name="lastVisit" required></div>
  `
  submitBtn.insertAdjacentHTML("beforebegin", addValue)
}
  render(selector) {
    document.querySelector(selector).insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span>${this.name}</span>
  <span>${this.purpose}</span>
  <span>${this.description}</span>
  <span>${this.time}</span>
  <span>${this.lastVisit}</span>
  </div>`)}
}

export default DentistVisit;
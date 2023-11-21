import Visits from "./Visits.js";

class DentistVisit extends Visits {
  constructor({id, fullName, purpose, timing, description, lastVisit}) {
    super({id, fullName, purpose, timing, description});

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
  render(selector) { console.log(super.purpose)
    document.querySelector(selector).insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span>${this.fullName}</span>
  <span>${this.purpose}</span>
  <span>${this.description}</span>
  <span>${this.timing}</span>
  <span>${this.lastVisit}</span>
  </div>`)}
}


export default DentistVisit;
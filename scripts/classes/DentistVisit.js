import { getForm } from "../helpers/getForm.js";
import Visits from "./Visits.js";

class DentistVisit extends Visits {
  constructor({id, fullName, purpose, timing, description, lastVisit}) {
    super({id, fullName, purpose, timing, description});

    this.lastVisit = lastVisit;
  }
renderForm(){    
//  const submitBtn = document.getElementById("submitBtn").parentElement
  
    const addValue = `    
  <div class="lableVisit" id="formForDoctor">
  <lable id="lastVisit">Останній візит:</lable>
  <input type="date" name="lastVisit" required></div>
  `
 // submitBtn.insertAdjacentHTML("beforebegin", addValue)
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
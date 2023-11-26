import {editform} from "./editform.js";
import EditVisits from "./editCards.js";

class EditDentistVisit extends EditVisits {
    constructor({id, doctors, fullName, purpose, timing, description, status, lastVisit}) {
        super({id, doctors, fullName, purpose, timing, description, status});

        this.lastVisit = lastVisit;
    }

    renderCard() {
        const addValue = `    
  <div class="lableVisit" id="formForDoctor">
  <lable id="lastVisit">Останній візит:</lable>
  <input type="date" name="lastVisit" required></div>
  `
        super.renderCard(addValue)
        const option = document.getElementById('selectDoc');
        option.value = 'DentistVisit';
        option.addEventListener("change", function (event) {
                console.log(event.target.value)
                editform(event.target.value)
            }
        )
    }

    renderEdit() {
        document.querySelector(".grid-container").insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span class="cardInfo">${this.doctors}</span>
  <span class="cardInfo">${this.fullName}</span> <span id="dots" class="dots">...</span>
  <div id="text" class="text">

  <span class="cardInfo">${this.purpose}</span>
  <span class="cardInfo">${this.description}</span>
  <span class="cardInfo">${this.timing}</span>
  <span class="cardInfo">${this.status}</span>
  <span class="cardInfo">${this.lastVisit}</span>
  
  <button class="deleteBtn">delete</button>
  <button class="editBtn">Edit Card</button></div>
  <button class="toggle">Show More</button>

  </div>`)

        document.querySelectorAll('.editBtn').forEach((btnEdit) => {
            btnEdit.addEventListener("click", function (event) {
                new EditVisits({}).renderCard()
                const option = document.getElementById('selectDoc');
                console.log(option)
                option.addEventListener("change", function (event) {
                        console.log(event.target.value)
                        editform(event.target.value)
                    }
                )
            })
        })

    }
}

export default EditDentistVisit;


//render => render edit
//renderform => render card
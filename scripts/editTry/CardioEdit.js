import {editform} from "./editform.js";
import EditVisits from "./editCards.js";

class EditCardioVisit extends EditVisits {
    constructor({id, doctors, fullName, purpose, timing, description, status, pressure, index, diseases, age}) {
        super({id, doctors, fullName, purpose, timing, description, status});
        this.pressure = pressure;
        this.index = index;
        this.diseases = diseases;
        this.age = age;
    }

    renderCard() {
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
        super.renderCard(addValue)
        const option = document.getElementById('selectDoc');
        console.log(option)
        option.value = 'CardioVisit';
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
  <span class="cardInfo">${this.pressure}</span>
  <span class="cardInfo">${this.index}</span>
  <span class="cardInfo">${this.diseases}</span>
  <span class="cardInfo">${this.age}</span>
  <button id="deleteBtn">delete</button>
  <button id="editBtn">Edit Card</button></div>
    <button id="toggle" class="toggle">Show More</button>

  </div>`)
  const btnEdit = document.getElementById('editBtn')
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
    }
}

export default EditCardioVisit;
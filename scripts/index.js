// 726f8982-072f-4309-934f-3fa2041c134c
//korotejev@gmail.com
//123

import {openModal, createModal, getAuthForm, authFormHandler, authWithEmailAndPassword, showBtnCreateVisit, isAuthorized} from "./Authorization/authorization.js";


import DentistVisit from "./classes/DentistVisit.js";
import CardioVisit from "./classes/CardioVisit.js";
import TherapistVisit from "./classes/TherapistVisit.js";
//import getCards from "./API/getCards.js";
//import postCards from "./API/postCards.js";
import Visits from "./classes/Visits.js";
import createForm from "./classes/Visits.js";

//import createForm from "./classes/Visits.js";

//import filterCards from "./Filter.js";

// new DentistVisit("Maria", 32).render();


async function cardInfo(){
const requests = await fetch("https://ajax.test-danit.com/api/v2/cards", {headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${"6905f287-0231-463f-9520-1e50f37ba227"}`,
}}).then(data => data.json())
 Promise.all(requests)
    .then(responses => {
            responses.forEach(item => {console.log(item)

               let doctorName = "doctors"
               
               if (doctorName === 'DentistVisit') {     
                new DentistVisit(responses).render('body');}
              else if (doctorName === 'TherapistVisit') { 
                new TherapistVisit(responses).render('body');
              }
              else if (doctorName === 'CardioVisit') {     
                new CardioVisit(responses).render('body');
              }
                
            })

          })}

cardInfo()





const btnVisit = document.getElementById('createVisit-btn')

btnVisit.addEventListener("click", function (event){new Visits().renderForm()
  const option = document.getElementById('selectDoc');
  
  option.addEventListener("change", function (event) {
    console.log(event.target.value)
    const formForDoctor = document.getElementById("formForDoctor")
    console.log(formForDoctor)
    if (event.target.value === 'choose') { 

      console.log("choose")
    }
    else if (event.target.value === 'TherapistVisit') { 

      new TherapistVisit().renderForm();
    }
    else if (event.target.value === 'DentistVisit') { 

      new DentistVisit().renderForm();
    }
    else if (event.target.value === 'CardioVisit') {     

      new CardioVisit().renderForm();
    }
  })

/*

const option = document.getElementById('selectDoc');
  
  option.addEventListener("change", function (event) {
    console.log(event.target.value)


    if (event.target.value === 'choose') { 

      console.log("choose")
    }
    else if (event.target.value === 'TherapistVisit') { 

      new TherapistVisit().renderForm();
    }
    else if (event.target.value === 'DentistVisit') { 

      new DentistVisit().renderForm();
    }
    else if (event.target.value === 'CardioVisit') {     

      new CardioVisit().renderForm();
    }
  }


  if (event.target.value === 'DentistVisit') {     
    new DentistVisit(name, purpose, time, description, lastVisit).render();
  }
  else if (event.target.value === 'TherapistVisit') { 
    new TherapistVisit(name, purpose, time, description, day).render();
  }
  else if (event.target.value === 'CardioVisit') {     
    new CardioVisit(name, purpose, time, description, pressure, index, diseases, age).render();
  }
  

  createForm.onsubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(URL_USER_INFO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTHORIZATION_TOKEN}`,
      },
      body: new FormData(createForm)
    })
    .then(response => response.json())
    .then(response => console.log(response))
  };



  
  if (option.value === 'DentistVisit') {     
    new DentistVisit(name, purpose, time, description, lastVisit).render();
  }
  else if (option.value === 'TherapistVisit') { 
    new TherapistVisit(name, purpose, time, description, day).render();
  }
  else if (option.value === 'CardioVisit') {     
    new CardioVisit(name, purpose, time, description, pressure, index, diseases, age).render();
  }
*/
})




//s.addEventListener("click", function (event) {

/*
const inputSeach = document.querySelector("#search");
inputSeach.addEventListener("input", () => {
filterCards(event, data, "body")
})

const inputSelect = document.querySelector("#filter");
inputSelect.addEventListener("input", () => {
filterCards(event, data, "body")
})
*/





/*
class Visit{
constructor(purpose, description, urgency, fullName){
this.purpose = purpose;
this.description = description;
this.urgency = urgency;
this.fullName = fullName
this.container
}


createElement(){
this.container.innerHTML=`
<form id="visitForm">
<select name="" id="doctorChoise">
<option value="dentist">Стоматолог</option>
<option value="cardiologist">Кардіолог</option>
<option value="therapist">Терапевт</option>
</select>
    <input type="text" name="goal" placeholder="">
    <input type="text" name="description" placeholder="">
    <select name="" id="cardUrgency">
        <option value="regular">Звичайна</option>
        <option value="priority">Пріорітетна</option>
        <option value="urgent">Невідкладна</option>
    </select>
    <input type="text" name="fullName" placeholder="">
</form>
`
}

render(){

}
}

class VisitDentist extends Visit{
constructor(purpose, description, urgency, fullName, lastVisit) {
    super(purpose, description, urgency, fullName)
    this.lastVisit = lastVisit;
}

createElement(){
    super.createElement();
const visitForm = document.getElementById("visitForm")
this.container.innerHTML=`
<input type="date" value="2023-01-01" />
`
}
}

class VisitCardiologist extends Visit{
    constructor(purpose, description, urgency, fullName, pressure, massIndex, illnesses,age) {
        super(purpose, description, urgency, fullName)
        this.pressure = pressure;
        this.massIndex = massIndex;
        this.illnesses = illnesses;
        this.age = age
    }

    createElement(){
        super.createElement();
    const visitForm = document.getElementById("visitForm")
    this.container.innerHTML=`
    <input type="date" value="2023-01-01" />
    `
    }
  
}

class VisitTherapist extends Visit{
    constructor(purpose, description, urgency, fullName, age) {
        super(purpose, description, urgency, fullName)
        this.age = age;
    }
    reateElement(){
        super.createElement();
    const visitForm = document.getElementById("visitForm")
    this.container.innerHTML=`
    <input type="text" value="2023-01-01" />
    `
    }

}
*/

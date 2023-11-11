// 726f8982-072f-4309-934f-3fa2041c134c

//korotejev@gmail.com
//123

class Modal{

}



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


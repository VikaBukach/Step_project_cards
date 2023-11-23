import {getForm} from "../helpers/getForm.js";


class Visits {
    constructor({id, doctors, fullName, purpose, timing, description}) {
        this.id = id;
        this.doctors = doctors;
        this.fullName = fullName;
        this.purpose = purpose;
        this.timing = timing;
        this.description = description;
    }

    render(selector) {
        console.log(fullName)
        document.querySelector(selector).insertAdjacentHTML('beforeend', `
  <div class="card" id=${this.id}>
  <span class="cardInfo">${this.doctors}</span>
  <span class="cardInfo">${this.fullName}</span>
  <span class="cardInfo">${this.purpose}</span>
  <span class="cardInfo">${this.description}</span>
  <span class="cardInfo">${this.timing}</span>
  </div>`)
    }

    renderForm(addContent) {
        document.getElementById("createForm")?.remove()
        document.querySelector("body").insertAdjacentHTML('afterend', `
    <form id="createForm" class="modal formDoc">    
    <svg id="closeButton" class="closeButton" width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#63aeff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Edit / Close_Square"> <path id="Vector" d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z" stroke="#63aeff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
    <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5" stroke="rgba(99, 174, 255, 0.79)" stroke-width="1.5" stroke-linecap="round"></path> <path d="M16.652 3.45506L17.3009 2.80624C18.3759 1.73125 20.1188 1.73125 21.1938 2.80624C22.2687 3.88124 22.2687 5.62415 21.1938 6.69914L20.5449 7.34795M16.652 3.45506C16.652 3.45506 16.7331 4.83379 17.9497 6.05032C19.1662 7.26685 20.5449 7.34795 20.5449 7.34795M16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9M20.5449 7.34795L14.5801 13.3128C14.1761 13.7168 13.9741 13.9188 13.7513 14.0926C13.4886 14.2975 13.2043 14.4732 12.9035 14.6166C12.6485 14.7381 12.3775 14.8284 11.8354 15.0091L10.1 15.5876M10.1 15.5876L8.97709 15.9619C8.71035 16.0508 8.41626 15.9814 8.21744 15.7826C8.01862 15.5837 7.9492 15.2897 8.03811 15.0229L8.41242 13.9M10.1 15.5876L8.41242 13.9" stroke="rgba(99, 174, 255, 0.79)" stroke-width="1.5"></path> </g></svg>
    <select class="lableVisit" id="selectDoc" name="doctors">
    <option class="modal" value="choose">Обрати лікаря</option>
    <option class="modal"value="DentistVisit">Стоматолог</option>
    <option class="modal"value="TherapistVisit">Терапевт</option>
    <option class="modal"value="CardioVisit">Кардіолог</option>
  </select>
    <div class="lableVisit">
    <lable id="nameForm">ПІБ:</lable><br>
    <input type="text" name="fullName" required></div>
    <div class="lableVisit">
    <lable id="purposeForm">Мета візиту:</lable><br>
    <input type="text" name="purpose" required></div>
    <div class="lableVisit">
    <select class="selectTime lableVisit" id="selectTime" name="timing">
    <option class="modal" value="choose">Обрати терміновість</option>
    <option class="modal" value="ordinary">Звичайна</option>
    <option class="modal" value="priority">Пріорітетна</option>
    <option class="modal" value="urgent">Невідкладна</option>
  </select>
    </div>
    <div class="lableVisit">
    <lable id="descrForm">Опис візиту:</lable><br>
    <input type="text" name ="description" required></div>
    ${addContent || ""} 
    <div class="lableVisit">
    <input сlass="submitBtn" id="submitBtn" type="submit" value="Створити візит"></div>
  </form>
    `)
        const createForm = document.getElementById("createForm")
        const submitBtn = document.getElementById("submitBtn")
        submitBtn.addEventListener("click", async (e) => {
            e.preventDefault();
            try {
                async function postRequest() {
                    console.log("createForm")
                    const response = await axios.post('https://ajax.test-danit.com/api/v2/cards', new FormData(createForm), {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem('token')}`,
                        },
                    });
                    console.log("Server response:", response.data);// додати fn яка має відмальовувати картку
                }

                postRequest()
            } catch (error) {
                console.error("Error during fetch:", error);
            }
        })
        var options = {
            'keyboard': true, // teardown when <esc> key is pressed (default: true)
            'static': false, // maintain overlay when clicked (default: false)
            'onclose': function() {
                document.body.classList.remove('mui-scroll-lock')
            } // execute function when overlay is closed
        };
        mui.overlay('on', options, createForm)

        const closeButton = document.getElementById('closeButton');
        closeButton.addEventListener('click', function () {
            mui.overlay('off', createForm)


            createForm.remove()
        });
    }
}

export default Visits;



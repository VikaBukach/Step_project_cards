//import {URL_USER_INFO, AUTHORIZATION_TOKEN} from "../constants/constants.js"
/*
async function postRequest(event){
  const response = await axios.post('https://ajax.test-danit.com/api/v2/cards', new FormData(createForm), {
      headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${"6905f287-0231-463f-9520-1e50f37ba227"}`,
      },
  });

  console.log("Server response:", response.data);
   if (response.data.doctors === 'DentistVisit') { 
          new DentistVisit(response.data).render('body');}
          if (response.data.doctors === 'CardioVisit') { 
            new CardioVisit(response.data).render('body');}
            if (response.data.doctors === 'TherapistVisit') { 
              new TherapistVisit(response.data).render('body');}
  event.preventDefault()
}


const postCards = async () => {
  try {
    const data = (await fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${"6905f287-0231-463f-9520-1e50f37ba227"}`,
      },
      body: JSON.stringify(new FormData(createForm))
    }))
      let result = await response.json();
      console.log(result.message);
      return data;
   
  } catch (err) {
    console.log(err)
  }
}




export default postRequest;
/*/

export default postRequest;

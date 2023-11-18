import {URL_USER_INFO, AUTHORIZATION_TOKEN} from "../constants/constants.js"




const postCards = async () => {
  try {
    const data = (await fetch(URL_USER_INFO, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTHORIZATION_TOKEN}`,
      },
      body: JSON.stringify( new FormData(createForm))
    }))
      let result = await response.json();
      alert(result.message);
      return data;
   
  } catch (err) {
    console.log(err)
  }
}




export default postCards;

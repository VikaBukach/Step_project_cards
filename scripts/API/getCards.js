import {URL_USER_INFO, AUTHORIZATION_TOKEN} from "../constants/constants.js"

const getCards = async () => {
  try {
    const data = (await fetch(URL_USER_INFO, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${AUTHORIZATION_TOKEN}`,
      }
    })).json();

    return data;


  } catch (err) {
    console.log(err)
  }
}

export default getCards;
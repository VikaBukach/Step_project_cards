import CardioVisit from "../classes/CardioVisit.js";
import DentistVisit from "../classes/DentistVisit.js";
import TherapistVisit from "../classes/TherapistVisit.js";

export function getForm (value){

    if (value === 'TherapistVisit') { 
    
        new TherapistVisit({}).renderForm();
      }
      else if (value === 'DentistVisit') { 
  
        new DentistVisit({}).renderForm();
      }
      else if (value === 'CardioVisit') {     
  
        new CardioVisit({}).renderForm();
      }
}


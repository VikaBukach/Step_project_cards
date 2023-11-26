import EditCardioVisit from "./CardioEdit.js";
import EditDentistVisit from "./DentistEdit.js";
import EditTherapistVisit from "./TherapistEdit.js";

export function editform (value){
    console.log('dddd')
    if (value === 'TherapistVisit') { 
    
        new EditTherapistVisit({}).renderCard();
      }
      else if (value === 'DentistVisit') { 
  
        new EditDentistVisit({}).renderCard();
      }
      else if (value === 'CardioVisit') {     
  
        new EditCardioVisit({}).renderCard();
      }
}


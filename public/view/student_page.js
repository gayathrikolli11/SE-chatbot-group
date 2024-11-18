import { root } from "./elements.js";
import { signinFirebase } from "../controller/firebase_auth.js";

export async function studentPageView()
{

    const roleSelectionContainer = document.getElementById("role-selection-container");
    const welcomeContainer = document.getElementById("welcome-section");

    
    if (roleSelectionContainer) {
        roleSelectionContainer.style.display = "none";
    }
    
    if (welcomeContainer) {
        welcomeContainer.style.display = "none";
    }


    const response = await fetch('/view/templates/student_page_template.html',
    {cache:'no-store'}
    );

    const divWrapper= document.createElement('div'); //<div></div>
    divWrapper.style.width = "400px";
    divWrapper.classList.add('m-4', 'p-4');
    divWrapper.innerHTML=await response.text(); 


    root.innerHTML = ' '; //clear current page rendering 
    root.appendChild(divWrapper);
}
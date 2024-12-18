import { root } from "./elements.js";
import { signinFirebase, signOutFirebase } from "../controller/firebase_auth.js";

export async function ProfHomePageView()
{
    const welcomeContainer = document.getElementById("welcome-section");
    welcomeContainer.style.display = "none";
    document.getElementsByClassName('logout-btn').onClick = signOutFirebase();
    
    const response = await fetch('/view/templates/prof_page_template.html',
    {cache:'no-store'}
    );

    const divWrapper= document.createElement('div'); 
    divWrapper.style.width = "400px";
    divWrapper.classList.add('m-4', 'p-4');
    divWrapper.innerHTML=await response.text(); 


    root.innerHTML = ' '; //clear current page rendering 
    root.appendChild(divWrapper);
}


import { routePathnames } from "./route_controller.js";
import { signinPageView } from "../view/signin_page.js";
import {  setRoleSelected } from "./firebase_auth.js";
import { studentPageView } from "../view/student_page.js";

export function onClickProfessorMenu(e) {
    console.log("Professor role clicked"); 
    setRoleSelected(true); // Set the flag to indicate the Professor role is selected
    // attachAuthStateChangeObserver(); // Attach the auth observer after role selection
    history.pushState(null, null, routePathnames.SIGNIN);
    signinPageView(); 
}


export function onClickStudentMenu(e) {
    console.log("Student role clicked"); 
    // attachAuthStateChangeObserver(); // Attach the auth observer after role selection
    history.pushState(null, null, routePathnames.STUDENT);
    studentPageView(); 
}

import {
    getAuth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
  } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-auth.js";
  import { app } from "./firebase_core.js";
  import { signinPageView } from "../view/signin_page.js";
import { ProfHomePageView } from "../view/prof_page.js";
import { routePathnames } from "./route_controller.js";
  
  export const auth = getAuth(app);
  export let currentUser = null;
  let roleSelected = false; // Global flag to track if a role has been selected
  export function setRoleSelected(value) {
    roleSelected = value;
}

export function getRoleSelected() {
    return roleSelected;
}

  
  export async function signinFirebase(e) {
      e.preventDefault();
      const email = e.target.email.value;
      const password = e.target.password.value;
  
      try {
          const userCredential = await signInWithEmailAndPassword(auth, email, password);
          console.log("User signed in:", userCredential.user);
  
          document.getElementById("root").innerHTML = `<p>Welcome, ${userCredential.user.email}</p>`;
          ProfHomePageView();
      } catch (error) {
          console.error("Sign-in error:", error.message);
          alert("Sign-in failed: " + error.message);
      }
  }
  
  export function attachAuthStateChangeObserver() {
      onAuthStateChanged(auth, (user) => {
          if (!roleSelected) {
              console.log("Auth state change ignored because no role is selected.");
              return; // Exit early if no role is selected
          }
  
          currentUser = user;
  
          if (user) {
              console.log("User is signed in:", user.email);
              document.getElementById("root").innerHTML = `<p>Welcome, ${user.email}</p>`;
          } else {
              console.log("No user is signed in.");
              signinPageView(); // Render the sign-in page
          }
      });
  }
  
  export async function signOutFirebase() {
      await signOut(auth);
     
      console.log("User signed out.");
      roleSelected = false; // Reset the flag after sign-out
      history.pushState(null, null, routePathnames.SIGNIN);

  }
  
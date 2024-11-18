import { onClickProfessorMenu, onClickStudentMenu } from "./controller/menueventhandler.js";
import { routing } from "./controller/route_controller.js";

//menu button handler
console.log("In JS");
document.getElementById("professor-role").onclick = onClickProfessorMenu;
document.getElementById("student-role").onclick = onClickStudentMenu;



window.onload=function(e)
{
    const pathname=window.location.pathname;
    const hash=window.location.hash;
    console.log("Onload path:", pathname, "hash:", hash);
    routing(pathname, hash);
}

window.onpopstate = function(e)
{
    e.preventDefault();
    const pathname =  window.location.pathname;
    const hash = window.location.hash;
    console.log("Popstate path:", pathname, "hash:", hash);
    routing(pathname, hash);
}
import { signinPageView } from "../view/signin_page.js"
import { studentPageView } from "../view/student_page.js";
import { ProfHomePageView
    
 } from "../view/prof_page.js";
export const routePathnames={
    HOME: "/", // Add home route
    SIGNIN: '/signin', 
    STUDENT: '/student', 
    PROFESSOR: '/professor',
}

export const routes =[
    {path: routePathnames.SIGNIN, page: signinPageView},
    {path: routePathnames.STUDENT, page: studentPageView},
   { path: routePathnames.PROFESSOR, page: ProfHomePageView},


];

export function routing(pathname, hash)
{
    const route=routes.find(r => r.path == pathname);
    if(route)
    {
        console.log(`Found route for pathname: ${pathname}`);
        route.page(); // Render the matched page
    } else {
        console.log(`No route found for pathname: ${pathname}`);
        // No fallback to other pages; the default view is handled in index.html
    }
}
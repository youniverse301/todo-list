import { loadPage } from "./modules/inbox";
import { loadRight } from "./modules/edit";

loadPage();
loadRight(); 


document.getElementById("inbox").addEventListener('click', function() {
    console.log("yo")
    loadPage();
});
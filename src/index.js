import { loadPage } from "./modules/inbox";

loadPage();


document.getElementById("inbox").addEventListener('click', function() {
    console.log("yo")
    inbox();
});
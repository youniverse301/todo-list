import { inbox } from "./modules/inbox";

inbox();

document.getElementById("inbox").addEventListener('click', function() {
    console.log("yo")
    inbox();
});
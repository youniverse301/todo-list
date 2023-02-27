import { loadPage } from "./modules/inbox";
import { loadRight } from "./modules/edit";
import { loadInbox } from "./modules/inbox";
import { loadImportant } from "./modules/inbox";

loadPage();
loadRight(); 

document.getElementById("inbox").addEventListener('click', loadInbox);
document.getElementById("important").addEventListener('click', loadImportant);
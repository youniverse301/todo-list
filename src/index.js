import { loadPage } from "./modules/inbox";
import { loadRight } from "./modules/edit";
import { loadInbox } from "./modules/inbox";
import { loadToday } from "./modules/date";
import { loadNext7 } from "./modules/date";
import { loadImportant } from "./modules/inbox";
import { dateFormat } from "./modules/date";

loadPage();
loadRight(); 
dateFormat()

document.getElementById("inbox").addEventListener('click', loadInbox);
document.getElementById("today").addEventListener('click', loadToday);
document.getElementById("next7").addEventListener('click', loadNext7);
document.getElementById("important").addEventListener('click', loadImportant);
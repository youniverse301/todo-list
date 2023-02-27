(()=>{"use strict";const t=document.getElementById("rightContainer"),e=document.createElement("div");e.setAttribute("id","titleContainer");const n=document.createElement("h1");n.setAttribute("id","allTasksTitle");const i=document.createElement("div");i.setAttribute("id","taskContainer");const d=document.createElement("img");d.setAttribute("id","completeTaskBtn"),d.src="./imgs/filledCircle.png";const c=document.createElement("div");c.setAttribute("id","textContainer");const o=document.createElement("div");o.setAttribute("id","taskTitle"),o.innerHTML="Take out the trash";const r=document.createElement("div");r.setAttribute("id","taskDesc"),r.innerHTML="Dont forget dont forget dont forget";const a=document.createElement("div");a.setAttribute("id","dateContainer");const l=document.createElement("p");l.setAttribute("id","dateText"),l.innerHTML="02/23/23";const s=document.createElement("img");s.setAttribute("id","importantBtn"),s.src="./imgs/starUnfilled.png";const u=document.createElement("img");u.setAttribute("id","editBtn"),u.src="./imgs/menu-vertical.png";let m=0;function p(t){m++;const e=document.getElementById("projects"),n=document.createElement("div");n.setAttribute("class","project"),n.setAttribute("id",`project-${m}`),e.appendChild(n);const i=document.createElement("img");i.setAttribute("id","projectImg"),i.src="./imgs/sidebarBtn.png",n.appendChild(i);const d=document.createElement("div");d.setAttribute("id","projectTitle"),d.innerHTML=t,n.appendChild(d);const c=document.createElement("div");c.setAttribute("id","menuvertWrap"),n.appendChild(c);const o=document.createElement("img");o.setAttribute("id","menuVert"),o.src="./imgs/menu-vertical.png",c.appendChild(o),document.querySelectorAll(".project").forEach((function(t){t.addEventListener("click",(function(){const e=document.querySelector(".selected");e&&e.classList.remove("selected"),t.classList.add("selected");const n=t.querySelector("#projectTitle");document.getElementById("allTasksTitle").innerHTML=n.innerText;const i=t.getAttribute("id");document.querySelectorAll(".taskContainer").forEach((function(t){t.classList.contains(i)?t.classList.remove("hidden"):t.classList.add("hidden")}))}))})),c.addEventListener("click",E)}function E(t){const e=t.target.parentNode,n=document.getElementById("editContainer");if(n&&e.contains(n))n.remove();else{const t=document.createElement("div");t.setAttribute("id","editContainer");const n=document.createElement("button");n.setAttribute("id","renameBtn"),n.textContent="Rename";const i=document.createElement("button");i.setAttribute("id","deleteBtn"),i.textContent="Delete",t.appendChild(n),t.appendChild(i),n.addEventListener("click",b),i.addEventListener("click",C),e.appendChild(t)}}function C(){event.target.closest(".project").remove()}function b(){const t=event.target.closest(".project"),e=t.querySelector("#projectTitle"),n=document.createElement("form");n.setAttribute("id","renameForm");const i=document.createElement("input");i.type="text",i.value=e.innerText,n.appendChild(i);const d=document.createElement("button");d.type="submit",d.innerText="Rename",n.appendChild(d),t.replaceChild(n,e),document.getElementById("editContainer").remove(),n.addEventListener("submit",(function(e){e.preventDefault();const d=i.value,c=document.createElement("div");c.setAttribute("id","projectTitle"),c.innerText=d,t.replaceChild(c,n),document.getElementById("allTasksTitle").innerText=d}))}document.querySelectorAll(".renameBtn").forEach((function(t){t.addEventListener("click",b)}));const v=document.createElement("form");v.setAttribute("id","projectForm");const h=document.createElement("input");h.setAttribute("id","input1"),h.type="text",h.project="project",v.appendChild(h);const A=document.createElement("button");A.type="submit",A.textContent="Add",v.appendChild(A);const g=document.createElement("button");g.setAttribute("id","cancel"),g.textContent="Cancel",v.appendChild(g),document.getElementById("addProject").addEventListener("click",(function(t){document.getElementById("projects").appendChild(v),document.getElementById("cancel").addEventListener("click",(function(t){v.remove()}))})),v.addEventListener("submit",(function(t){t.preventDefault();const e={},n=document.getElementById("input1").value;e.name=n,console.log(e.name),h.value="",p(n),v.remove()}));const f=document.getElementById("rightContainer");document.getElementById("titleContainer"),document.createElement("div").setAttribute("id","taskContainer");const k=document.createElement("img");k.setAttribute("id","completeTaskBtn"),k.src="./imgs/filledCircle.png",document.createElement("div").setAttribute("id","textContainer");const T=document.createElement("div");T.setAttribute("id","taskTitle"),T.innerHTML="Take out the trash";const y=document.createElement("div");y.setAttribute("id","taskDesc"),y.innerHTML="Dont forget dont forget dont forget",document.createElement("div").setAttribute("id","dateContainer");const L=document.createElement("p");L.setAttribute("id","dateText"),L.innerHTML="02/23/23";const x=document.createElement("img");x.setAttribute("id","importantBtn"),x.src="./imgs/starUnfilled.png";const B=document.createElement("img");B.setAttribute("id","editBtn"),B.src="./imgs/menu-vertical.png";const I=document.createElement("div");I.setAttribute("id","addTaskContainer"),I.addEventListener("click",(function(){const t=document.createElement("div");t.setAttribute("id","taskFormContainer"),f.appendChild(t);const e=document.createElement("form");e.setAttribute("id","taskForm"),t.appendChild(e);const n=document.createElement("label");n.setAttribute("for","titleInput"),n.textContent="Title:",e.appendChild(n);const i=document.createElement("input");i.setAttribute("id","titleInput"),i.type="text",e.appendChild(i);const d=document.createElement("label");d.setAttribute("for","detailsInput"),d.textContent="Details (optional):",e.appendChild(d);const c=document.createElement("input");c.setAttribute("id","detailsInput"),c.type="text",e.appendChild(c);const o=document.createElement("label");o.setAttribute("for","dateInput"),o.textContent="Date:",e.appendChild(o);const r=document.createElement("input");r.setAttribute("id","dateInput"),r.type="date",e.appendChild(r);const a=document.createElement("button");a.type="submit",a.textContent="Add",a.addEventListener("click",q),e.appendChild(a);const l=document.createElement("button");l.setAttribute("id","cancel"),l.textContent="Cancel",l.addEventListener("click",S),e.appendChild(l)}));const D=document.createElement("img");D.setAttribute("id","addBtn"),D.src="./imgs/addBtn.png";const j=document.createElement("div");function S(){event.preventDefault(),document.getElementById("taskFormContainer")}function q(){event.preventDefault();const t={title:document.getElementById("titleInput").value,details:document.getElementById("detailsInput").value,date:document.getElementById("dateInput").value,completed:!1},e=function(t){H++;const e=document.createElement("div");e.setAttribute("class","taskContainer"),e.setAttribute("id",`task-${H}`);const n=document.querySelector(".project.selected");document.createElement("div"),e.classList.add(n.id);const i=document.createElement("img");i.setAttribute("id","completeTaskBtn"),i.src="./imgs/filledCircle.png";const d=document.createElement("div");d.setAttribute("id","textContainer");const c=document.createElement("div");c.setAttribute("id","taskTitle"),c.innerHTML=t.title;const o=document.createElement("div");o.setAttribute("id","taskDesc"),o.innerHTML=t.details;const r=document.createElement("div");r.setAttribute("id","dateContainer");const a=document.createElement("p");a.setAttribute("id","dateText"),a.innerHTML=t.date;const l=document.createElement("img");l.setAttribute("id","importantBtn"),l.src="./imgs/starUnfilled.png",l.addEventListener("click",U);const s=document.createElement("div");s.setAttribute("id","editBtnContainer"),s.addEventListener("click",M);const u=document.createElement("img");return u.setAttribute("id","editBtn"),u.src="./imgs/menu-vertical.png",e.appendChild(i),d.appendChild(c),d.appendChild(o),e.appendChild(d),r.appendChild(a),e.appendChild(r),e.appendChild(l),e.appendChild(s),s.appendChild(u),e}(t);f.appendChild(e),taskFormContainer.remove(),console.log(t),console.log(t.details)}j.setAttribute("id","addTaskText"),j.innerHTML="Add Task";let H=0;function M(t){const e=t.target.parentNode,n=document.getElementById("editTaskContainer");if(n&&e.contains(n))n.remove();else{const t=document.createElement("div");t.setAttribute("id","editTaskContainer");const n=document.createElement("button");n.setAttribute("id","editTaskBtn"),n.textContent="Edit";const i=document.createElement("button");i.setAttribute("id","deleteTaskBtn"),i.textContent="Delete",t.appendChild(n),t.appendChild(i),i.addEventListener("click",F),n.addEventListener("click",W),e.appendChild(t)}}function F(){event.target.closest(".taskContainer").remove()}function W(t){const e=t.target.closest(".taskContainer"),n=e.querySelector("#taskTitle"),i=e.querySelector("#taskDesc"),d=e.querySelector("#dateText"),c=document.createElement("div");c.setAttribute("id","taskFormContainer"),f.appendChild(c);const o=document.createElement("form");o.setAttribute("id","taskForm"),c.appendChild(o);const r=document.createElement("label");r.setAttribute("for","titleInput"),r.textContent="Title:",o.appendChild(r);const a=document.createElement("input");a.setAttribute("id","titleInput"),a.type="text",a.value=n.innerText,o.appendChild(a);const l=document.createElement("label");l.setAttribute("for","detailsInput"),l.textContent="Details (optional):",o.appendChild(l);const s=document.createElement("input");s.setAttribute("id","detailsInput"),s.type="text",s.value=i.innerText,o.appendChild(s);const u=document.createElement("label");u.setAttribute("for","dateInput"),u.textContent="Date:",o.appendChild(u);const m=document.createElement("input");m.setAttribute("id","dateInput"),m.type="date",m.value=d.innerText,o.appendChild(m);const p=document.createElement("button");p.type="submit",p.textContent="Save",p.addEventListener("click",(function(t){t.preventDefault();const e=a.value,o=document.createElement("div");o.setAttribute("id","taskTitle"),o.innerText=e,n.replaceWith(o);const r=s.value,l=document.createElement("div");l.setAttribute("id","taskDesc"),l.innerText=r,i.replaceWith(l);const u=m.value,p=document.createElement("div");p.setAttribute("id","dateText"),p.innerText=u,d.replaceWith(p),c.remove()})),o.appendChild(p);const E=document.createElement("button");E.setAttribute("id","cancel"),E.textContent="Cancel",E.addEventListener("click",S),o.appendChild(E)}function U(){const t=event.target.closest(".taskContainer");t.querySelector("#importantBtn").src="./imgs/starFilled.png",t.classList.add("important")}!function(){t.appendChild(e),e.appendChild(n),t.appendChild(i),i.appendChild(d),i.appendChild(c),c.appendChild(o),c.appendChild(r),i.appendChild(a),a.appendChild(l),i.appendChild(s),i.appendChild(u);var m="Default";p(m),document.getElementById("project-1").classList.add("selected"),n.innerHTML=m}(),f.appendChild(I),I.appendChild(D),I.appendChild(j),document.getElementById("inbox").addEventListener("click",(function(){document.querySelectorAll(".taskContainer").forEach((function(t){t.classList.remove("hidden")}))})),document.getElementById("important").addEventListener("click",(function(){document.querySelectorAll(".taskContainer").forEach((function(t){t.classList.contains("important")?t.classList.remove("hidden"):t.classList.add("hidden")}))}))})();
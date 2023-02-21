(()=>{"use strict";const t=document.getElementById("rightContainer"),e=document.createElement("div");e.setAttribute("id","titleContainer");const n=document.createElement("h1");n.setAttribute("id","allTasksTitle");const d=document.createElement("div");d.setAttribute("id","taskContainer");const i=document.createElement("img");i.setAttribute("id","completeTaskBtn"),i.src="./imgs/filledCircle.png";const c=document.createElement("div");c.setAttribute("id","textContainer");const o=document.createElement("div");o.setAttribute("id","taskTitle"),o.innerHTML="Take out the trash";const r=document.createElement("div");r.setAttribute("id","taskDesc"),r.innerHTML="Dont forget dont forget dont forget";const a=document.createElement("div");a.setAttribute("id","dateContainer");const l=document.createElement("p");l.setAttribute("id","dateText"),l.innerHTML="02/23/23";const s=document.createElement("img");s.setAttribute("id","importantBtn"),s.src="./imgs/starUnfilled.png";const m=document.createElement("img");m.setAttribute("id","editBtn"),m.src="./imgs/menu-vertical.png";let u=0;function p(t){u++;const e=document.getElementById("projects"),n=document.createElement("div");n.setAttribute("class","project"),n.setAttribute("id",`project-${u}`),e.appendChild(n);const d=document.createElement("img");d.setAttribute("id","projectImg"),d.src="./imgs/sidebarBtn.png",n.appendChild(d);const i=document.createElement("div");i.setAttribute("id","projectTitle"),i.innerHTML=t,n.appendChild(i);const c=document.createElement("div");c.setAttribute("id","menuvertWrap"),n.appendChild(c);const o=document.createElement("img");o.setAttribute("id","menuVert"),o.src="./imgs/menu-vertical.png",c.appendChild(o),document.querySelectorAll(".project").forEach((function(t){t.addEventListener("click",(function(){const e=document.querySelector(".selected");e&&e.classList.remove("selected"),t.classList.add("selected");const n=t.querySelector("#projectTitle");document.getElementById("allTasksTitle").innerHTML=n.innerText}))})),c.addEventListener("click",E)}function E(t){const e=t.target.parentNode,n=document.getElementById("editContainer");if(n&&e.contains(n))n.remove();else{const t=document.createElement("div");t.setAttribute("id","editContainer");const n=document.createElement("button");n.setAttribute("id","renameBtn"),n.textContent="Rename";const d=document.createElement("button");d.setAttribute("id","deleteBtn"),d.textContent="Delete",t.appendChild(n),t.appendChild(d),n.addEventListener("click",b),d.addEventListener("click",C),e.appendChild(t)}}function C(){event.target.closest(".project").remove()}function b(){const t=event.target.closest(".project"),e=t.querySelector("#projectTitle"),n=document.createElement("form");n.setAttribute("id","renameForm");const d=document.createElement("input");d.type="text",d.value=e.innerText,n.appendChild(d);const i=document.createElement("button");i.type="submit",i.innerText="Rename",n.appendChild(i),t.replaceChild(n,e),document.getElementById("editContainer").remove(),n.addEventListener("submit",(function(e){e.preventDefault();const i=d.value,c=document.createElement("div");c.setAttribute("id","projectTitle"),c.innerText=i,t.replaceChild(c,n),document.getElementById("allTasksTitle").innerText=i}))}document.querySelectorAll(".renameBtn").forEach((function(t){t.addEventListener("click",b)}));const g=document.createElement("form");g.setAttribute("id","projectForm");const v=document.createElement("input");v.setAttribute("id","input1"),v.type="text",v.project="project",g.appendChild(v);const A=document.createElement("button");A.type="submit",A.textContent="Add",g.appendChild(A);const h=document.createElement("button");function T(){t.appendChild(e),e.appendChild(n),t.appendChild(d),d.appendChild(i),d.appendChild(c),c.appendChild(o),c.appendChild(r),d.appendChild(a),a.appendChild(l),d.appendChild(s),d.appendChild(m);var u="Default";p(u),document.getElementById("project-1").classList.add("selected"),n.innerHTML=u}h.setAttribute("id","cancel"),h.textContent="Cancel",g.appendChild(h),document.getElementById("addProject").addEventListener("click",(function(t){document.getElementById("projects").appendChild(g),document.getElementById("cancel").addEventListener("click",(function(t){g.remove()}))})),g.addEventListener("submit",(function(t){t.preventDefault();const e={},n=document.getElementById("input1").value;e.name=n,console.log(e.name),v.value="",p(n),g.remove()}));const f=document.getElementById("rightContainer");document.getElementById("titleContainer"),document.createElement("div").setAttribute("id","taskContainer");const k=document.createElement("img");k.setAttribute("id","completeTaskBtn"),k.src="./imgs/filledCircle.png",document.createElement("div").setAttribute("id","textContainer");const B=document.createElement("div");B.setAttribute("id","taskTitle"),B.innerHTML="Take out the trash";const y=document.createElement("div");y.setAttribute("id","taskDesc"),y.innerHTML="Dont forget dont forget dont forget",document.createElement("div").setAttribute("id","dateContainer");const L=document.createElement("p");L.setAttribute("id","dateText"),L.innerHTML="02/23/23";const I=document.createElement("img");I.setAttribute("id","importantBtn"),I.src="./imgs/starUnfilled.png";const x=document.createElement("img");x.setAttribute("id","editBtn"),x.src="./imgs/menu-vertical.png";const j=document.createElement("div");j.setAttribute("id","addTaskContainer"),j.addEventListener("click",(function(){const t=document.createElement("div");t.setAttribute("id","taskFormContainer"),f.appendChild(t);const e=document.createElement("form");e.setAttribute("id","taskForm"),t.appendChild(e);const n=document.createElement("label");n.setAttribute("for","titleInput"),n.textContent="Title:",e.appendChild(n);const d=document.createElement("input");d.setAttribute("id","titleInput"),d.type="text",e.appendChild(d);const i=document.createElement("label");i.setAttribute("for","detailsInput"),i.textContent="Details (optional):",e.appendChild(i);const c=document.createElement("input");c.setAttribute("id","detailsInput"),c.type="text",e.appendChild(c);const o=document.createElement("label");o.setAttribute("for","dateInput"),o.textContent="Date:",e.appendChild(o);const r=document.createElement("input");r.setAttribute("id","dateInput"),r.type="date",e.appendChild(r);const a=document.createElement("button");a.type="submit",a.textContent="Add",a.addEventListener("click",D),e.appendChild(a);const l=document.createElement("button");l.setAttribute("id","cancel"),l.textContent="Cancel",e.appendChild(l)}));const H=document.createElement("img");H.setAttribute("id","addBtn"),H.src="./imgs/addBtn.png";const M=document.createElement("div");function D(){event.preventDefault();const t=function(t){q++;const e=document.createElement("div");e.setAttribute("class","taskContainer"),e.setAttribute("id",`task-${q}`);const n=document.createElement("img");n.setAttribute("id","completeTaskBtn"),n.src="./imgs/filledCircle.png";const d=document.createElement("div");d.setAttribute("id","textContainer");const i=document.createElement("div");i.setAttribute("id","taskTitle"),i.innerHTML=t.title;const c=document.createElement("div");c.setAttribute("id","taskDesc"),c.innerHTML=t.details;const o=document.createElement("div");o.setAttribute("id","dateContainer");const r=document.createElement("p");r.setAttribute("id","dateText"),r.innerHTML=t.date;const a=document.createElement("img");a.setAttribute("id","importantBtn"),a.src="./imgs/starUnfilled.png";const l=document.createElement("img");return l.setAttribute("id","editBtn"),l.src="./imgs/menu-vertical.png",e.appendChild(n),d.appendChild(i),d.appendChild(c),e.appendChild(d),o.appendChild(r),e.appendChild(o),e.appendChild(a),e.appendChild(l),e}({title:document.getElementById("titleInput").value,details:document.getElementById("detailsInput").value,date:document.getElementById("dateInput").value,completed:!1});f.appendChild(t),taskFormContainer.remove()}M.setAttribute("id","addTaskText"),M.innerHTML="Add Task";let q=0;T(),f.appendChild(j),j.appendChild(H),j.appendChild(M),document.getElementById("inbox").addEventListener("click",(function(){console.log("yo"),T()}))})();
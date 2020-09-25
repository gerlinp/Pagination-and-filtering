


// -----------GLOBAL VARIABLES---------------------//
const list = document.getElementsByClassName("student-item cf");
console.log(list);
const perPage =  10;
const searchBar = document.getElementById("searchBar");

searchBar.addEventListener('keyup',() => {

});


const showPage = (list, page) => {
   const startIndex = (page * perPage) - perPage
   const endIndex = page * perPage
  
   for (let i = 0; i < list.length; i+= 1) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = "block";
      } else {
         list[i].style.display = "none";
      }
   }
};


const total = Math.ceil(list.length / perPage);

const newDiv = document.createElement("div");
newDiv.className = "pagination";

const pageDiv = document.querySelector(".page");
pageDiv.appendChild(newDiv);

const ul = document.createElement("ul");
newDiv.appendChild(ul);

const appendPageLinks = (pages) => {
   for (let i = 1; i <= pages; i += 1) {
     const li = document.createElement("li");
     ul.appendChild(li);
     const a = document.createElement("a");
     li.appendChild(a);
     a.href = "#";
     const atext = i.toString();
     a.textContent = atext;
   } 

   const call = document.querySelectorAll("a");
   call[0].className = "active";

   for(let i =0; i < call.length; i +=1){
      call[i].addEventListener("click", (e) => {
         for (let u = 0; u < call.length; u +=1){
            call[u].classList.remove("active");
         }
         e.target.className = "active";
         showPage(list, e.target.textContent);
      });
   }
};


showPage(list, 1);
appendPageLinks(total) ; 

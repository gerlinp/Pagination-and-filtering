// -----------GLOBAL VARIABLES---------------------//
const list = document.getElementsByClassName("student-item cf");
console.log(list);
const perPage =  10;
const total = Math.ceil(list.length / perPage);



const showPage = (list, page) => { // Function that displays 10 list items based off page selected and hides the rest.
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

const appendPageLinks = (pages) => { // function that creates the pagination buttons and adds them to dom while using the showpage function to only display what is asked for.
   
      const newDiv = document.createElement("div");
   newDiv.className = "pagination";

   const pageDiv = document.querySelector(".page");
   pageDiv.appendChild(newDiv);

   const ul = document.createElement("ul");
   newDiv.appendChild(ul);
      
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

// Functions called to have 1st page be default when opening page. 
showPage(list, 1); 
appendPageLinks(total) ; 

// let statement = document.querySelector("#statement");
// statement.addEventListener("mouseenter", () => {
//     let dropdownmenu = document.querySelector(".dropdown-menu");
//     dropdownmenu.style.display = "block";
//     // console.log("clicked");
// });

// statement.addEventListener("mouseleave", () => {
//     let dropdownmenu = document.querySelector(".dropdown-menu");
//     dropdownmenu.style.display = "none";
//     // console.log("clicked");
// });

let mainUl = document.querySelectorAll(".mainUl");

// mainUl.addEventListener("click", displayMainLi);
mainUl.forEach((e)=>{e.addEventListener("click", displayMainLi)});

function displayMainLi() {
    console.log("Displayed Main Li")
    let mainLi = document.querySelectorAll(".mainLi");
    mainLi.forEach((e) => { e.style.display = 'inline-block' });
}

let mainLi = document.querySelectorAll(".mainLi");
// mainLi.addEventListener("click", displaySubUl);
mainLi.forEach((e)=>{e.addEventListener("click", displaySubUl)});


function displaySubUl() {
    console.log("Displayed Sub UL")
    let subUl = document.querySelectorAll(".subUl");
    subUl.forEach((f) => { f.style.display = 'block' });
}

let subUl = document.querySelectorAll(".subUl");
subUl.forEach((e)=>{e.addEventListener("click", displaySubLi)});

function displaySubLi() {
    let subLi = document.querySelectorAll(".subLi");
    subLi.forEach((f) => { f.style.display = 'block' });
}
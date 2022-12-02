let btn1 = document.querySelector(".Gérard");
let ul1 = document.querySelector(".ulGenre");
btn1.addEventListener("click", () => {
    let ul1 = document.querySelector(".ulGenre");
     if (ul1.style.display === "none") {
         ul1.style.display = "block";
     }
     else {
        ul1.style.display = "none";
    }
});

let btn2 = document.querySelector(".Connard");
let ul2 = document.querySelector(".ulCat");
btn2.addEventListener("click", () => {
    let ul2 = document.querySelector(".ulCat");
     if (ul2.style.display === "none") {
         ul2.style.display = "block";
     }
     else {
        ul2.style.display = "none";
    }
});
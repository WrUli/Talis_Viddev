let tabComedies = [
    {id : 1, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 2, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 3, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 4, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 5, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 6, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 7, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    // {id : 8, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},

]

function getComedieFR () {
    const sectionComedie = document.querySelector("#comedieContainerFR")
    tabComedies.forEach(tabComedie => {
        //Variable I need
        let comedieArticle = document.createElement("article");
        // let nameComedieContainer = document.createElement("h2");
        // let nameComedie = document.createTextNode(tabComedie.name);
        let imgComedieContainer = document.createElement("img");
        // let comedieResumeContainer = document.createElement("p");
        // let comedieResume = document.createTextNode(tabComedie.resume);

        //Text & image into containers
        imgComedieContainer.setAttribute("src", tabComedie.img);
        imgComedieContainer.setAttribute("class", "imgArticle");
        // nameComedieContainer.appendChild(nameComedie);
        comedieArticle.setAttribute("class", "comedieArticle");
        // comedieResumeContainer.appendChild(comedieResume);

        //Injection & organisation
        // comedieArticle.appendChild(nameComedieContainer);
        comedieArticle.appendChild(imgComedieContainer);
        // comedieArticle.appendChild(comedieResumeContainer);
        sectionComedie.appendChild(comedieArticle);
    });
}
getComedieFR ()

function getComedieUS () {
    const sectionComedie = document.querySelector("#comedieContainerUS")
    tabComedies.forEach(tabComedie => {
        //Variable I need
        let comedieArticle = document.createElement("article");
        // let nameComedieContainer = document.createElement("h2");
        // let nameComedie = document.createTextNode(tabComedie.name);
        let imgComedieContainer = document.createElement("img");
        // let comedieResumeContainer = document.createElement("p");
        // let comedieResume = document.createTextNode(tabComedie.resume);

        //Text & image into containers
        imgComedieContainer.setAttribute("src", tabComedie.img);
        imgComedieContainer.setAttribute("class", "imgArticle");
        // nameComedieContainer.appendChild(nameComedie);
        comedieArticle.setAttribute("class", "comedieArticle");
        // comedieResumeContainer.appendChild(comedieResume);

        //Injection & organisation
        // comedieArticle.appendChild(nameComedieContainer);
        comedieArticle.appendChild(imgComedieContainer);
        // comedieArticle.appendChild(comedieResumeContainer);
        sectionComedie.appendChild(comedieArticle);
    });
}
getComedieUS ()

function getComedieUK () {
    const sectionComedie = document.querySelector("#comedieContainerUK")
    tabComedies.forEach(tabComedie => {
        //Variable I need
        let comedieArticle = document.createElement("article");
        // let nameComedieContainer = document.createElement("h2");
        // let nameComedie = document.createTextNode(tabComedie.name);
        let imgComedieContainer = document.createElement("img");
        // let comedieResumeContainer = document.createElement("p");
        // let comedieResume = document.createTextNode(tabComedie.resume);

        //Text & image into containers
        imgComedieContainer.setAttribute("src", tabComedie.img);
        imgComedieContainer.setAttribute("class", "imgArticle");
        // nameComedieContainer.appendChild(nameComedie);
        comedieArticle.setAttribute("class", "comedieArticle");
        // comedieResumeContainer.appendChild(comedieResume);

        //Injection & organisation
        // comedieArticle.appendChild(nameComedieContainer);
        comedieArticle.appendChild(imgComedieContainer);
        // comedieArticle.appendChild(comedieResumeContainer);
        sectionComedie.appendChild(comedieArticle);
    });
}
getComedieUK ()

function getComedieJP () {
    const sectionComedie = document.querySelector("#comedieContainerJP")
    tabComedies.forEach(tabComedie => {
        //Variable I need
        let comedieArticle = document.createElement("article");
        // let nameComedieContainer = document.createElement("h2");
        // let nameComedie = document.createTextNode(tabComedie.name);
        let imgComedieContainer = document.createElement("img");
        // let comedieResumeContainer = document.createElement("p");
        // let comedieResume = document.createTextNode(tabComedie.resume);

        //Text & image into containers
        imgComedieContainer.setAttribute("src", tabComedie.img);
        imgComedieContainer.setAttribute("class", "imgArticle");
        // nameComedieContainer.appendChild(nameComedie);
        comedieArticle.setAttribute("class", "comedieArticle");
        // comedieResumeContainer.appendChild(comedieResume);

        //Injection & organisation
        // comedieArticle.appendChild(nameComedieContainer);
        comedieArticle.appendChild(imgComedieContainer);
        // comedieArticle.appendChild(comedieResumeContainer);
        sectionComedie.appendChild(comedieArticle);
    });
}
getComedieJP ()



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
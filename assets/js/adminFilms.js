let tabFilms = [
    {id : 1, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 2, name : "La french", genre : "Thriller", note : 4.1, img : "https://fr.web.img2.acsta.net/c_310_420/pictures/14/11/06/14/03/128118.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 3, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://fr.web.img4.acsta.net/c_310_420/pictures/14/08/21/14/17/385506.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 4, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 5, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/16/12/06/15/04/322602.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 6, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 7, name : "La french", genre : "Thriller", note : 4.1, img : "https://fr.web.img2.acsta.net/c_310_420/pictures/14/11/06/14/03/128118.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 8, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://fr.web.img4.acsta.net/c_310_420/pictures/14/08/21/14/17/385506.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 9, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 10, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/16/12/06/15/04/322602.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 11, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/19/05/03/14/30/1132544.jpg" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 12, name : "La french", genre : "Thriller", note : 4.1, img : "https://fr.web.img2.acsta.net/c_310_420/pictures/14/11/06/14/03/128118.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 13, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://fr.web.img4.acsta.net/c_310_420/pictures/14/08/21/14/17/385506.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 14, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/93/43/35/20273834.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 15, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://fr.web.img6.acsta.net/c_310_420/pictures/16/12/06/15/04/322602.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },

]

function getFilms () {
    const sectionFilm = document.querySelector("#filmsContainer");
    tabFilms.forEach(tabFilm => {
        //Variable I need
        let filmArticle = document.createElement("div");
        let nameContainer = document.createElement("h2");
        let nameFilm = document.createTextNode(tabFilm.name);
        let imgContainer = document.createElement("img");
        let filmResumeContainer = document.createElement("p");
        let filmResume = document.createTextNode(tabFilm.resume);
        let btnView = document.createElement("button");
        let btnDelete = document.createElement("button");
        let btnViewTxt = document.createTextNode("View");
        let btnDeleteTxt = document.createTextNode("Delete");
        let btnBox = document.createElement("div");

        //Text & image into containers
        imgContainer.setAttribute("src", tabFilm.img);
        nameContainer.appendChild(nameFilm);
        filmResumeContainer.appendChild(filmResume);
        filmArticle.setAttribute("class", "filmArticle");
        btnView.appendChild(btnViewTxt);
        btnDelete.appendChild(btnDeleteTxt);
        btnDelete.setAttribute("class", "btnDelete");
        btnView.setAttribute("type", "submit");
        btnBox.setAttribute("class", "btnBox2");

        //Injection & organisation
        filmArticle.appendChild(nameContainer);
        filmArticle.appendChild(imgContainer);
        filmArticle.appendChild(filmResumeContainer);
        btnBox.appendChild(btnView);
        btnBox.appendChild(btnDelete);
        filmArticle.appendChild(btnBox);
        sectionFilm.appendChild(filmArticle);
    });
}

getFilms();


let btnAddFilm = document.querySelector("#addFilm");
const myForm = document.querySelector("#formContainer")
btnAddFilm.addEventListener("click", ()=> {
    myForm.classList.toggle("displayNone");
});
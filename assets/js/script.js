//  <-------------- TAB FILMS --------------> 
//  <-------------- TAB FILMS --------------> 

let tabFilms = [
    {id : 1, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 2, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 3, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 4, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 5, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
]

function getFilms () {
    const sectionFilm = document.querySelector("#galleryComedie");
    tabFilms.forEach(tabFilm => {
        //Variable I need
        let filmArticle = document.createElement("div");
        // let nameContainer = document.createElement("h2");
        // let nameFilm = document.createTextNode(tabFilm.name);
        let imgContainer = document.createElement("img");
        // let filmResumeContainer = document.createElement("p");
        // let filmResume = document.createTextNode(tabFilm.resume);

        //Text & image into containers
        imgContainer.setAttribute("src", tabFilm.img);
        // nameContainer.appendChild(nameFilm);
        // filmResumeContainer.appendChild(filmResume);

        //Injection & organisation
        filmArticle.appendChild(nameContainer);
        filmArticle.appendChild(imgContainer);
        filmArticle.appendChild(filmResumeContainer);
        sectionFilm.appendChild(filmArticle);
    });
}

//  <-------------- TAB FILMS --------------> 
//  <-------------- TAB FILMS --------------> 

//  <-------------- TAB FILMS COMEDIE FR --------------> 
//  <-------------- TAB FILMS COMEDIE FR --------------> 

let tabComedies = [
    {id : 1, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 2, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 3, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 4, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 5, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 6, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 7, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 8, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 9, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 10, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 11, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 12, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
    {id : 13, name : "La Cité de la Peur", genre : "Comédie", note : 4, img : "https://www.welovecomedy.fr/wp-content/uploads/2022/05/la-cit%C3%A9-de-la-peur.png" ,resume : "Odile Deray est l'attachée de presse de « Red is Dead », film d'horreur de série Z, présenté au marché du film du festival de Cannes. Personne ne vient aux projections. « Par chance », un jour, le projectionniste de « Red is Dead » est sauvagement assassiné ce qui assure immédiatement la publicité du film. Odile fait venir à Cannes l'interprète principal..."},
]

function getComedie () {
    const sectionComedie = document.querySelector("#comedieContainer")
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
getComedie ()

//  <-------------- TAB FILMS COMEDIE FR --------------> 
//  <-------------- TAB FILMS COMEDIE FR --------------> 

//  <-------------- TAB FILMS THRILLER FR --------------> 
//  <-------------- TAB FILMS THRILLER FR --------------> 

let tabThrillers = [
    {id : 1, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 2, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 3, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 4, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 5, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 6, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 7, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 8, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 9, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 10, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 11, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
    {id : 12, name : "La french", genre : "Thriller", note : 4.1, img : "https://i.ytimg.com/vi/AELNPQcR6lE/maxresdefault.jpg", resume : "Marseille 1975. Pierre Michel, jeune magistrat venu de Metz, est nommé juge du grand banditisme. Il décide de s’attaquer à la French Connection, organisation mafieuse qui exporte l’héroïne. N’écoutant aucune mise en garde, Michel part en croisade contre Gaëtan Zampa, figure emblématique du milieu et parrain intouchable. Mais pour obtenir des résultats, il doit changer ses méthodes."}, 
]

function getThriller() {
    const sectionThriller = document.querySelector("#thrillerContainer")
    tabThrillers.forEach(tabThriller => {
        //Variable I need
        let thrillerArticle = document.createElement("article");
        // let nameThrillerContainer = document.createElement("h2");
        // let nameThriller = document.createTextNode(tabThriller.name);
        let imgThrillerContainer = document.createElement("img");
        let thrillerResumeContainer = document.createElement("p");
        let thrillerResume = document.createTextNode(tabThriller.resume);

        //Text & image into containers
        imgThrillerContainer.setAttribute("src", tabThriller.img);
        thrillerArticle.setAttribute("class", "thrillerArticle");
        // nameThrillerContainer.appendChild(nameThriller);
        // thrillerResumeContainer.appendChild(thrillerResume);

        //Injection & organisation
        // thrillerArticle.appendChild(nameThrillerContainer);
        thrillerArticle.appendChild(imgThrillerContainer);
        // thrillerArticle.appendChild(thrillerResumeContainer);
        sectionThriller.appendChild(thrillerArticle);
    });
}
getThriller()

//  <-------------- TAB FILMS THRILLER FR --------------> 
//  <-------------- TAB FILMS THRILLER FR --------------> 

//  <-------------- TAB FILMS SCIENCE FICTION --------------> 
//  <-------------- TAB FILMS SCIENCE FICTION --------------> 

let tabSFs = [
    {id : 1, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 2, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 3, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 4, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 5, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 6, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 7, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 8, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 9, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 10, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 11, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},
    {id : 12, name : "Le cinquième élément", genre : "science-fiction", note : 4.2, img : "https://proxymedia.woopic.com/api/v1/images/331%2FLECINQUIEMEW0032203_ban1VOD_550x309.jpg", resume : "New York, XXIIIème siècle. Une boule de feu fonce sur la Terre. Pour l'arrêter il faut retrouver le Cinquième Élément, l'être suprême, qui associé aux quatre éléments vitaux - l'air, l'eau, le feu et la terre - peut seul repousser Le Mal. Cornélius reçoit l'aide de Korben, taxi et ancien agent secret, et de Leeloo, extraterrestre qui a pris la forme d'une jeune femme aux cheveux oranges."},  
]
function getSF() {
    const sectionSF = document.querySelector("#sfContainer")
    tabSFs.forEach(tabSF => {
        //Variable I need
        let sfArticle = document.createElement("article");
        // let nameSFContainer = document.createElement("h2");
        // let nameSF = document.createTextNode(tabSF.name);
        let imgSFContainer = document.createElement("img");
        let sfResumeContainer = document.createElement("p");
        let sfResume = document.createTextNode(tabSF.resume);

        //Text & image into containers
        imgSFContainer.setAttribute("src", tabSF.img);
        sfArticle.setAttribute("class", "sfArticle");
        // nameSFContainer.appendChild(nameSF);
        // sfResumeContainer.appendChild(sfResume);

        //Injection & organisation
        // sfArticle.appendChild(nameSFContainer);
        sfArticle.appendChild(imgSFContainer);
        // thrillerArticle.appendChild(thrillerResumeContainer);
        sectionSF.appendChild(sfArticle);
    });
}
getSF()
//  <-------------- TAB FILMS SCIENCE FICTION --------------> 
//  <-------------- TAB FILMS SCIENCE FICTION --------------> 


//  <-------------- TAB FILMS FANTASTIQUE FANTAISIE --------------> 
//  <-------------- TAB FILMS FANTASTIQUE FANTAISIE --------------> 

let tabFFs = [
    {id : 1, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 2, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 3, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 4, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 5, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 6, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 7, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 8, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 9, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 10, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 11, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},
    {id : 12, name : "Le Hobbit", genre : "Fantastique", note : 4.2, img : "https://ayther.fr/wp-content/uploads/2021/07/le-hobbit-2-fin.jpg", resume : "Les aventures de Bilbon Sacquet, entraîné dans une quête héroïque pour reprendre le Royaume perdu des nains d’Erebor, conquis longtemps auparavant par le dragon Smaug. "},

]
function getFF() {
    const sectionFF = document.querySelector("#ffContainer")
    tabFFs.forEach(tabFF => {
        //Variable I need
        let ffArticle = document.createElement("article");
        // let nameFFContainer = document.createElement("h2");
        // let nameFF = document.createTextNode(tabFF.name);
        let imgFFContainer = document.createElement("img");
        let ffResumeContainer = document.createElement("p");
        let ffResume = document.createTextNode(tabFF.resume);

        //Text & image into containers
        imgFFContainer.setAttribute("src", tabFF.img);
        ffArticle.setAttribute("class", "ffArticle");
        // nameFFContainer.appendChild(nameFF);
        // ffResumeContainer.appendChild(ffResume);

        //Injection & organisation
        // ffArticle.appendChild(nameFFContainer);
        ffArticle.appendChild(imgFFContainer);
        // thrillerArticle.appendChild(thrillerResumeContainer);
        sectionFF.appendChild(ffArticle);
    });
}
getFF()
//  <-------------- TAB FILMS FANTASTIQUE FANTAISIE --------------> 
//  <-------------- TAB FILMS FANTASTIQUE FANTAISIE --------------> 

//  <-------------- TAB FILMS NOEL --------------> 
//  <-------------- TAB FILMS NOEL --------------> 

let tabNoels = [
    {id : 1, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 2, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 3, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 4, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 5, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 6, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 7, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 8, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 9, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 10, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 11, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },
    {id : 12, name : "Joyeux bordel", genre : "Film de Noël", note : 2.2, img : "https://freakingeek.com/wp-content/uploads/2016/10/JoyeuxBordel-800x445.jpg" , resume : "A la tête de l’entreprise familiale, Carole menace de fermer la branche dirigée par son frère fêtard et son équipe de bras-cassés qui pensent plus à s’éclater qu’à faire des bénéfices…" },

]
function getNoel() {
    const sectionNoel = document.querySelector("#noelContainer")
    tabNoels.forEach(tabNoel => {
        //Variable I need
        let noelArticle = document.createElement("article");
        // let nameNoelContainer = document.createElement("h2");
        // let nameNoel = document.createTextNode(tabNoel.name);
        let imgNoelContainer = document.createElement("img");
        // let noelResumeContainer = document.createElement("p");
        // let noelResume = document.createTextNode(tabNoel.resume);

        //Text & image into containers
        imgNoelContainer.setAttribute("src", tabNoel.img);
        noelArticle.setAttribute("class", "noelArticle");
        // nameNoelContainer.appendChild(nameNoel);
        // noelResumeContainer.appendChild(noelResume);

        //Injection & organisation
        // noelArticle.appendChild(nameNoelContainer);
        noelArticle.appendChild(imgNoelContainer);
        // noelArticle.appendChild(noelResumeContainer);
        sectionNoel.appendChild(noelArticle);
    });
}
getNoel()

//  <-------------- TAB FILMS NOEL --------------> 
//  <-------------- TAB FILMS NOEL --------------> 

//  <-------------- JS CARROUSEL --------------> 
//  <-------------- JS CARROUSEL --------------> 

$('.carouTest').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
        {
          breakpoint: 1860,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 1480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
        {
        breakpoint: 1000,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
        },
    ]
});


$('#comedieContainer').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1860,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1560,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 956,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
        },
        {
          breakpoint: 652,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });

  $('#thrillerContainer').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1860,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1560,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 956,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
        },
        {
          breakpoint: 652,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });

  $('#sfContainer').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1860,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1560,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 956,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
        },
        {
          breakpoint: 652,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });

  $('#ffContainer').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1860,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1560,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 956,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
        },
        {
          breakpoint: 652,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });

  $('#noelContainer').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
          breakpoint: 1860,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
            breakpoint: 1560,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 1260,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
        },
        {
            breakpoint: 956,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
        },
        {
          breakpoint: 652,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });

//  <-------------- JS CARROUSEL --------------> 
//  <-------------- JS CARROUSEL --------------> 

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



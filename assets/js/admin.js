let tabUsers = [
    {id : 1, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 2, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 3, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 4, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 5, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 6, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 7, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 8, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 9, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 10, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 11, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
    {id : 12, name : "Jean", lastname : "Dupont", email : "JeanDupont@gmail.com", mdp : "01/01/1980"},
]

function getUsers () {
    const sectionUsers = document.querySelector("#usersContainer")
    tabUsers.forEach(tabUser => {
        //Variable I need
        let userArticle = document.createElement("article");
        let nameUserContainer = document.createElement("span");
        let nameUser = document.createTextNode("Name : " + tabUser.name);
        let userLastnameContainer = document.createElement("span");
        let userLastname = document.createTextNode("Last name : " +tabUser.lastname);
        let userEmailContainer = document.createElement("span");
        let userEmail = document.createTextNode("Email : " +tabUser.email);
        let userMdpContainer = document.createElement("span");
        let userMdp = document.createTextNode("Password : " +tabUser.mdp);
        let btnView = document.createElement("button");
        let btnDelete = document.createElement("button");
        let btnViewTxt = document.createTextNode("View");
        let btnDeleteTxt = document.createTextNode("Delete");
        let btnBox = document.createElement("div");

        //Text & image into containers
        userArticle.setAttribute("class", "userArticle");
        nameUserContainer.appendChild(nameUser);
        userLastnameContainer.appendChild(userLastname);
        userEmailContainer.appendChild(userEmail);
        userMdpContainer.appendChild(userMdp);
        btnView.appendChild(btnViewTxt);
        btnDelete.appendChild(btnDeleteTxt);
        btnDelete.setAttribute("class", "btnDelete");
        btnView.setAttribute("type", "submit");
        btnBox.setAttribute("class", "btnBox");

        //Injection & organisation
        userArticle.appendChild(nameUserContainer);
        userArticle.appendChild(userLastnameContainer);
        userArticle.appendChild(userEmailContainer);
        userArticle.appendChild(userMdpContainer);
        btnBox.appendChild(btnView);
        btnBox.appendChild(btnDelete);
        userArticle.appendChild(btnBox);
        sectionUsers.appendChild(userArticle);
    });
}
getUsers ()
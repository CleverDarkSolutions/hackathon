//-----------------BACKEND---VARS----------------

let subjects = ["Angielski","UKOS","WIA"];

//----------------------------------------------

//-------------INNER--HTMLS-------------------------


// OBIEKT STRONY
class Page {
    constructor(content,id){  
        this.content = content;
        this.id = id;
    }
};

page = [];
page[0] = new Page("Witamy");
page[1] = new Page("Pierwsza",1);
page[2] = new Page("Druga",2);
page[3] = new Page("Trzecia",3);
page[4] = new Page("Cztery",4);
page[5] = new Page("Piec",5);
page[6] = new Page("Szesc",6);
//ZMIENIANIE ZAWARTOSCI NOTESU
function openPage(page) {
    mainSpace.innerHTML = page.content;
}

// DODAWANIE EVENTLISTENEROW - POTEM DO STARTU DODAC
function addListenersLeftMenu() {
    for (let i = 1; i < 6; i++) {
        let item = document.getElementById("leftMenuElement" + i);
        item.addEventListener("click", function () {
            openPage(page[i]);
        });
    }
}

// LOGOWANIE

function showLoginBox(){
    let item = document.getElementById("loginBox"); 
    let bg = document.getElementById("mainContainer");
    item.style.display = "block";
    bg.style.filter = "blur(8px)";
}

function quitLoginBox(){
    let item = document.getElementById("loginBox"); 
    let bg = document.getElementById("mainContainer");
    item.style.display = "none";
    bg.style.filter = "none";
}

function noteScreen(){
    let item = document.getElementById("groupOfItems");
    for(let i=0;i<subjects.length;i++){
        let oneSubject = "<div class='subject'>"+subjects[i]+"</div>";
        item.innerHTML += oneSubject;
    }
    item.style.display = "block";
}

//---------------ONCLICKS-------------
document.getElementById("homeButton").addEventListener("click",function(){
    openPage(page[0]);
})
document.getElementById("loginElement").addEventListener("click",function(){
    showLoginBox();
})
document.getElementById("exitButton").addEventListener("click",function(){
    quitLoginBox();
})
document.getElementById("leftMenuElement1").addEventListener("click",function(){
    noteScreen();
});

//--------------------
window.onload = function(){
    addListenersLeftMenu();
}

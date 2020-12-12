<<<<<<< HEAD
=======
//-----------------BACKEND---VARS----------------

//----------------------------------------------

//-------------INNER--HTMLS-------------------------
page1 = "<input>";


>>>>>>> parent of 80a08de... commit
// OBIEKT STRONY
class pageObj {
    constructor(content,id){  
        this.content = content;
        this.id = id;
    }
};

<<<<<<< HEAD
let page = [];
page[0] = new pageObj("Witamy",0);
page[1] = new pageObj("Pierwsza",1);
page[2] = new pageObj("Druga",2);
page[3] = new pageObj("Trzecia",3);
page[4] = new pageObj("Cztery",4);
page[5] = new pageObj("Piec",5);
page[6] = new pageObj("Szesc",6);
=======
page = [];
page[0] = new Page("Witamy");
page[1] = new Page(page1,1);
page[2] = new Page("Druga",2);
page[3] = new Page("Trzecia",3);
page[4] = new Page("Cztery",4);
page[5] = new Page("Piec",5);
page[6] = new Page("Szesc",6);
>>>>>>> parent of 80a08de... commit
//ZMIENIANIE ZAWARTOSCI NOTESU
function openPage(page) {
    mainSpace.innerHTML = page.content;
}

// DODAWANIE EVENTLISTENEROW - POTEM DO STARTU DODAC
function addListenersLeftMenu() {
    for (let i = 1; i < 7; i++) {
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

<<<<<<< HEAD
function noteScreen(){
    let item = document.getElementById("mainSpace");
    let subjects = ["Angielski","UKOS","WIA"];
    for(let i=0;i<subjects.length;i++){
        let oneSubject = "<div class='subject'>"+subjects[i]+"</div>";
        item.innerHTML += oneSubject;
    }
    item.style.display = "block";
=======
function addTask(){
 
>>>>>>> parent of 80a08de... commit
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

//--------------------
window.onload = function(){
    addListenersLeftMenu();
}

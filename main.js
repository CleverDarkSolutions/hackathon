// OBIEKT STRONY
class pageObj {
    constructor(content,id){  
        this.content = content;
        this.id = id;
    }
};

let subjects=["Angielski","WIA","UKOS"]; // to beda obiekty pozniej
let homeworks=["Zadanie1","Zadanie2","Zadanie3"];

function showNoteBlock(){
    item = document.getElementById("groupOfNotes");
    let noteContent="";
    for(let i=0;i<subjects.length;i++){
        let subj = "<div class='subject'>"+subjects[i]+"</div>";
        noteContent += subj;
    }
    document.getElementById("addNote").style.display = "block";
    item.innerHTML = noteContent;
    item.style.display = "block";
    item.style.textAlign = "left";
}

function addSubject(){
}

function showHomeworkBlock(){
    item = document.getElementById("groupOfHomeworks");
    let homeworkContent="";
    for(let i=0;i<subjects.length;i++){
        let hw = "<div class='subject'>"+homeworks[i]+"</div>";
        homeworkContent += hw;
    }
    document.getElementsByClassName("group").style.display = "none";
    item.innerHTML = homeworkContent;
    document.getElementsByClassName("groupOfHomeworks").style.display = "block";
    item.style.textAlign = "left";
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
    showNoteBlock();
})

document.getElementById("leftMenuElement2").addEventListener("click",function(){
    showHomeworkBlock();
})

//--------------------

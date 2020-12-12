
class Note {
    constructor(subject,content){ 
        this.subject = subject; 
        this.content = content;
    }
};

subjects = [];

function resetKurwa(){
    document.getElementById("groupOfNotes").style.display = "none";
    document.getElementById("groupOfHomeworks").style.display = "none";
    document.getElementById("groupOfItems").style.display = "none";
    document.getElementById("welcomeText").style.display = "none";
}

let homeworks=["Zadanie1","Zadanie2","Zadanie3"];

function showNoteBlock(){
    item = document.getElementById("presentNotes");
    item.innerHTML = "";
    resetKurwa();
    item.style.display = "block";
    let noteContent="";
    for(let i=0;i<subjects.length;i++){
        let subj = "<div class='subject'>"+subjects[i].subject+"</div>";
        noteContent += subj;
    }
    document.getElementById("groupOfNotes").style.display = "block";
    document.getElementById("addNote").style.display = "block";
    item.innerHTML += noteContent;
    
    item.style.textAlign = "left";
}


function addSubject(){
    let item1 = document.getElementById("subjectInput");
    let item2 = document.getElementById("subjectContent");
    let newNote = new Note(item1.value,item2.value)
    subjects.push(newNote);
    showNoteBlock();
    item.value = "";
}



function showHomeworkBlock(){
    item = document.getElementById("groupOfHomeworks");
    resetKurwa();
    item.style.display = "block";
    let homeworkContent="";
    for(let i=0;i<subjects.length;i++){
        let hw = "<div class='subject'>"+homeworks[i]+"</div>";
        homeworkContent += hw;
    }
    item.innerHTML = homeworkContent;
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
/*document.getElementById("homeButton").addEventListener("click",function(){
    openPage(page[0]);
})
*/
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

document.getElementById("leftMenuElement0").addEventListener("click",function(){
    resetKurwa();
    document.getElementById("welcomeText").style.display = "block";
})

document.getElementById("addButton").addEventListener("click",function(){
    addSubject();
})
//--------------------

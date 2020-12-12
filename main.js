
class Note {
    constructor(subject, content, title, id) {
        this.subject = subject;
        this.content = content;
        this.title = title;
        this.id = id;
    }
};

subjects = [];

function resetKurwa() {
    document.getElementById("groupOfNotes").style.display = "none";
    document.getElementById("groupOfHomeworks").style.display = "none";
    document.getElementById("groupOfItems").style.display = "none";
    document.getElementById("welcomeText").style.display = "none";
}

let homeworks = ["Zadanie1", "Zadanie2", "Zadanie3"];

function showNoteBlock() {
    console.log("popoga");
    item = document.getElementById("presentNotes");
    item.innerHTML = "";
    resetKurwa();
    item.style.display = "block";
    let noteContent = "";
    if (subjects.length > 0) {
        for (let i = 0; i < subjects.length; i++) {
            let mainDiv = "<div class='subject' id='subject" + subjects[i].id + "'></div>";
            let title = "<div class='subjectElement'>"+subjects[i].title+"</div>"; 
            let content = "<div class='subjectElement'>"+subjects[i].content+"</div>"; 
            let subject = "<div class='subjectElement'>"+subjects[i].subject+"</div>";
            mainDiv += title;
            mainDiv += content;
            mainDiv += subject;
            noteContent += mainDiv;
        }
    }
    else
        noteContent = "Nie ma notatek";

    item.innerHTML = noteContent;

    document.getElementById("groupOfNotes").style.display = "block";
    document.getElementById("addScene").style.display = "block";
    item.innerHTML += noteContent;

    item.style.textAlign = "left";
}

subjectID = 0;


function addSubject() {
    let item1 = document.getElementById("subjectInput");
    let item2 = document.getElementById("subjectContent");
    let item3 = document.getElementById("subjectContentTitle");
    let newNote = new Note(item1.value, item2.value, item3.value, subjectID++);
    subjects.push(newNote);
    item1.value = "";
    item2.value = "";
    item3.value = "";
    document.getElementById("noteConfig").style.display = "none";
    showNoteBlock();
}

function openAddNoteScene(){
    document.getElementById("addScene").style.display = "none";
    document.getElementById("presentNotes").style.display = "none";
    document.getElementById("noteConfig").style.display = "block";  
    console.log("chuj");
}

function openNotes(n) {
    let item = document.getElementById
}



function showHomeworkBlock() {
    item = document.getElementById("groupOfHomeworks");
    resetKurwa();
    item.style.display = "block";
    let homeworkContent = "";
    for (let i = 0; i < subjects.length; i++) {
        let hw = "<div class='subject'>" + homeworks[i] + "</div>";
        homeworkContent += hw;
    }
    item.innerHTML = homeworkContent;
    item.style.textAlign = "left";
}

// LOGOWANIE

function showLoginBox() {
    let item = document.getElementById("loginBox");
    let bg = document.getElementById("mainContainer");
    item.style.display = "block";
    bg.style.filter = "blur(8px)";
}

function quitLoginBox() {
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
document.getElementById("loginElement").addEventListener("click", function () {
    showLoginBox();
})
document.getElementById("exitButton").addEventListener("click", function () {
    quitLoginBox();
})

document.getElementById("leftMenuElement1").addEventListener("click", function () {
    showNoteBlock();
})

document.getElementById("leftMenuElement2").addEventListener("click", function () {
    showHomeworkBlock();
})

document.getElementById("leftMenuElement0").addEventListener("click", function () {
    resetKurwa();
    document.getElementById("welcomeText").style.display = "block";
})

document.getElementById("addButton").addEventListener("click", function () {
    addSubject();
})

document.getElementById("addScene").addEventListener("click",function(){
    openAddNoteScene();
})

document.querySelectorAll('.leftMenuElement').forEach(function(item){
    item.addEventListener("click",function(){
        document.getElementById("noteConfig").style.display = "none";
    })
})
//--------------------

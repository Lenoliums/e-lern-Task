function Lesson(name, time, contents) {
    return { name, time, contents }
}

function Content(name, type, time) {
    return {name, type, time}
}

const Lessons = [
    Lesson(
        'Morbi ligula velit', 
        '3 hours', 
        [
            Content('Introduction to the course', 'video', '15:32')
        ]
    ),
    Lesson(
        'Phasellus eros enim', 
        '9 hours', 
        [
            Content('Educational video based on topic', 'video', '30:46'),
            Content('Educational article based on topic', 'article', '2 hours'),
            Content('Educational quiz based on topic', 'quiz', '')
        ]
    ),
    Lesson(
        'Duis vitae euismod quam', 
        '8.5 hours', 
        [
            Content('Educational video based on topic', 'video', '1:07:53'),
            Content('Educational video based on topic', 'video', '45:21'),
            Content('Educational article based on topic', 'article', '02:38:0'),
            Content('Educational quiz based on topic', 'quiz', '')
        ]
    ),
    Lesson(
        'Ullamcorper mollis nisl', 
        '5.5 hours', 
        [
            Content('Educational video based on topic', 'video', '15:12'),
            Content('Educational article based on topic', 'article', '1:32:0'),
            Content('Educational quiz based on topic', 'quiz', '')
        ]
    ),
    Lesson(
        'Lorem ipsum dolor sit amet', 
        '6 hours', 
        [
            Content('Final test based on topic', 'test', '')
        ]
    )
    
]

const courseProgram = document.getElementById('courseProgram')
const icons = {
    video: "img\\play icon.svg",
    article: "img\\book.svg",
    quiz: "img\\question icon.svg",
    test: "img\\certificate.svg"
}
for(let lesson of Lessons){
    let conteiner = document.createElement('div');
    conteiner.setAttribute('close','');
    conteiner.id=lesson.name
    let lessonConteiner = document.createElement('div');
    lessonConteiner.classList.add('lesson', 'flex_between');
    let name = document.createElement('div');
    name.classList.add('name');
    let img = document.createElement('img');
    img.src = "img\\arrow.svg";
    img.classList.add('arrow');
    let title = document.createElement('h4');
    title.textContent=lesson.name;
    title.style.marginBottom='0'
    name.appendChild(img);
    name.appendChild(title);
    name.onclick=()=>openCloseLesson(conteiner);
    let time=document.createElement('h6');
    time.textContent=lesson.time;
    time.classList.add('headTextColor')
    lessonConteiner.appendChild(name);
    lessonConteiner.appendChild(time);
    let contents=document.createElement('div');
    contents.classList.add('contents');
    for(let content of lesson.contents){
        let contentConteiner = document.createElement('div');
        contentConteiner.classList.add("content", "flex_between");
        let name = document.createElement('div');
        name.classList.add('name');
        let img = document.createElement('img');
        img.src = icons[content.type];
        img.classList.add('contentIcon');
        let title = document.createElement('h3');
        title.textContent=content.name;
        name.appendChild(img);
        name.appendChild(title);
        let time=document.createElement('h3');
        time.textContent=content.time;
        contentConteiner.appendChild(name);
        contentConteiner.appendChild(time);
        contents.appendChild(contentConteiner);
    }
    conteiner.appendChild(lessonConteiner);
    conteiner.appendChild(contents);
    courseProgram.appendChild(conteiner);
    if(localStorage[lesson.name]=='open')
        conteiner.removeAttribute('close') 
    
}

function openCloseLesson(conteiner){
    conteiner.hasAttribute('close') ? 
        (conteiner.removeAttribute('close'), localStorage[conteiner.id]='open') :
        (conteiner.setAttribute('close',''), localStorage[conteiner.id]='close');
}
function closeLessons(){
    for(let child of courseProgram.children){
        child.setAttribute('close', '');
        localStorage[child.id]='close';
    }
}

const Reviews=[
    {
        name:"Name",
        surname:"Surname",
        text:"Morbi ligula velit, interdum non eros eu, semper aliquet ligula.",
        estimation: '5'
    },
    {
        name:"Name",
        surname:"Surname",
        text:"Morbi ligula velit, interdum non eros eu, semper aliquet ligula.",
        estimation: '5'
    },
    {
        name:"Name",
        surname:"Surname",
        text:"Morbi ligula velit, interdum non eros eu, semper aliquet ligula.",
        estimation: '5'
    },
    {
        name:"Name",
        surname:"Surname",
        text:"Morbi ligula velit, interdum non eros eu, semper aliquet ligula.",
        estimation: '5'
    },
    {
        name:"Name",
        surname:"Surname",
        text:"Morbi ligula velit, interdum non eros eu, semper aliquet ligula.",
        estimation: '5'
    }
];
const ratingIcon={
    '5':"img\\rating2.svg",
    '4':"img\\rating1.svg",
}

let i=0;
const reviewsElement = document.getElementById('reviews');
reviewsElement.innerHTML=`<img id="left" src="img\\arrow.svg" alt="arrow">`
for (review of Reviews){
    if(i==3){
        break;
    }
    reviewsElement.innerHTML+=`<div class="review">
        <div class="flex_between reviewName">
            <div class="flex_between">
                <div class="profilePicture"><div>${review.name[0]}${review.surname[0]}</div></div>
                <span>${review.name} ${review.surname}</span>
            </div>
            <img src=${ratingIcon[review.estimation]}>
        </div>
        <p class="contentText">${review.text}</p>
    </div>`
    i++;
}
reviewsElement.innerHTML+=`<img id="right" src="img\\arrow.svg" alt="arrow">`
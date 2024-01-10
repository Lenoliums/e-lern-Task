function Lesson(name, time, contents) {
    return { name, time, contents }
}

function Content(name, type, time) {
    return (name, type, time)
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
    let lessonConteiner = document.createElement('div');
    lessonConteiner.classList.add('lesson', 'flex_between');
    let name = document.createElement('div');
    name.classList.add('name');
    let img = document.createElement('img');
    img.src = "img\\arrow.svg";
    let title = document.createElement('h4');
    title.textContent=lesson.name;
    name.appendChild(img);
    name.appendChild(title);
    let time=document.createElement('h6');
    time.textContent=lesson.time;
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
    lessonConteiner.appendChild(contents);
    conteiner.appendChild(lessonConteiner);
    courseProgram.appendChild(conteiner);
}
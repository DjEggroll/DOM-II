import './less/index.less'

// Your code goes here!

const links = document.querySelectorAll('.nav-link');


links.forEach(link => {
    link.addEventListener('mouseover', function(){
        link.style.color = "red";
    });
});

links.forEach(link => {
    link.addEventListener('mouseout', function(){
        link.style.color = "black";
    });
});

links.forEach(link => {
    link.addEventListener('click', function(){
        event.preventDefault();
        alert("This link is not currently functional!");
    });
});


document.addEventListener('keydown', function(evt){
    if(evt.key === 'b'){
        document.body.style.backgroundColor = "skyblue";
    }else if(evt.key === 'p'){
        document.body.style.backgroundColor = "pink";
    }else{
        document.body.style.backgroundColor = "white";
    }
});


const images = document.querySelectorAll("img");

images.forEach(image => {
    image.addEventListener("click", function(){
        image.style.width = "50%";
        alert("Oh no! It must be cold out");
    });
});

const paragraphs = document.querySelectorAll('p');

paragraphs.forEach(p => {
    p.addEventListener('mouseover', function(){
        p.style.fontWeight = "bold";
    });
});

paragraphs.forEach(p => {
    p.addEventListener('mouseout', function(){
        p.style.fontWeight = "normal";
    });
});

document.body.addEventListener('dblclick', function(){
        images.forEach(image => {
            image.style.width = "100%";
    });
});

document.addEventListener('scroll', function(){
    console.log('Scroll Wheel Active');
});

window.addEventListener('resize', function(){
    console.log('PLEASE STOP I AM CLAUSTROPHOBIC!!!!')
});
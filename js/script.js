const images = [
    {
        image: "img/01.webp",
        title: "Marvel's Spiderman Miles Morale",
        text: "Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.",
    }, {
        image: "img/02.webp",
        title: "Ratchet & Clank: Rift Apart",
        text: "Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.",
    }, {
        image: "img/03.webp",
        title: "Fortnite",
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: "img/04.webp",
        title: "Stray",
        text: "Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city",
    }, {
        image: "img/05.webp",
        title: "Marvel's Avengers",
        text: "Marvel\"s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    }
];

const imgElem   = document.querySelector(".items");
const thumbElem = document.querySelector(".thumb")
let innerStr    = "";
let thumbStr    = "";

images.forEach((curImage) => {
    return innerStr += `
            <div class = "item-group">
                <img class="item" src= ${curImage.image} alt="">
                <div class = "item-text">
                    <h3 class = "img-title">${curImage.title}</h3>
                    <p class = "img-text">${curImage.text}</p>
                </div> 
            </div>
                         
    `
})

images.forEach((curThumb) => {
    return thumbStr += `
                    <img class="thumbs" src= ${curThumb.image} alt="">
    `
})

imgElem.innerHTML += innerStr
thumbElem.innerHTML = thumbStr

const itemElem   = document.querySelectorAll(".item-group");
const thumbsElem = document.querySelectorAll(".thumbs");
let curItemIndex = 0;
showImages();

document.querySelector(".next").addEventListener("click", showNext);
document.querySelector(".prev").addEventListener("click", showPrev);




/******************************/
//FUNCTION

function hideImages() {
    itemElem[curItemIndex].classList.remove("active");
    thumbsElem[curItemIndex].classList.remove("selected")
}

function showImages() {
    itemElem[curItemIndex].classList.add("active");
    thumbsElem[curItemIndex].classList.add("selected")
}

function showNext(){
    if(curItemIndex < itemElem.length - 1){
        hideImages();
        curItemIndex++;
        showImages();

    } else if (curItemIndex === itemElem.length - 1){
        hideImages();
        curItemIndex = 0;
        showImages();
    }
}

function showPrev(){
    if(curItemIndex > 0){
        hideImages();
        curItemIndex--;
        showImages();

    } else if (curItemIndex === 0){
        hideImages();
        curItemIndex = itemElem.length - 1;
        showImages();
    }
}
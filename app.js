let heroImage = document.getElementById("hero");
let contentH1 = document.getElementById("content-h1");
let contentP = document.getElementById("content-p");
let scrollLeft = document.getElementById("scroll-image-left");
let scrollRight = document.getElementById("scroll-image-right");
let mobileView = 1;
let heroImageMobile = ["./images/mobile-image-hero-1.jpg", "./images/mobile-image-hero-2.jpg", "./images/mobile-image-hero-3.jpg"];
let heroImageDesktop = ["./images/desktop-image-hero-1.jpg", "./images/desktop-image-hero-2.jpg", "./images/desktop-image-hero-3.jpg"]
let hamburgerBar = document.getElementById("hamburger-bar");
let navList = document.getElementById("nav-list");
let closeNav = document.getElementById("close-nav");

let contentOption = 0;
let contentHeadings = ["Discover innovative ways to decorate", "We are available all across the globe", "Manufactured with the best materials"];
let contentParagraphs = ["We provide unmatched quality, comfort, and style for porperty ovners across the country. Our experts combine form and function in bringing you vision to life. Crate a room in your own style with our collection and make you property a reflection of you and what you love.",
"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
"Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office."];

let screenDesktop = window.matchMedia("(min-width: 1000px)");
screenDesktop.addListener(handleDesktopChange);
let screenMobile = window.matchMedia("(max-width: 999px)");
screenMobile.addListener(handleMobileChange);

let navListItems = navList.children;
console.log(navListItems);
hamburgerBar.addEventListener('click', toggleNavList);
closeNav.addEventListener('click', toggleNavList);

handleDesktopChange(screenDesktop);
handleMobileChange(screenMobile);
changeContent();
changeHeroImage();
checkNav();

function toggleNavList(){
    navListItems[0].classList.toggle("hide");
    navListItems[1].classList.toggle("hide");
    navListItems[2].classList.toggle("hide");
    navListItems[3].classList.toggle("hide");
    navListItems[4].classList.toggle("hide");
}

function checkNav(){
    if(navListItems[1].classList.contains("hide") && mobileView == 0){
        return toggleNavList();
    }
    if(!navListItems[1].classList.contains("hide") && mobileView == 1){
        return toggleNavList();
    }
}

function handleDesktopChange(e){
    if(e.matches){
        mobileView = 0;
        changeHeroImage();
        checkNav();
    }
}

function handleMobileChange(e){
    if(e.matches){
        mobileView = 1;
        changeHeroImage();
        checkNav();
    }
}

function changeContent(){
    contentH1.innerHTML = contentHeadings[contentOption];
    contentP.innerHTML = contentParagraphs[contentOption];
}

function changeHeroImage() {
    if(mobileView == 0){
        heroImage.style.backgroundImage = "url(" + heroImageDesktop[contentOption] + ")";
    } else {
        heroImage.style.backgroundImage = "url(" + heroImageMobile[contentOption] + ")";
    }
}

scrollLeft.addEventListener("click", scrollOptionLeft);
scrollRight.addEventListener("click", scrollOptionRight);

function scrollOptionLeft() {
    if(contentOption == 0){
        contentOption = contentHeadings.length - 1;
    } else {
        contentOption -= 1;
    }
    changeContent();
    changeHeroImage();
}

function scrollOptionRight() {
    if(contentOption == contentHeadings.length - 1){
        contentOption = 0;
    } else {
        contentOption += 1;
    }
    changeContent();
    changeHeroImage();
}

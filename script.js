function ChangeIcon() {
    if (document.querySelector(".fa-bars")) {
        //.fa-bars does not exits then document.querySelector(".fa-bars") return null then not execute this block
        document.querySelector(".fa-bars").classList.replace("fa-bars", "fa-x")
    }
    else {
        document.querySelector(".fa-x").classList.replace("fa-x", "fa-bars")
    }
}

function changeModeIcon() {
    if (document.querySelector(".fa-moon")) {
        //.fa-bars does not exits then document.querySelector(".fa-bars") return null then not execute this block
        document.querySelector(".fa-moon").classList.replace("fa-moon", "fa-sun");
        document.documentElement.style.setProperty('--bgc-dark-main', '#f3f4fd');
        document.documentElement.style.setProperty('--bgc-dark-asid', '#fdfbff');
        document.documentElement.style.setProperty('--text-color', '#1d1d1d');
    }
    else {
        document.querySelector(".fa-sun").classList.replace("fa-sun", "fa-moon");
        document.documentElement.style.setProperty('--bgc-dark-main', '#151515');
        document.documentElement.style.setProperty('--bgc-dark-asid', '#1d1d1d');
        document.documentElement.style.setProperty('--text-color', '#fff');

    }

}
/*=======================Navbar active ========================*/

// const navLinks = document.querySelectorAll('.nav-link');


// function setActiveLink() {
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//     });

//     this.classList.add('active');
//     console.log(this.classList[0]);
//     if (this.classList[0] === "home") {
//         console.log("This is home tag");
//     }


//     // console.log(this.classList[1]);
//     // console.log(this.classList[2]);


// }

// navLinks.forEach(link => {
//     link.addEventListener('click', setActiveLink);
// });

const navLinks = document.querySelectorAll('.nav-link');
const page = document.querySelectorAll('.page');

function setActiveLink() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    this.classList.add('active');

    console.log(this.classList);

    // <===============for page sliding==============>
    for (let i = 0; i < page.length; i++) {

        if (this.classList[0] === "home") {
            slidePage(0);
        }
        else if (this.classList[0] === "about") {
            slidePage(1);
        } else if (this.classList[0] === "project") {
            slidePage(2);
        } else if (this.classList[0] === "services") {
            slidePage(3);
        } else {
            slidePage(4);
        }
    }
}

navLinks.forEach(link => {
    link.addEventListener('click', setActiveLink);
});

/*=======================Slider========================*/
const slides = document.querySelectorAll(".page");
var counter = 0;
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

const slidePage = (pageNumber) => {
    slides.forEach((slide) => {
        // slide.style.transform = `translateX(-${counter * 100}%)`
        slide.style.transform = `translateX(-${pageNumber * 100}%)`

    })
}


/*=======================color theam ========================*/
const colorTheam = document.getElementById('colorTheam');

colorTheam.addEventListener('click', function () {
    const colors = document.querySelector(".colors");
    if (colors.style.display === "none") {
    }
    if (colors.style.display === "none") {
        colors.style.display = "flex";
    }
    else {
        colors.style.display = "none"
    }
});


function colorsBlockNone() {
    const colors = document.querySelector(".colors");
    colors.style.display = "none"
}
function redColor() {
    document.documentElement.style.setProperty('--secondry-color', '#ff0000');
    colorsBlockNone();
}

function orangeColor() {
    document.documentElement.style.setProperty('--secondry-color', '#f66b04');
    colorsBlockNone();
}
function darkPinkColor() {
    document.documentElement.style.setProperty('--secondry-color', '#ff0084');
    colorsBlockNone();

}
function greenColor() {
    document.documentElement.style.setProperty('--secondry-color', '#2ddb2d');
    colorsBlockNone();
}
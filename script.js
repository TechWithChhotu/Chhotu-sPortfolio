function ChangeIcon() {
    if (document.querySelector(".fa-bars")) {
        //.fa-bars does not exits then document.querySelector(".fa-bars") return null then not execute this block
        document.querySelector(".fa-bars").classList.replace("fa-bars", "fa-x")
    }
    else {
        document.querySelector(".fa-x").classList.replace("fa-x", "fa-bars")
    }
}

/*=======================Type Writer Effect========================*/



let Skills = ["Android Dev.", "DesApp Dev.", "SEO", "Programming"]
const typeWriter = document.querySelector("#typeWrite");

function typeWriteEffects() {
    let i = 0, j = 0, k = 0;

    let delay = 5000;//initial delay 1s

    const WordIterator = setInterval(() => {
        let string = Skills[i];

        // console.log(string);

        typeCharacter(string);
        typeWriter.innerHTML = "";

        i === 3 ? i = 0 : i++;
    }, delay);

}

typeWriteEffects();


function typeCharacter(string) {
    let i = 0;
    const characterTyper = setInterval(() => {
        console.log(string[i]);
        typeWriter.innerHTML += string[i];
        i++;
        if (i === string.length) {
            i = 0;
            clearInterval(characterTyper);
        }
    }, 175)

}


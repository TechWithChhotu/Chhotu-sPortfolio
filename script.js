function ChangeIcon() {
    if (document.querySelector(".fa-bars")) {
        document.querySelector(".fa-bars").classList.replace("fa-bars", "fa-x")
    }
    else {
        document.querySelector(".fa-x").classList.replace("fa-x", "fa-bars")
    }
}
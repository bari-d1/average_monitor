let physics = document.querySelector('.average_physics')
console.log(physics);
let chemistry = document.querySelector('.average_chemistry')
console.log(chemistry);
let maths = document.querySelector('.average_maths')
console.log(maths);

// let h = window.outerHeight;
let classes = document.querySelector('.classes')

let physics_score = [];
let chemistry_score = [];
let maths_score = [];
let popup = document.getElementById("myPopup");


let physics_ok = () => {
    popup.classList.remove("show");
}
let w = window.innerWidth;
let add_to_physics = () => {
    popup.classList.add("show");
    if (w < 400) {
        popup.style.width = '440%';
        classes.style.marginTop = '50%';
    } else {
        popup.style.width = '300%';
        classes.style.marginTop = '20%';
    }
}
let resize = () => {
    if (w < 400) {
        popup.style.width = '420%';
        classes.style.marginTop = '50%';
    } else {
        popup.style.width = '200%';
        classes.style.marginTop = '20%';
    }
}
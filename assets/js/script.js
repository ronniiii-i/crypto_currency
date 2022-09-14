const burger = document.querySelector('.burger');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');
const nav2 = document.querySelector('.nav--links2');

const currencies = document.querySelectorAll('.currencies .flex--container .flex-card');
const currButton = document.querySelectorAll('.card_click .toggle-text');



burger.addEventListener('click', () => {
    burger.classList.toggle('fixed');
    line1.classList.toggle('rot1');
    line2.classList.toggle('disappear');
    line3.classList.toggle('rot2');
    nav2.classList.toggle('toggle');
})

for (let i = 0; i < currencies.length; i++) {
    currencies[i].addEventListener('click', () => {
        for (var j=0; j < currencies.length; j++) {
            if(j!==i) {
                currencies[j].classList.remove("bgviolet");
                currButton[j].classList.remove("show");
            }
        }
        currencies[i].classList.add('bgviolet');
        currButton[i].classList.add("show");
    })
}

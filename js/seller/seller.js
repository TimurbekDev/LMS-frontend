const navOptions = document.querySelectorAll('.nav-option');
const tabContents = document.querySelectorAll('.tab-content')
tabContents.forEach(content => content.style.display = 'none');
document.getElementById('tab1').style.display = 'flex';

navOptions.forEach(option => {
    option.addEventListener('click', () => {

        navOptions.forEach((opt)=>{
            opt.classList.remove('active')
        });

        tabContents.forEach(content => content.style.display = 'none');

        option.classList.add('active');

        const tabId = option.getAttribute('data-tab');
        document.getElementById(tabId).style.display = 'flex';
    });
});


let menuicn = document.querySelector(".menu-icn");
let nav = document.querySelector(".aside-container");

menuicn.addEventListener("click", () => {
    nav.classList.toggle("nav-close");
})

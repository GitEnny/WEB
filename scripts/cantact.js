// Last Modified
let currentDate = document.lastModified;
document.querySelector('#lastModified').textContent = currentDate;

// Copyright Date
let date = new Date();
let year = date.getFullYear();
document.querySelector('#copyrightYear').innerHTML = year;

// Today's Date
const dateField = document.querySelector(".date");
const fullDate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date);
dateField.innerHTML = fullDate;

// Hamburger Menu

let hamburger = document.querySelector('#hamburger');
let nav = document.querySelector('header');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('responsive');

});

let day = date.getDay();

if (day == 1 || day == 2) {
    let banner = document.querySelector('.banner');
    banner.style.display = 'block';

    document.querySelector(".banner-button").addEventListener("click", function () {
        banner.style.display = 'none';
      });
} else {
    let banner = document.querySelector('.banner');
    banner.style.display = 'none';
}
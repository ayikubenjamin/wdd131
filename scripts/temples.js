const menuBtn = document.querySelector("#menu");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    navList.classList.toggle("show");
})

const currentyear = new Date().getFullYear();
const year = document.querySelector("#year");
year.textContent = `© ${currentyear}🌴Benjamin Ayiku🌴Ghana`;
const today = new Date()
const datetime = today.toLocaleString("en-Us")
const modified = document.querySelector("#modified")
modified.innerHTML = `Last Modified ${datetime}`;
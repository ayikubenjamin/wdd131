const currentyear = new Date().getFullYear();
const year = document.querySelector("#year");
year.innerHTML = `© ${currentyear}🌴Benjamin Ayiku🌴Ghana`;
const today = new Date()
const datetime = today.toLocaleString("en-Us")
const modified = document.querySelector("#modified")
modified.innerHTML = `Last Modified ${datetime}`;




const copyrightYear = document.querySelector("#currentyear")
const today = new Date()
copyrightYear.innerHTML = today.getFullYear();

const datemodified = document.querySelector("#lastmodified")
const datetime = today.toLocaleString("en-Us")
datemodified.innerHTML = datetime
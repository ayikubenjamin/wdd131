const copyright = document.querySelector('#cyear')
const today = new Date()
copyright.textContent = `© ${today.getFullYear()} Benjamin`
const lastmodified = document.querySelector('#lm')
lastmodified.textContent = `Last Modified : ${today.toLocaleString('en-Us')}`
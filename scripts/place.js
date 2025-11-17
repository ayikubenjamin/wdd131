const copyrightYear = document.querySelector('#copyright')
const  todaysDate = new Date()
copyrightYear.textContent = todaysDate.getFullYear()
const lastModified = document.querySelector('#lastmodified')
lastModified.textContent = `Last modified : ${todaysDate.toLocaleString("en-Us")}`

const temp = 10 
const wind = 5
const temperature = document.querySelector('#Temperature')
const windSpeed = document.querySelector('#wind')
temperature.textContent = `Temperature : ${temp} ℃`
windSpeed.textContent = `Wind Speed: ${wind} km/h`


function calculateWindChill(temp, wind){
    if (temp <= 10 && wind > 4.8){
        const result = 13.12 + 0.6215 * temp - 11.37 * (wind ** 0.16) + 0.3965 * temp * (wind ** 0.16)
        return Math.round(result * 10)/10
    } else {
        console.log('N/A')
    }
}

const windchill = document.querySelector('#windchill')
windchill.textContent = `Wind Chill :${calculateWindChill(temp, wind)} ℃`

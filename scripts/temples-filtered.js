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

// temple arrays

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Ghana Accra",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11" ,
    area:  17500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/400x250/accra-ghana-temple-detail-249022-2400x1200.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake city, Utah, United States",
    dedicated: "1983, December, 2",
    area: 382207,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10 -12",
    area: 41010,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  }
];


function displaytemple(){
    const templesContainer = document.querySelector('#temples-container')
    templesContainer.innerHTML = ""

    for (const temple of temples){
        const templeCard = document.createElement("div")
        templeCard.classList.add("temple-card")

        const name = document.createElement("h2")
        name.textContent = `${temple.templeName}`

        const location = document.createElement("p")
        location.textContent = `Location : ${temple.location}`

        const dedicated = document.createElement("p")
        dedicated.textContent = `Dedicated : ${temple.dedicated}`

        const area = document.createElement("p")
        area.textContent = `Area : ${temple.area} sqr ft.`

        const img = document.createElement("img")
        img.src = temple.imageUrl
        img.alt = `${temple.templeName} Temple`
        img.loading = "lazy"

        templeCard.appendChild(name)
        templeCard.appendChild(location)
        templeCard.appendChild(dedicated)
        templeCard.appendChild(area)
        templeCard.appendChild(img)
        templesContainer.appendChild(templeCard)
    }
}



displaytemple()

function old(){
    const templesContainer = document.querySelector('#temples-container')
    templesContainer.innerHTML = ""
    
    for (const temple of temples){
        if (Number(temple.dedicated.substring(0, 4)) < 1900){
            const templeCard = document.createElement("div")
            templeCard.classList.add("temple-card")

            const name = document.createElement("h2")
            name.textContent = `${temple.templeName}`

            const location = document.createElement("p")
            location.textContent = `Location : ${temple.location}`

            const dedicated = document.createElement("p")
            dedicated.textContent = `Dedicated : ${temple.dedicated}`

            const area = document.createElement("p")
            area.textContent = `Area : ${temple.area} sqr ft.`

            const img = document.createElement("img")
            img.src = temple.imageUrl
            img.alt = `${temple.templeName} Temple`
            img.loading = "lazy"

            templeCard.appendChild(name)
            templeCard.appendChild(location)
            templeCard.appendChild(dedicated)
            templeCard.appendChild(area)
            templeCard.appendChild(img)
            templesContainer.appendChild(templeCard)
        }

    }
}

const oldtemples =  document.querySelector("#old-temples")
oldtemples.addEventListener("click", (Event) =>{
    Event.preventDefault()
    old()
})



function newTemples(){
    const templesContainer = document.querySelector('#temples-container')
    templesContainer.innerHTML = ""
    for (const temple of temples){
        if (Number(temple.dedicated.substring(0, 4)) > 2000){
            const templeCard = document.createElement("div")
            templeCard.classList.add("temple-card")

            const name = document.createElement("h2")
            name.textContent = `${temple.templeName}`

            const location = document.createElement("p")
            location.textContent = `Location : ${temple.location}`

            const dedicated = document.createElement("p")
            dedicated.textContent = `Dedicated : ${temple.dedicated}`

            const area = document.createElement("p")
            area.textContent = `Area : ${temple.area} sqr ft.`

            const img = document.createElement("img")
            img.src = temple.imageUrl
            img.alt = `${temple.templeName} Temple`
            img.loading = "lazy"

            templeCard.appendChild(name)
            templeCard.appendChild(location)
            templeCard.appendChild(dedicated)
            templeCard.appendChild(area)
            templeCard.appendChild(img)
            templesContainer.appendChild(templeCard)
        }

    }
}

document.querySelector("#new-temples").addEventListener("click", (Event) =>{
    Event.preventDefault()
    newTemples()
})



function large(){
    const templesContainer = document.querySelector('#temples-container')
    templesContainer.innerHTML = ""
    for (const temple of temples){
        if (temple.area > 90000){
            const templeCard = document.createElement("div")
            templeCard.classList.add("temple-card")

            const name = document.createElement("h2")
            name.textContent = `${temple.templeName}`

            const location = document.createElement("p")
            location.textContent = `Location : ${temple.location}`

            const dedicated = document.createElement("p")
            dedicated.textContent = `Dedicated : ${temple.dedicated}`

            const area = document.createElement("p")
            area.textContent = `Area : ${temple.area} sqr ft.`

            const img = document.createElement("img")
            img.src = temple.imageUrl
            img.alt = `${temple.templeName} Temple`
            img.loading = "lazy"

            templeCard.appendChild(name)
            templeCard.appendChild(location)
            templeCard.appendChild(dedicated)
            templeCard.appendChild(area)
            templeCard.appendChild(img)
            templesContainer.appendChild(templeCard)
        }

    }
}


document.querySelector("#large").addEventListener("click", (Event) =>{
    Event.preventDefault()
    large()
})


function small(){
    const templesContainer = document.querySelector('#temples-container')
    templesContainer.innerHTML = ""
    for (const temple of temples){
        if (temple.area < 10000){
            const templeCard = document.createElement("div")
            templeCard.classList.add("temple-card")

            const name = document.createElement("h2")
            name.textContent = `${temple.templeName}`

            const location = document.createElement("p")
            location.textContent = `Location : ${temple.location}`

            const dedicated = document.createElement("p")
            dedicated.textContent = `Dedicated : ${temple.dedicated}`

            const area = document.createElement("p")
            area.textContent = `Area : ${temple.area} sqr ft.`

            const img = document.createElement("img")
            img.src = temple.imageUrl
            img.alt = `${temple.templeName} Temple`
            img.loading = "lazy"

            templeCard.appendChild(name)
            templeCard.appendChild(location)
            templeCard.appendChild(dedicated)
            templeCard.appendChild(area)
            templeCard.appendChild(img)
            templesContainer.appendChild(templeCard)
        }

    }
}


document.querySelector("#small").addEventListener("click", (Event) =>{
    Event.preventDefault()
    small()
})


document.querySelector("#home").addEventListener("click", (Event) =>{
    Event.preventDefault()
    displaytemple()
})


    
    


const books =[
    {
    booktitle: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Fiction",
    yearpublished: "1960",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/14817209-M.jpg"
  },
  {
    booktitle: "1984",
    author: "George Orwell",
    category: "Fiction",
    yearpublished: "1949",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/12693610-L.jpg"
  },
  {
    booktitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Fiction",
    yearpublished: "1925",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/12364437-L.jpg"
  },
  {
    booktitle: "Me Before You",
    author: "Jojo Meyers",
    category: "Fiction",
    yearpublished: "2014",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/15089748-M.jpg"
  },
  {
    booktitle: "It Ends With Us",
    author: "Collen Hoover",
    category: "Fiction",
    yearpublished: "2016",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/15123232-L.jpg"
  },
  {
    booktitle: "Daughter of the Pirate King",
    author: "Tricia Levenseller",
    category: "Fiction",
    yearpublished: "2017",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/14400283-M.jpg"
  },
  {
    booktitle: "The Atlas Six",
    author: "Olivie Blake",
    category: "Fiction",
    yearpublished: "2020",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/15133387-M.jpg"
  },
  {
    booktitle: "Reformatory",
    author: "Tananarive Due",
    category: "Fiction",
    yearpublished: "2023",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/14546667-M.jpg"
  },
  {
    booktitle: "The Nightingale",
    author: "Kristin Hannah",
    category: "Fiction",
    yearpublished: "2015",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/15090833-M.jpg"
  },
  {
    booktitle: "All the Light We Cannot See",
    author: "Antony Doerr",
    category: "Fiction",
    yearpublished: "2014",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/14559676-M.jpg"
  },
  {
    booktitle: "Spare",
    author: "Prince Harry, Duke of Sussex",
    category: "Non-Fiction",
    yearpublished: "2023",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/14630117-M.jpg"
  },
  {
    booktitle: "A Promised Land",
    author: "Barack Obama",
    category: "Non-Fiction",
    yearpublished: "2020",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/10601093-M.jpg"
  },
  {
    booktitle: "Finding Me",
    author: "Viola Davis",
    category: "Non-Fiction",
    yearpublished: "2022",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/12881449-M.jpg"
  },
  {
    booktitle: "The Mountain Is You",
    author: "Brianna Wiest",
    category: "Non-Fiction",
    yearpublished: "2020",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/14832682-M.jpg"
  },
  {
    booktitle: "Why Nations Fail",
    author: "Daron Acemoglu & James Robinson",
    category: "Non-Fiction",
    yearpublished: "2012",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/7150615-M.jpg"
  },
  {
    booktitle: "Born a Crime: and Other Stories",
    author: "Trevor Noah",
    category: "Non-Fiction",
    yearpublished: "2016",
    bookcoverimageurl: "https://covers.openlibrary.org/b/id/12063864-M.jpg"
  }
]


const latest = books.filter(book => book.yearpublished === '2023' || book.yearpublished === '2022')

const selling = books.filter(book => book.category === 'Fiction' && (Number(book.yearpublished) >= 2015) &&  Number(book.yearpublished) <= 2017)

const latestAddition = document.querySelector("#latestAddition")
const heading = document.createElement('h3')
heading.innerHTML = `Latest Additions`
latestAddition.appendChild(heading)

latest.forEach(book => {
    const bookdiv = document.createElement('div')
    bookdiv.classList.add('bookcard')

    bookdiv.innerHTML = `<img src="${book.bookcoverimageurl}"><br>
                        ${book.booktitle} - ${book.author}`                 
    latestAddition.appendChild(bookdiv)
})

const bestselling = document.querySelector("#bestselling")
const heading1 = document.createElement('h3')
heading1.innerHTML = `Best Selling`
bestselling.appendChild(heading1)

selling.forEach(book => {
  const bookdiv = document.createElement('div')
  bookdiv.classList.add('bookcard')

  bookdiv.innerHTML = `<img src="${book.bookcoverimageurl}"><br>
                        ${book.booktitle} - ${book.author}`

  bestselling.appendChild(bookdiv)
  
})

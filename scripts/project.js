const books = [
  {
    booktitle: "To Kill a Mockingbird",
    author: "Harper Lee",
    category: "Classic Fiction",
    yearpublished: "1960",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8228691-L.jpg"
  },
  {
    booktitle: "1984",
    author: "George Orwell",
    category: "Dystopian",
    yearpublished: "1949",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/7222246-L.jpg"
  },
  {
    booktitle: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic Fiction",
    yearpublished: "1925",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/7352162-L.jpg"
  },
  {
    booktitle: "Pride and Prejudice",
    author: "Jane Austen",
    category: "Romance",
    yearpublished: "1813",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
  },
  {
    booktitle: "Moby-Dick",
    author: "Herman Melville",
    category: "Adventure",
    yearpublished: "1851",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/7222276-L.jpg"
  },
  {
    booktitle: "The Catcher in the Rye",
    author: "J.D. Salinger",
    category: "Coming-of-Age",
    yearpublished: "1951",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8231856-L.jpg"
  },
  {
    booktitle: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    yearpublished: "1937",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8108694-L.jpg"
  },
  {
    booktitle: "Fahrenheit 451",
    author: "Ray Bradbury",
    category: "Science Fiction",
    yearpublished: "1953",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/9250856-L.jpg"
  },
  {
    booktitle: "Jane Eyre",
    author: "Charlotte Brontë",
    category: "Gothic Fiction",
    yearpublished: "1847",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8225261-L.jpg"
  },
  {
    booktitle: "Animal Farm",
    author: "George Orwell",
    category: "Political Satire",
    yearpublished: "1945",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8771661-L.jpg"
  },
  {
    booktitle: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    yearpublished: "1954",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8059251-L.jpg"
  },
  {
    booktitle: "Brave New World",
    author: "Aldous Huxley",
    category: "Dystopian",
    yearpublished: "1932",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8771210-L.jpg"
  },
  {
    booktitle: "The Alchemist",
    author: "Paulo Coelho",
    category: "Philosophical Fiction",
    yearpublished: "1988",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8235116-L.jpg"
  },
  {
    booktitle: "The Chronicles of Narnia",
    author: "C.S. Lewis",
    category: "Fantasy",
    yearpublished: "1950",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8751940-L.jpg"
  },
  {
    booktitle: "The Kite Runner",
    author: "Khaled Hosseini",
    category: "Drama",
    yearpublished: "2003",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8228694-L.jpg"
  },
  {
    booktitle: "The Da Vinci Code",
    author: "Dan Brown",
    category: "Thriller",
    yearpublished: "2003",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/240726-L.jpg"
  },
  {
    booktitle: "The Hunger Games",
    author: "Suzanne Collins",
    category: "Dystopian",
    yearpublished: "2008",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/8228695-L.jpg"
  },
  {
    booktitle: "Harry Potter and the Sorcerer’s Stone",
    author: "J.K. Rowling",
    category: "Fantasy",
    yearpublished: "1997",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/7984916-L.jpg"
  },
  {
    booktitle: "The Fault in Our Stars",
    author: "John Green",
    category: "Young Adult",
    yearpublished: "2012",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/7222249-L.jpg"
  },
  {
    booktitle: "Becoming",
    author: "Michelle Obama",
    category: "Biography",
    yearpublished: "2018",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/9251725-L.jpg"
  },
  {
    booktitle: "The Women",
    author: "Kristin Hannah",
    category: "Historical Fiction",
    yearpublished: "2024",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/14501723-L.jpg"
  },
  {
    booktitle: "The Heaven & Earth Grocery Store",
    author: "James McBride",
    category: "Literary Fiction",
    yearpublished: "2023",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/14430047-L.jpg"
  },
  {
    booktitle: "Fourth Wing",
    author: "Rebecca Yarros",
    category: "Fantasy",
    yearpublished: "2023",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/14420691-L.jpg"
  },
  {
    booktitle: "Iron Flame",
    author: "Rebecca Yarros",
    category: "Fantasy",
    yearpublished: "2024",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/15103253-L.jpg"
  },
  {
    booktitle: "The House of Flame and Shadow",
    author: "Sarah J. Maas",
    category: "Fantasy",
    yearpublished: "2024",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/14576237-L.jpg"
  },
  {
    booktitle: "Wandering Stars",
    author: "Tommy Orange",
    category: "Historical Fiction",
    yearpublished: "2024",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/14502904-L.jpg"
  },
  {
    booktitle: "Martyr!",
    author: "Kaveh Akbar",
    category: "Literary Fiction",
    yearpublished: "2024",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/14502693-L.jpg"
  },
  {
    booktitle: "The Ministry of Time",
    author: "Kaliane Bradley",
    category: "Science Fiction",
    yearpublished: "2024",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/14502111-L.jpg"
  },
  {
    booktitle: "Knife: Meditations After an Attempted Murder",
    author: "Salman Rushdie",
    category: "Memoir",
    yearpublished: "2024",
    bookcoverimageUrl: "https://covers.openlibrary.org/b/id/14503073-L.jpg"
  },
  {
    booktitle: "The Atlas Complex",
    author: "Olivie Blake",
    category: "Fantasy",
    yearpublished: "2024",
    bookcoverimageUrl: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1675187027i/63104676.jpg"
  }
];


const latest = books.filter(book => book.yearpublished === '2024' && book.category === 'Fantasy')

const selling = books.filter(book => book.category === 'Romance' ||  book.category === 'Biography' ||  book.category === 'Memoir')

const latestAddition = document.querySelector("#latestAddition")
const heading = document.createElement('h3')
heading.innerHTML = `Latest Addition`
latest.forEach(book => {
    const bookdiv = document.createElement('div')
    bookdiv.classList.add('bookcard')

    bookdiv.innerHTML = `<img src="${book.bookcoverimageUrl}"><br>
                        ${book.booktitle} - ${book.author}`

   
                           
    latestAddition.appendChild(bookdiv)
    latestAddition.appendChild(heading) 
    
})

const bestselling = document.querySelector("#bestselling")

selling.forEach(book => {
  const bookdiv = document.createElement('div')
  bookdiv.classList.add('bookcard')

  bookdiv.innerHTML = `<img src="${book.bookcoverimageUrl}"><br>
                        ${book.booktitle} - ${book.author}`

  bestselling.appendChild(bookdiv)
})


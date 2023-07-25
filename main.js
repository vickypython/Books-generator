let btn = document.querySelector("#new-image");
let book = document.querySelector(".book");
let author = document.querySelector(".author");
let books = [
  {
    book: " The mountain is you",
    author: "brianna wiest",
  },
  {
    book: " The untethered soul",
    author: "michael singer",
  },
  {
    book: " Be your future self now",
    author: "Benjamin Hardy",
  },
  {
    book: " kidangaa kimemwozea",
    author: "Ken walibora",
  },
  {
    book: " The River and the Source",
    author: "magret Ogola",
  },
  {
    book: " Hyper focus",
    author: "chris baily",
  },
  {
    book: " linux Basic for Hackers",
    author: "occupy the web",
  },
  {
    book: " Hacking APIs",
    author: "coriy ball",
  },
  {
    book: " Bug Bounty Bootcamp",
    author: "vickie lee",
  },
  {
    book: " Networking Basic for Hackers",
    author: "brianna wiest",
  },
  {
    book: " Kiswahili kifukuzwe",
    author: "walla bin walla",
  },
  {
    book: " Awaken the giant within",
    author: "unknow",
  },
  {
    book: " The success principle",
    author: "jack",
  },
  {
    book: "Hacking connected cars",
    author: "Alissa Knight",
  },
  {
    book: " The Go-Giver",
    author: "unknow",
  },
  {
    book: " Rich dad Poor dad",
    author: "unknow",
  },
  {
    book: " The Pivot",
    author: "brianna wiest",
  },
  {
    book: " How to heal",
    author: "brianna wiest",
  },
  {
    book: " Atomic Habits",
    author: "unknow",
  },
  {
    book: "My story my future",
    author: "me",
  },
];
btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * books.length);
  book.innerText = books[random].book;
  author.innerText = books[random].author;
});

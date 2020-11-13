    var titleCurrent = document.getElementById("title-current")
    var currentBooks = document.getElementById("current-books")

    var titleBorrowed = document.getElementById("title-borrowed")
    var borrowedBooks = document.getElementById("borrowed-books")

    function displayCurrentRead() {
      titleCurrent.style.display= "block"
      currentBooks.style.display="block"

      titleBorrowed.style.display="none"
      borrowedBooks.style.display="none"
    }

    function displayBorrowedBooks() {
    titleBorrowed.style.display = "block"
    borrowedBooks.style.display = "block"

    titleCurrent.style.display= "none"
      currentBooks.style.display="none"
  }


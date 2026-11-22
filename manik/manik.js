
// Select the search input
let searchInput = document.getElementById("bookSearch");

// Select all book cards
let bookCards = document.querySelectorAll(".book-card");

// Run this function whenever someone types
searchInput.addEventListener("input", function() {

    // Get the search text
    let searchText = searchInput.value.toLowerCase();

    // Check every book card
    bookCards.forEach(function(book) {

        // Get the book details
        let bookName = book.innerText.toLowerCase();

        // Show matching books
        if (bookName.includes(searchText)) {
            book.style.display = "block";
        } else {
            book.style.display = "none";
        }

    });

});

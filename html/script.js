let cart = 0;
let total = 0;


// Add to Cart

function addToCart(name, price) {

    cart++;
    total += price;

    document.getElementById("cartCount").innerText = cart;

    alert(name + " added to cart!\nTotal Price: ₹" + total);
}


// Filter Books

function filterBooks(category) {

    let books = document.querySelectorAll(".book");

    books.forEach(function(book) {

        if (category === "All" ||
            book.dataset.category === category) {

            book.style.display = "block";

        } else {

            book.style.display = "none";

        }

    });
}


// Search Books

document.getElementById("search").addEventListener("input", function() {

    let searchText = this.value.toLowerCase();

    let books = document.querySelectorAll(".book");

    books.forEach(function(book) {

        let name = book.querySelector("h3").innerText.toLowerCase();

        if (name.includes(searchText)) {

            book.style.display = "block";

        } else {

            book.style.display = "none";

        }

    });

});


// Contact Form

function sendMessage(event) {

    event.preventDefault();

    alert("Thank you! Your message has been sent.");

}c
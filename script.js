// script.js

// JavaScript functionality for the dress shop website

// Function to display available dresses
function displayDresses() {
    const dresses = [
        { name: 'Summer Dress', price: 39.99, image: 'summer-dress.jpg' },
        { name: 'Evening Gown', price: 89.99, image: 'evening-gown.jpg' },
        { name: 'Cocktail Dress', price: 59.99, image: 'cocktail-dress.jpg' },
    ];

    dresses.forEach(dress => {
        console.log(`Name: ${dress.name}, Price: $${dress.price}`);
    });
}

displayDresses();
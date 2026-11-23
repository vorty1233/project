
// Customer review information

const reviews = [
    {
        name: "John",
        job: "Web Developer",
        review: "This website is amazing! I really enjoyed using it."
    },

    {
        name: "Sarah",
        job: "Designer",
        review: "The service is excellent. I highly recommend it!"
    },

    {
        name: "Michael",
        job: "Student",
        review: "Very easy to use and understand. Great experience!"
    },

    {
        name: "Emily",
        job: "Teacher",
        review: "I am very happy with the service. Thank you!"
    }
];


// Starting review number

let currentReview = 0;


// Get HTML elements

const name = document.getElementById("name");

const job = document.getElementById("job");

const review = document.getElementById("review");


// Function to show review

function showReview() {

    name.textContent = reviews[currentReview].name;

    job.textContent = reviews[currentReview].job;

    review.textContent = reviews[currentReview].review;

}


// Next button

document.getElementById("next").addEventListener("click", function() {

    currentReview++;

    if (currentReview > reviews.length - 1) {
        currentReview = 0;
    }

    showReview();

});


// Previous button

document.getElementById("prev").addEventListener("click", function() {

    currentReview--;

    if (currentReview < 0) {
        currentReview = reviews.length - 1;
    }

    showReview();

});


// Random button

document.getElementById("random").addEventListener("click", function() {

    currentReview = Math.floor(Math.random() * reviews.length);

    showReview();

});


// Show the first review

showReview();

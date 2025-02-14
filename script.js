document.addEventListener("DOMContentLoaded", function() {
    // Create 10 floating hearts
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");

        // Random position for each heart
        heart.style.left = `${Math.random() * 100}vw`; // Random position horizontally
        heart.style.top = `${Math.random() * 100}vh`;  // Random position vertically
        heart.style.animationDuration = `${Math.random() * 4 + 4}s`; // Random animation duration (4-8 seconds)
        heart.style.animationDelay = `${Math.random() * 5}s`; // Random animation delay

        // Append the heart to the body
        document.body.appendChild(heart);
    }
});
const letters = {
    valentine: {
        title: "Happy Valentine's Day!!",
        content: "Hey valentine :) Hope these letters make you feel special today. Love and appreciate you"
    },
    miss: {
        title: "I miss you toooooo",
        content: "Hugs, kissies, and and time to plan our next trip ;)"
    },
    hug: {
        title: "",
        content: "Here for you whenever you need a virtual hug. Just a text or a phone call away"
    },
    sleep: {
        title: "Zzzzzz",
        content: "Deep breaths, brain dump on your phone's notes app, adjust the room's temperature right, go pee, magnesium it up, phone on charging, text me when you're up"
    },
    motivate: {
        title: "~motivation~",
        content: "Sending you some motivation bestie <3 start with a small goal, get that shit done, reward yourself, and on to the next. You got this"
    },
    mems: {
        title: "Memory lane",
        content: "New York. And that's all I will say about that hehehehe"
    },
    love: {
        title: "Some lovies for you",
        content: "Huggies kissies cuddles. Love you ❤️❤️❤️"
    },
    accomplish: {
        title: "You're AMAZING",
        content: "WOOO congrats on your accomplishment bb 🎉 Keep it up, I believe in youuuu"
    }
};

function openLetter(letter) {
    const popup = document.getElementById("letterPopup");
    const title = document.getElementById("letterTitle");
    const content = document.getElementById("letterContent");

    title.textContent = letters[letter].title;
    content.textContent = letters[letter].content;

    popup.style.display = "flex";
}

function closePopup() {
    const popup = document.getElementById("letterPopup");
    popup.style.display = "none";
}

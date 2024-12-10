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
    miss: {
        title: "I Miss You So Much",
        content: "Every moment apart from you feels so incomplete. Just remember, no matter the distance, my heart is always with you."
    },
    down: {
        title: "You're Not Alone",
        content: "I'm here for you, through every high and low. We can get through anything, together."
    },
    happy: {
        title: "Celebrating Your Happiness",
        content: "Seeing you happy makes me smile. I'm so proud of you and all the amazing things you do!"
    },
    hug: {
        title: "A Virtual Hug",
        content: "Here’s a hug for you, right when you need it. Just imagine me wrapping my arms around you, and know that I’m sending you all my love."
    },
    sleep: {
        title: "Sweet Dreams",
        content: "When you can’t sleep, just think of me. I'll be dreaming of you too, and we'll be together in our dreams."
    },
    alone: {
        title: "You're Never Alone",
        content: "Even when we're apart, remember you have my heart. You are never truly alone, my love."
    },
    bad: {
        title: "Bad Day? It'll Get Better",
        content: "I know today may be tough, but tomorrow is a new day. You’ve got this, and I’ll always be by your side."
    },
    laugh: {
        title: "Here's a Smile",
        content: "I know life can get tough, but laughter is the best medicine. Here’s a little joke: Why don't skeletons fight each other? They don’t have the guts!"
    },
    motivation: {
        title: "Keep Going, You're Amazing",
        content: "Whenever you feel like giving up, just remember how strong you are. I believe in you, always."
    },
    love: {
        title: "I Love You So Much",
        content: "I love you more than words can express. You mean the world to me, and I’m so grateful for you."
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

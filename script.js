const messages = [
    "I think you meant to press yes",
    "Oh no, seems like you missed again D:",
    "Third time's a charm :)",
    "Are you absolutely sure about that?",
    "Think about this for a second, Viv",
    "Is it opposite day today?",
    "THINK ABOUT THE CHILDREN, VIV",
    "Hitler got rejected from art school...",
    "D:",
    "Fine, I'll just be the second coming then"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}

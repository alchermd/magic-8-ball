"use strict";

// HTML Elements
const textarea = document.querySelector("textarea");
const submitButton = document.querySelector("#submit");
const clearButton = document.querySelector("#clear");
const results = document.querySelector("#results");

const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook  not so good",
    "Very doubtful"
];

// Process the answer.
submitButton.addEventListener("click",  function() {
    let thinkingEl = document.querySelector("#thinking");
    thinkingEl.innerHTML = `<em>Thinking...</em>`;

    setTimeout(generateAnswer, 1500);

    function generateAnswer() {
        let question = textarea.value;
        textarea.value = "";

        if (question === "") return;

        let result = document.createElement("li");
        let answer = answers[Math.floor(Math.random() * answers.length)];

        result.innerHTML = `<em>${question}</em> - <strong>${answer}</strong>`
        results.appendChild(result);

        thinkingEl.innerHTML = "";
    }
}); 


// Clears the results.
clearButton.addEventListener("click", function() {
    results.innerHTML = "";
});



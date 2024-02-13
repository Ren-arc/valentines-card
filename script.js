let popup = document.getElementById("popup");
function myFunction() {
    let userInput = document.querySelector("#userInput");
    let message = document.querySelector("#message");

    message.innerHTML = "Hi, " + userInput.value;

    popup.classList.add("open-card-inside");
    
}

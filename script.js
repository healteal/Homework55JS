function random() {
    let random = document.querySelector('h1');
    let number = Math.random();
    number *= 100;
    random.innerText = Math.round(number);
}

function hide() {
    let text = document.querySelector('p');
    if (text.style.display == "none") {
        text.style.display = "block";
    } 
    else 
    {
        text.style.display = "none";
    }
}
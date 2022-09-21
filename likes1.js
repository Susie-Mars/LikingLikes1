var count = 3;
var countElement = document.querySelector("#three");

function addOne(element) {
    count++;
    countElement.innerText = count;

}
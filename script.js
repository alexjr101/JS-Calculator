const printables = document.getElementsByClassName("printable");
const numbers = document.getElementsByClassName("numbers");
const output = document.getElementById("output");


for(let i = 0; i < printables.length; i++) {
    printables[i].addEventListener('click', updateOutput);
}

function updateOutput(e) {
    console.log(e.target.textContent);
    output.textContent = output.textContent + e.target.textContent;
}
 console.log(printables.length);
const printables = document.getElementsByClassName("printable");
const numbers = document.getElementsByClassName("numbers");
const output = document.getElementById("output");


for(let i = 0; i < printables.length; i++) {
    printables[i].addEventListener('click', updateOutput);
}
document.getElementById('ac').addEventListener('click', function() {
    output.textContent = "Start Calculating! ";
});

function updateOutput(e) {
    output.textContent = output.textContent + e.target.textContent;
}
 
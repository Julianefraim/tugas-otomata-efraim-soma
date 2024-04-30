function checkScientificNumber() {
    var input = document.getElementById("numberInput").value;
    var scientificRegex = /^[+-]?(\d+(\.\d+)?|\.\d+)(e[+-]?\d+)?$/i;

    if (scientificRegex.test(input)) {
        document.getElementById("result").innerHTML = input + " is a scientific number.";
    } else {
        document.getElementById("result").innerHTML = input + " is not a scientific number.";
    }
}

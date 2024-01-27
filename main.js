var elResult = document.querySelector(".js-result");

var firstNumber = prompt("Brinchi raqam");
var secondNumber = prompt("Ikkinchi raqam");
var thirdNumber = prompt("uchinchi raqam");

if(firstNumber > secondNumber && firstNumber < thirdNumber || firstNumber > thirdNumber && firstNumber < secondNumber) {
    elResult.textContent = firstNumber
} else if(secondNumber > firstNumber && secondNumber < thirdNumber || secondNumber > thirdNumber && secondNumber < firstNumber) {
    elResult.textContent = secondNumber
} else {
    elResult.textContent = thirdNumber
}
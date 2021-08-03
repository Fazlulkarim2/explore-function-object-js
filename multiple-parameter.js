function addTwoNumbers(number1, number2) {
    console.log(number1, number2);
    var total = number1 + number2;
    return total;

}
var firstNumber = 21;
var lastNumber = 59;
var result = addTwoNumbers(firstNumber, lastNumber);
console.log('result value:', result);

// multiply

function multiplyTowNumbers(num1, num2) {
    var result = num1 * num2;
    // console.log(num1, num2);
    return result;
}

var total = multiplyTowNumbers(5, 100);
console.log('total after multiplication: ', total);

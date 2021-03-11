function main(numOne, numTwo) {

    var quotient = numOne / numTwo;
    
    if (numTwo === 0) {
        quotient = 'Divide by 0! Cannot divide by zero!';
    } else {

        var numOne;
        var numTwo;
      

    }

return quotient;

}

console.log(main(15, 3)); //change this
console.log(main(25, 5)); //change this
console.log(main(420, 10)); //change this
console.log(main(55, 0)); //change this
module.exports = main;
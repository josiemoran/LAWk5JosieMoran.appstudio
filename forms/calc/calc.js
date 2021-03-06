function calculate(num1, num2) {
    let sum = (num1 + num2)
    return sum
}

let numb1 = Number(prompt("Enter Number:"))
let numb2 = Number(prompt("Enter Another Number:"))

let summedNumbers = calculate (numb1, numb2)
console.log(`The sum of ${numb1} and ${numb2} is ${summedNumbers}.`)

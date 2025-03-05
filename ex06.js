let number = Number(prompt("Mời bạn nhập vào một số: "));
let divisor = ""
for (let i = 1; i <= number ; i++){
    if (number % i == 0) {
        divisor += i + " ";
    }
}
console.log(` Ước của ${number} là: ${divisor}`);

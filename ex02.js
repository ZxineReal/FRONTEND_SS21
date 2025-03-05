let number1 = Number(prompt("Mời bạn nhập vào số nguyên thứ nhất: "));
let number2 = Number(prompt("Mời bạn nhập vào số nguyên thứ hai: "));
let number3 = Number(prompt("Mời bạn nhập vào số nguyên thứ ba: "));
let number4 = Number(prompt("Mời bạn nhập vào số nguyên thứ tư: "));
let number5 = Number(prompt("Mời bạn nhập vào số nguyên thứ năm: "));

let numberContainer = [number1, number2, number3, number4, number5];
let even = 0;
let odd = 0;

for (let i = 0; i < numberContainer.length; i++){
    if (numberContainer[i] % 2 === 0) {
        even++;
    } else if (numberContainer[i] % 2 !== 0 && isNaN(numberContainer[i]) === false) {
        odd++;
    }
}
console.log(` Số lượng số chẵn là: ${even}`);
console.log(` Số lượng số lẻ là: ${odd}`);

let number1 = Number(prompt("Mời bạn nhập vào số nguyên thứ nhất: "));
let number2 = Number(prompt("Mời bạn nhập vào số nguyên thứ hai: "));
let number3 = Number(prompt("Mời bạn nhập vào số nguyên thứ ba: "));
let number4 = Number(prompt("Mời bạn nhập vào số nguyên thứ tư: "));
let number5 = Number(prompt("Mời bạn nhập vào số nguyên thứ năm: "));

let numberContainer = [number1, number2, number3, number4, number5];
let sum = 0;

for(let i = 0; i < numberContainer.length; i++) {
    if (numberContainer[i] % 2 !== 0){
        sum += numberContainer[i];
    }
}
if (isNaN(sum) === false) {
    console.log(` Tổng các số lẻ là: ${sum}`);
} else {
    console.log(` Dữ liệu nhập vào không hợp lệ`);
    
}
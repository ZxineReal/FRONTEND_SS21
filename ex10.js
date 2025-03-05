let number = Number(prompt("Mời bạn nhập vào số lượng số nguyên tố: "));
let count = 0;
let num = 2;
let numberContainer = "";

if (number > 0) {
  while (count < number) {
    let flag = 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i == 0) {
        flag = 0;
        break;
      }
    }
    if (flag == 1) {
      numberContainer += num + " ";
      count++;
    }
    num++;
  }
  console.log(numberContainer);
} else {
  console.log("Không hợp lệ");
}

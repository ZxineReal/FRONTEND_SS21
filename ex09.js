let number = Number(prompt("Mời bạn nhập vào số cần kiểm tra: "));
let flag = 0;

if (number < 2) {
    flag = 0;
} else {
    for (let i = 2; i < Math.sqrt(number); i++){
        if (number % i == 0){
            flag = 0;
            break;
        } else {
            flag = 1;
        }
    }
}
if (flag == 1){
    console.log("Là số nguyên tố");
} else {
    console.log("Không phải là số nguyên tố");
    
}
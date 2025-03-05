let inputMoney = Number(prompt("Mời bạn nhập vào số tiền gửi: "));
let interest = Number(prompt("Mời bạn nhập vào lãi suất tháng: "));
let month = Number(prompt("Mời bạn nhập vào số tháng gửi: "));

let interestMoney = 0;
let money = 0;

if (
  isNaN(inputMoney) == false &&
  isNaN(month) == false &&
  isNaN(interest) == false
) {
  interestMoney = ((inputMoney * interest) / 100 / 12) * month;
  money = inputMoney + +interestMoney;

  interestMoney = interestMoney.toLocaleString("vi", { style: "currency", currency: "VND" });

  money = money.toLocaleString("vi", { style: "currency", currency: "VND" });

  console.log(` Tiền lãi: ${interestMoney}`);

  console.log(` Tiền nhận được: ${money}`);
} else {
  console.log("Dữ liệu nhập vào không hợp lệ!");
  
}

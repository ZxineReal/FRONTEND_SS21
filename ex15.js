let inputMoney = prompt("Mời bạn nhập vào số tiền: ");
let fiveHundereds = 0;
let twoHundereds = 0;
let oneHundereds = 0;
let fifthty = 0;
let twenty = 0;
let ten = 0;
let five = 0;
let two = 0;
let one = 0;

while (inputMoney >= 1000) {
  if (inputMoney % 1000 == 0) {
    if (inputMoney >= 500000) {
      fiveHundereds = Math.floor(inputMoney / 500000);
      inputMoney -= fiveHundereds * 500000;
      console.log(`500.000: ${fiveHundereds} tờ`);
    }
    if (inputMoney >= 200000) {
      twoHundereds = Math.floor(inputMoney / 200000);
      inputMoney -= twoHundereds * 200000;
      console.log(`200.000: ${twoHundereds} tờ`);
    }
    if (inputMoney >= 100000) {
      oneHundereds = Math.floor(inputMoney / 100000);
      inputMoney -= oneHundereds * 100000;
      console.log(`100.000: ${oneHundereds} tờ`);
    }
    if (inputMoney >= 50000) {
      fifthty = Math.floor(inputMoney / 50000);
      inputMoney -= fifthty * 50000;
      console.log(`50.000: ${fifthty} tờ`);
    }
    if (inputMoney >= 20000) {
      twenty = Math.floor(inputMoney / 20000);
      inputMoney -= twenty * 20000;
      console.log(`20.000: ${twenty} tờ`);
    }
    if (inputMoney >= 10000) {
      ten = Math.floor(inputMoney / 10000);
      inputMoney -= ten * 10000;
      console.log(`10.000: ${ten} tờ`);
    }
    if (inputMoney >= 5000) {
      five = Math.floor(inputMoney / 5000);
      inputMoney -= five * 5000;
      console.log(`5.000: ${five} tờ`);
    }
    if (inputMoney >= 2000) {
      two = Math.floor(inputMoney / 2000);
      inputMoney -= two * 2000;
      console.log(`2.000: ${two} tờ`);
    }
    if (inputMoney >= 1000) {
      one = Math.floor(inputMoney / 1000);
      inputMoney -= one * 1000;
      console.log(`1.000: ${one} tờ`);
    }
  }
  else {
    console.log("Số tiền không hợp lệ");
    
  }
}

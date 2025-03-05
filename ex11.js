let day = prompt("Mời bạn nhập vào ngày sinh: ");
let month = prompt("Mời bạn nhập vào tháng sinh: ");

if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
  console.log("Cung hoàng đạo của bạn : Bạch Dương");
} else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
  console.log("Cung hoàng đạo của bạn: Kim Ngưu");
} else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
  console.log("Cung hoàng đạo của bạn: Song Tử");
} else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
  console.log("Cung hoàng đạo của bạn: Cự Giải");
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
  console.log("Cung hoàng đạo của bạn: Sư Tử");
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
  console.log("Cung hoàng đạo của bạn: Xử Nữ");
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
  console.log("Cung hoàng đạo của bạn: Thiên Bình");
} else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
  console.log("Cung hoàng đạo của bạn: Bọ Cạp");
} else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
  console.log("Cung hoàng đạo của bạn: Nhân Mã");
} else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
  console.log("Cung hoàng đạo của bạn: Ma Kết");
} else if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
  console.log("Cung hoàng đạo của bạn: Bảo Bình");
} else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
  console.log("Cung hoàng đạo của bạn: Song Ngư");
} else {
    console.log("Ngày sinh không hợp lệ");   
}

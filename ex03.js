let password = "helloworld";
let inputPassword = prompt("Mời bạn nhập vào mật khẩu: ");
if (password === inputPassword) {
    console.log(`Đăng nhập thành công, mật khẩu là: ${password}`);
} else {
    console.log(` Mật khẩu sai!`);   
}
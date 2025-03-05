for (let i = 0; i < 10; i++) {
  let a = Math.floor(Math.random() * 225 + 1);
  let b = Math.floor(Math.random() * 225 + 1);
  let c = Math.floor(Math.random() * 225 + 1);

  console.log(
    "%c Màu sắc đã được thay đổi",
    `color: rgb(${a},${b},${c})`,
  );
}

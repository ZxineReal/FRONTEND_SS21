let number = parseInt(prompt("Mời bạn nhập vào độ dài :")); 

console.log("a:");
for (let i = 0; i < number; i++) {
  let a = "";
  for (let j = 0; j <= i; j++) {
    a += " * ";
  }
  console.log(a);
}

for (let i = 0; i < number; i++) {
  let b = "";
  for (let j = 0; j < number; j++) {
    if (j < number - i - 1) {
      b += "   ";
    } else {
      b += " * ";
    }
  }
  console.log(b);
}

for (let i = number; i > 0; i--) {
  let c = "";
  for (let j = 0; j < i; j++) {
    c += " * ";
  }
  console.log(c);
}

for (let i = 0; i < number; i++) {
  let d = "";
  for (let j = 0; j < number; j++) {
    if (j < i) {
      d += "   ";
    } else {
      d += " * ";
    }
  }
  console.log(d);
}

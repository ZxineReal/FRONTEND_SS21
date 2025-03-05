let a = prompt("Mời bạn nhập hệ số a: ");
let b = prompt("Mời bạn nhập hệ số b: ");
let c = prompt("Mời bạn nhập hệ số c: ");

let delta = b * b - 4 * a * c;
let doubleSolution = (-b / 2) * a;

if (delta < 0) {
  console.log("Phương trình vô nghiệm");
} else if (delta === 0) {
  console.log(`Phương trình có nghiệm kép x1 = x2 = ${doubleSolution}`);
} else {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  console.log(` Nghiệm của phương trình là: x1 = ${x1}, x2 = ${x2}`);
}

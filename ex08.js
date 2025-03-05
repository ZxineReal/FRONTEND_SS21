let armstrong = "";

for (let i = 100; i <= 999; i++) {
  {
    let hundereds = Math.floor(i / 100);
    let dozens = Math.floor((i % 100) / 10);
    let unit = (i % 100) % 10;

    if (
      i ==
      hundereds * hundereds * hundereds +
        dozens * dozens * dozens +
        unit * unit * unit
    ) {
      armstrong += i + " ";
    }
  }
}
console.log(armstrong);

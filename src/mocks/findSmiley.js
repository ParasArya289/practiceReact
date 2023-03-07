function countSmileys(arr) {
  const eyes = [
    ":)",
    ";)",
    ":D",
    ";D",
    ";-D",
    ":-D",
    ":~D",
    ";~D",
    ";-)",
    ":-)",
    ":~)",
    ";~)",
  ];
  const s = arr.filter((el) => eyes.includes(el));
  return s.length;
}
console.log(countSmileys([":D", ":~)", ";~D", ":)"]));

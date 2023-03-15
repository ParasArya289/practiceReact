function dirReduc(arr) {
  const map = new Map();
  arr.forEach((el) => map.set(el, (map.get(el) || 0) + 1));
  console.log(map);
  const wrongWay = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };
  return map.has(wrongWay["NORTH"]);
}

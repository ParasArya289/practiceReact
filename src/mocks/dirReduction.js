function dirReduc(arr) {
  const wrongWay = {
    NORTH: "SOUTH",
    SOUTH: "NORTH",
    EAST: "WEST",
    WEST: "EAST",
  };

  return arr.reduce(
    (acc, dir) =>
      wrongWay[dir] === acc[acc.length - 1]
        ? acc.slice(0, -1)
        : acc.concat(dir),
    []
  );
}

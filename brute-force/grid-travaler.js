const gridTravaler = (m, n) => {
  // base case
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;

  return gridTravaler(m - 1, n) + gridTravaler(m, n - 1);
};

console.log(gridTravaler(1, 1)); //1
console.log(gridTravaler(2, 3)); //3
console.log(gridTravaler(3, 2)); //3
console.log(gridTravaler(3, 3)); //6
console.log(gridTravaler(18, 18)); //2333606220

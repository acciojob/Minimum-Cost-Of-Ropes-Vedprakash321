function calculateMinCost() {
  //your code here
  const ropeLengths = input.split(",").map((str) => parseInt(str.trim(), 10));
  const minCost = findMinCost(ropeLengths);
  return minCost;
  
  
}  

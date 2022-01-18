// https://www.hackerrank.com/domains/algorithms

// Jumping on the Clouds: Revisited
function jumpingOnClouds(c, k) {
  let energy = 100;
  let current_cloud = 0;
  while (true) {
    current_cloud += k;
    if (current_cloud >= c.length) {
      current_cloud -= c.length;
    }
    energy -= 1;
    if (c[current_cloud] == 1) {
      energy -= 2;
    }
    if (current_cloud == 0) {
      break;
    }
  }
  return energy;
}
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 1, 0], 2));

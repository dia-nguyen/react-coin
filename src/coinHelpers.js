/**
 * @returns true for heads, false for tails
 */
function getRandomCoin() {
  const result = Math.round(Math.random()); // 0 or 1
  return result ? true : false;
}

export { getRandomCoin };

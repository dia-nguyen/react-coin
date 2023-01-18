/**
 * @returns true for heads, false for tails
 */
function getRandomCoin() {
  const coins = ["head", "tails"];
  const result = coins[Math.round(Math.random())];
  if (result === "heads") return true;
  return false;
}

export { getRandomCoin };

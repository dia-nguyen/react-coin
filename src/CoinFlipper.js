import Coin from "./Coin";
import { useState } from "react";
import { getRandomCoin } from "./coinHelpers";

function CoinFlipper() {
  const [isHead, setIsHead] = useState();

  const [coinFlips, setCoinFlips] = useState({
    total: 0,
    head: 0,
    tail: 0,
  });

  function flipCoin() {
    setIsHead(getRandomCoin());

    // updates totalCoinFlip
    // updates head or tail flip count
  }

  return (
    <>
      <h1>Let's flip a coin!</h1>
      <Coin isHead={isHead} />
      <button onClick={flipCoin}>Flip me!</button>
      <p>
        Out of {coinFlips.total} flips, there have been {coinFlips.head} and{" "}
        {coinFlips.tail}.
      </p>
    </>
  );
}

export default CoinFlipper;

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
    console.log('flipped a coin');
    const heads = getRandomCoin();
    setIsHead(heads);

    updateCoinFlips(heads);
  }

  function updateCoinFlips(heads) {
    console.log('updating coin flips');

    // This doesn't re-render when we get a duplicate flip for some reason
    // setCoinFlips(prevState => {
    //   prevState.total++;
    //   prevState.head += heads ? 1 : 0;
    //   prevState.tail += heads ? 0 : 1;

    //   return prevState;
    // });

    setCoinFlips({
      total: coinFlips.total + 1,
      head: coinFlips.head + (heads ? 1 : 0),
      tail: coinFlips.tail + (heads ? 0 : 1)
    });
  }

  return (
    <>
      <h1>Let's flip a coin!</h1>
      { isHead !== undefined && <Coin isHead={isHead} /> }
      <button onClick={flipCoin}>Flip me!</button>
      <p>
        Out of {coinFlips.total} flips, there have been {coinFlips.head} heads and {coinFlips.tail} tails.
      </p>
    </>
  );
}

export default CoinFlipper;

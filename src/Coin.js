const HEAD_IMG = "https://e7.pngegg.com/pngimages/100/107/png-clipart-canada-dollar-coin-loonie-canadian-dollar-dollar-bills-medal-canada.png";
const TAILS_IMG = "http://www.oakgames.com/loonie.png";

/**
 * Coin - Returns heads or tails
 * Prop : isHead -boolean
 */
function Coin({ isHead }){

  const coin = (isHead) ? HEAD_IMG : TAILS_IMG
  return(
    <img src={coin} alt={isHead ? 'head' : 'tails'} />
  )
}

export default Coin
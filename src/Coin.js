/**
 * Coin - Returns heads or tails
 * Prop : isHead -boolean
 */
function Coin({ isHead }){

  const coin = (isHead) ? HEAD_IMG : TAILS_IMG
  return(
    <img src={coin} alt="coin img" />
  )
}

export default Coin
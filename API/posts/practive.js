const obj = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
  ]

const maximumScore = tileHand => tileHand.reduce((total, item) => { return item.score + total}, 0)


	


console.log(maximumScore(obj))
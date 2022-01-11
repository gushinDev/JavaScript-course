const calcAverage = (scores) => {
  const averageScore =
    scores.reduce((acc, score) => acc + score, 0) / scores.length;
  return averageScore;
};

const checkWinner = (scoreD, scoreK) => {
  if (scoreD >= scoreK * 2) {
    console.log(`Dolphins win (${scoreD} vs. ${scoreK})`);
  } else if (scoreD * 2 <= scoreK ) {
    console.log(`Koalas win (${scoreK} vs. ${scoreD})`);
  } else {
    console.log('Noone wins');
  }
};

let scoreDolphins = calcAverage([44, 23, 71]);
let scoreKoalas = calcAverage([65, 54, 49]);

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage([85, 54, 41]);
scoreKoalas = calcAverage([23, 34, 27]);

checkWinner(scoreDolphins, scoreKoalas);

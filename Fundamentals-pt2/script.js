// Coding challenge #1
const calcAverage = (scores) => {
  const averageScore =
    scores.reduce((acc, score) => acc + score, 0) / scores.length;
  return averageScore;
};

const checkWinner = (scoreD, scoreK) => {
  if (scoreD >= scoreK * 2) {
    console.log(`Dolphins win (${scoreD} vs. ${scoreK})`);
  } else if (scoreD * 2 <= scoreK) {
    console.log(`Koalas win (${scoreK} vs. ${scoreD})`);
  } else {
    console.log("Noone wins");
  }
};

let scoreDolphins = calcAverage([44, 23, 71]);
let scoreKoalas = calcAverage([65, 54, 49]);

checkWinner(scoreDolphins, scoreKoalas);

scoreDolphins = calcAverage([85, 54, 41]);
scoreKoalas = calcAverage([23, 34, 27]);

checkWinner(scoreDolphins, scoreKoalas);
console.log("----------------------------------------");

//End of the first challenge

// Coding challenge #2
const calcTip = (bill) => {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
  } else {
    tip = bill * 0.2;
  }
  return tip;
};

let bills = [125, 555, 44];

let tips = bills.map((item) => calcTip(item));

let total = bills.map((item, index) => item + tips[index]);

console.log(bills, tips, total);

//End of the second challenge

// Challenge #3
let mark = {
  fullName: "Mark Miller",
  mass: 50,
  height: 1.7,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

let john = {
  fullName: "John Smith",
  mass: 65,
  height: 1.83,

  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(
    `Mark BMI (${mark.bmi.toFixed(
      1
    )}) is higher than John's BMI (${john.bmi.toFixed(1)})`
  );
} else {
  console.log(
    `Mark BMI (${mark.bmi.toFixed(
      1
    )}) is higher than John's BMI (${john.bmi.toFixed(1)})`
  );
}

//End of the third challenge

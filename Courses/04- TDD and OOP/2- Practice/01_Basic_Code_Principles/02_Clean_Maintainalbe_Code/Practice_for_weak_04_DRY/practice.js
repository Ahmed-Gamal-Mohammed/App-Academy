function findBiggerNumber(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

function multiplyBiggerNumByTwo(num1, num2) {
  const bigNum = findBiggerNumber(num1, num2);
  return bigNum * 2;
}

function divideBiggerNumByThree(num1, num2) {
  const bigNum = findBiggerNumber(num1, num2);
  return bigNum / 3;
}

function eatMostTacos(sum1, sum2) {
  let bigNum = findBiggerNumber(sum1,sum2);
  return `I ate ${bigNum} tacos.`;
}

function adoptSmallerDog(weight1, weight2) {
  const smallDog = weight1 < weight2 ? weight1 : weight2;
  return `I adopted a dog that weighs ${smallDog} pounds.`;
}


/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  multiplyBiggerNumByTwo,
  divideBiggerNumByThree,
  eatMostTacos,
  adoptSmallerDog
};

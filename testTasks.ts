//Задание 1
console.log("Задание 1");
const inputCityArr = ["Москва", "Санкт-Петербург", "Воронеж", "Minsk"];

const inputCitysArray = (cityArr) => {
  const resoult = cityArr.join(", ");
  return resoult + ".";
};

const resoult = inputCitysArray(inputCityArr);
console.log(resoult);
//

//Задание 2
console.log();
console.log("Задание 2");
const number1 = 27;
const number2 = 27.8;
const number3 = 41.7;
const number4 = -27.8;

const roundingHight = (number, precision) => {
  return Math.ceil(number / precision) * precision;
};
const roundingLow = (number, precision) => {
  return Math.floor(number / precision) * precision;
};

const resoult3 = roundingHight(number2, 5);
const resoult2 = roundingLow(number1, 5);
// const resoult3 = rounding(number2);
console.log(resoult2);
//

//Задание 3
console.log();
console.log("Задание 3");

const intNumbde = 12350;

const numberComputers = (intNumber) => {
  let computer = " компьютер";
  let moreComputer = " компьютера";
  let computers = " компьютеров";

  const stringNumber = intNumber.toString();
  const checkLastElement = stringNumber.slice(stringNumber.length - 1);
  if (checkLastElement == 1) {
    return intNumber + computer;
  }
  if (checkLastElement == 2 || checkLastElement == 3 || checkLastElement == 4) {
    return intNumber + moreComputer;
  }
  if (
    checkLastElement == 5 ||
    checkLastElement == 6 ||
    checkLastElement == 7 ||
    checkLastElement == 8 ||
    checkLastElement == 9
  ) {
    return intNumber + computers;
  }
  if (checkLastElement == 0) {
    return intNumber + computers;
  }
};

const resoult4 = numberComputers(intNumbde);
console.log(resoult4);
//

//Задание 4
console.log();
console.log("Задание 4");

const intInputValue = 1;

const isNumberEasy = (intNumder) => {
  for (let i = 2; i < intNumder; i++) if (intNumder % i === 0) return false;
  return intNumder > 1;
};

const resoult5 = isNumberEasy(intInputValue);
console.log(resoult5);
//

//Задание 5
console.log();
console.log("Задание 5");
const arrayOne = [
  7, 17, 1, 9, 1, 17, 56, 56, 23, 1, 1, 23, 56, 1, 23, 56, 0, -19, 0, -19,
];
const arrayTwo = [56, 17, 17, 0, -19, 0, -19];

const isCoincidence = (arrayOne, arrayTwo) => {
  const coincidenceArrOne = arrayOne.filter((number, index, numbers) => {
    return numbers.indexOf(number) !== index;
  });
  const onlyUniqueElementsArrOne = coincidenceArrOne.filter(function (
    item,
    pos
  ) {
    return coincidenceArrOne.indexOf(item) == pos;
  });

  const coincidenceArrTwo = arrayTwo.filter((number, index, numbers) => {
    return numbers.indexOf(number) !== index;
  });
  const onlyUniqueElementsArrTwo = coincidenceArrTwo.filter(function (
    item,
    pos
  ) {
    return coincidenceArrTwo.indexOf(item) == pos;
  });

  const concatArr = onlyUniqueElementsArrOne.concat(onlyUniqueElementsArrTwo);
  const coincidenceConcatArr = concatArr.filter((number, index, numbers) => {
    return numbers.indexOf(number) !== index;
  });
  return coincidenceConcatArr;
};

const resoult6 = isCoincidence(arrayOne, arrayTwo);
console.log(resoult6);
//

//Задание 6
console.log();
console.log("Задание 6");

const inputInt = 5;

const multiplicationTable = (sizeTable) => {
  let arr = Array(1 + sizeTable);
  for (let i = 1; i < 1 + sizeTable; i++) {
    arr[i] = [...Array(1 + sizeTable)].map((_, j) => i * j);
  }

  let s = "";
  for (let i = 1; i < 1 + sizeTable; i++) {
    s += arr[i].slice(1).join(" ") + "\n";
  }
  return s;
};

const resoult7 = multiplicationTable(inputInt);
console.log(resoult7);
//

const numbersArray = [
  'one', 
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

const indexOfAll = (arr, val) => {
  let index = [], i = -1;
  while ((i = arr.indexOf(val, i + 1)) != -1) {
      index.push(i);
  }
  return index;
}

export const getCalibratedNumber = (data) => {
  let firstDigit, secondDigit;
  let firstDigitPosition, secondDigitPosition;

  // Get first Digit
  for(let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      firstDigit = data[i];
      firstDigitPosition = i;
      break;
    }
  }

  // Get second Digit
  for(let i = data.length; i >= 0; i--) {
    if (!isNaN(data[i])) {
      secondDigit = data[i];
      secondDigitPosition = i;
      break;
    }
  }

  numbersArray.map((num, key) => {
    if (data.indexOf(num) !== -1) {
      let all = indexOfAll(data, num);
      if (all[0] < firstDigitPosition) {
        firstDigit = key + 1;
        firstDigitPosition = all[0]; 
      }
      if (all[all.length - 1] > secondDigitPosition) {
        secondDigit = key + 1;
        secondDigitPosition = all[all.length - 1];
      }
    }
  });

  return firstDigit.toString() + secondDigit.toString();
} 
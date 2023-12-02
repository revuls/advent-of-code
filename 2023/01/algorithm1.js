export const getCalibratedNumber = (data) => {
  let firstDigit, secondDigit;

  // Get first Digit
  for(let i = 0; i < data.length; i++) {
    if (!isNaN(data[i])) {
      firstDigit = data[i];
      break;
    }
  }

  // Get second Digit
  for(let i = data.length; i >= 0; i--) {
    if (!isNaN(data[i])) {
      secondDigit = data[i];
      break;
    }
  }

  return firstDigit.toString() + secondDigit.toString();
} 
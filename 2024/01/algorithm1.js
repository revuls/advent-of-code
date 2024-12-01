export const getTotalDistances = (firstDistanceArray, secondDistanceArray) => {
  firstDistanceArray.sort();
  secondDistanceArray.sort();

  let sum = 0;

  for (let i = 0; i < firstDistanceArray.length; i++) {
    if (firstDistanceArray[i] > secondDistanceArray[i])
      sum = sum + (firstDistanceArray[i] - secondDistanceArray[i]);
    else
      sum = sum + (secondDistanceArray[i] - firstDistanceArray[i]);
  }
  
  return sum;
} 
export const getTotalDistances = (firstDistanceArray, secondDistanceArray) => {
  let sum = 0;

  firstDistanceArray.map(distance1 => {
    let totalTimes = 0
    secondDistanceArray.map(distance2 => {
      if (distance1 === distance2) totalTimes++;
    });
    sum = sum + (distance1 * totalTimes);
  });

  return sum;
} 
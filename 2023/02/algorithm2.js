export const getGamePower = (data) => {
  const line = data.split(': ');
  const gamesArray = line[1].split('; ');

  let totalRed = 1;
  let totalGreen = 1;
  let totalBlue = 1;

  gamesArray.map(game => {
    const roundsArray = game.split(', ');
    roundsArray.map(round => {
      const boxColorNumber = round.split(' ');
      const number = boxColorNumber[0];
      const color = boxColorNumber[1];

      switch (color) {
        case 'red': 
          if (parseInt(number, 10) > totalRed) totalRed = number;
          break;
        case 'green': 
          if (parseInt(number, 10) > totalGreen) totalGreen = number;
          break;
        case 'blue': 
          if (parseInt(number, 10) > totalBlue) totalBlue = number;
          break;
      }
    });
  });

  return totalRed * totalGreen * totalBlue;
} 
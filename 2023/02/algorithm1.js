const TOTAL_NUMBER = {
  'RED': 12,
  'GREEN': 13,
  'BLUE': 14
};

const isGameCorrect = round => {
  const boxColorNumber = round.split(' ');
  
  const number = boxColorNumber[0];
  const color = boxColorNumber[1];

  switch (color) {
    case 'red': return (number <= TOTAL_NUMBER.RED);
    case 'green': return (number <= TOTAL_NUMBER.GREEN);
    case 'blue': return (number <= TOTAL_NUMBER.BLUE);
  }
}

export const getPossibleGames = (data) => {
  const line = data.split(': ');
  const gameNumber = line[0].split(' ')[1];
  const gamesArray = line[1].split('; ');

  let isCorrect = true;

  gamesArray.map(game => {
    const roundsArray = game.split(', ');
    roundsArray.map(round => {
      if (!isGameCorrect(round)) {
        isCorrect = false;
      }
    });
  });

  return (isCorrect) ? gameNumber : 0;
} 
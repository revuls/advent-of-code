export const getCardsPoints = data => {
  const cards = data.split(': ')[1].split(' | ');

  let winningCardsArray = cards[0].split(' ').filter(num => num !== '');
  let numbersListArray = cards[1].split(' ').filter(num => num !== '');

  let totalWinnersInCards = 0;

  winningCardsArray.map(item => {
    if (numbersListArray.includes(item)) {
      totalWinnersInCards++;
    }
  });

  return totalWinnersInCards;
} 
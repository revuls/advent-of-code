const isBetweenNumbers = (num, range)  => num >= range[0] && num <= range[1] ? true : false;

export const isOverlapping = value => {
  const [firstSection, secondSection] = value.split(',');

  const section1 = firstSection.split('-').map(Number);
  const section2 = secondSection.split('-').map(Number);

  if (isBetweenNumbers(section1[0], section2) || isBetweenNumbers(section1[1], section2)) {
    return true;
  } else if (isBetweenNumbers(section2[0], section1) || isBetweenNumbers(section2[1], section1)) {
    return true;
  }

  return false;
}
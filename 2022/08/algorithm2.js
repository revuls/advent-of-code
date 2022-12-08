const arrayColumn = (arr, n) => arr.map(x => x[n]);

const getNumberOfTreesSmaller = (number, arrayOfElements, direction) => {
  let total = 0;
  if (direction === 1) {
    for (let i = 0; i < arrayOfElements.length; i++) {
      total++;
      if (arrayOfElements[i] >= number) break;
    }
  } else {
    for (let i = arrayOfElements.length - 1; i >= 0; i--) {
      total++;
      if (arrayOfElements[i] >= number) break;
    }
  }
  return total;
}

export const part2 = trees => {
  let bestTreeScore = 0;
  for(let i = 0; i < trees.length; i++) {
    for(let j = 0; j < trees[i].length; j++) {
      const treeHeight = trees[i][j];

      let scoreActualTree = 
        parseInt(getNumberOfTreesSmaller(treeHeight, trees[i].slice(0, j), 0), 10) * 
        parseInt(getNumberOfTreesSmaller(treeHeight, trees[i].slice(j + 1, trees.length), 1), 10) * 
        parseInt(getNumberOfTreesSmaller(treeHeight, arrayColumn(trees, j).slice(0, i), 0), 10) *
        parseInt(getNumberOfTreesSmaller(treeHeight, arrayColumn(trees, j).slice(i + 1, trees.length), 1), 10);

      if (scoreActualTree > bestTreeScore) bestTreeScore = scoreActualTree;
    }
  }
  return bestTreeScore;
}
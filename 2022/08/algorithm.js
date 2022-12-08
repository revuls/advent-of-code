const arrayColumn = (arr, n) => arr.map(x => x[n]);

const isNumberHigherInArray = (number, arrayOfElements) => arrayOfElements.every(item => number > item);

export const part1 = trees => {
  let totalTreesVisible = 0;

  for(let i = 0; i < trees.length; i++) {
    for(let j = 0; j < trees[i].length; j++) {
      if (i == 0 || j == 0 || i == trees.length - 1 || j == trees[i].length - 1) {
        totalTreesVisible++;
      } else {
        const treeHeight = trees[i][j];

        if (isNumberHigherInArray(treeHeight, trees[i].slice(0, j))) {
          totalTreesVisible++;
        } else if (isNumberHigherInArray(treeHeight, trees[i].slice(j + 1, trees.length))) {
          totalTreesVisible++;
        } else if (isNumberHigherInArray(treeHeight, arrayColumn(trees, j).slice(0, i))) {
          totalTreesVisible++
        } else if (isNumberHigherInArray(treeHeight, arrayColumn(trees, j).slice(i + 1, trees.length))) {
          totalTreesVisible++
        }
      }
    }
  }
  return totalTreesVisible;
}
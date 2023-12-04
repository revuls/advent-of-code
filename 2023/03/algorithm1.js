const isSymbol = (input) => input && input !== '.' && isNaN(input);

export const getEngineSchematic = (data) => {
  const dataMatrix = [];

  // Transform into matrix
  data.split(/\r?\n/).forEach(input => {
    dataMatrix.push([...input]);
  });

  const maxSizeI = dataMatrix.length;
  const maxSizeJ = dataMatrix[0].length;

  let totalSum = 0;

  for (let i = 0; i < dataMatrix.length; i++) {
    for (let j = 0; j < dataMatrix[i].length; j++) {
      if (!isNaN(dataMatrix[i][j])) {
        let engineNumber = dataMatrix[i][j];
        
        let numberStartPosJ = j;
        let numberEndPosJ = j;
        j++;
        while (!isNaN(dataMatrix[i][j])) {
          engineNumber += dataMatrix[i][j];
          numberEndPosJ = j;
          j++;
        }

        let isEngineNumber = false;

        // Check same line
        if (numberStartPosJ - 1 >= 0) {
          if (isSymbol(dataMatrix[i][numberStartPosJ - 1])) {
            totalSum += parseInt(engineNumber, 10);
            isEngineNumber = true;
          }
        }

        if (numberEndPosJ + 1 < maxSizeJ) {
          if (isSymbol(dataMatrix[i][numberEndPosJ + 1])) {
            totalSum += parseInt(engineNumber, 10);
            isEngineNumber = true;
          }
        }

        if (!isEngineNumber) {
          for (let n = numberStartPosJ - 1; n <= numberEndPosJ + 1; n++) {
            // Check previous line
            if ((i - 1 >= 0) && (n >= 0 && n < maxSizeJ)) {
              if (isSymbol(dataMatrix[i - 1][n])) {
                totalSum += parseInt(engineNumber, 10);
                break;
              }
            }
            // Check next line
            if ((i + 1 < maxSizeI) && (n >= 0 && n < maxSizeJ)) {
              if (isSymbol(dataMatrix[i + 1][n])) {
                totalSum += parseInt(engineNumber, 10);
                break;
              }
            }
          }
        }
      }
    }
  }
  // console.log(data.length);
  return totalSum;
} 
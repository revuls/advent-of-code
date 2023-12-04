const isSymbol = (input) => input && input === '*';

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
      let engineNumber = 1;
      let totalNumbers = 0;
      let newNumber = '';

      if (isSymbol(dataMatrix[i][j])) {
        // Check same line previous
        if (j - 1 >= 0) {
          if (!isNaN(dataMatrix[i][j - 1])) {
            let endPosition = j - 1;
            let startPosition = j - 1;
            
            while (!isNaN(dataMatrix[i][startPosition]) && startPosition > 0) {
              startPosition--;
            }

            for (let n = startPosition; n <= endPosition; n++) {
              if (!isNaN(dataMatrix[i][n])) {
                newNumber += dataMatrix[i][n];
              }
            }
            engineNumber = engineNumber * parseInt(newNumber, 10);
            newNumber = '';
            totalNumbers++;
          }
        }
        
        // Check same line next
        if (j + 1 <= maxSizeJ) {
          if (!isNaN(dataMatrix[i][j + 1])) {
            let endPosition = j + 1;
            let startPosition = j + 1;
            
            while (!isNaN(dataMatrix[i][endPosition]) && endPosition < maxSizeJ) {
              endPosition++;
            }

            for (let n = startPosition; n <= endPosition; n++) {
              if (!isNaN(dataMatrix[i][n])) {
                newNumber += dataMatrix[i][n];
              }
            }
            engineNumber = engineNumber * parseInt(newNumber, 10);
            newNumber = '';
            totalNumbers++;
          }
        }

        // Check previous line
        for (let n = j - 1; n <= j + 1; n++) {
          if ((i - 1 >= 0) && (n >= 0 && n < maxSizeJ)) {
            if (!isNaN(dataMatrix[i - 1][n])) {
              newNumber = '';
              let endPosition = n;
              let startPosition = n;
              while (!isNaN(dataMatrix[i - 1][startPosition]) && startPosition > 0) {
                startPosition--
              }
              while (!isNaN(dataMatrix[i - 1][endPosition]) && endPosition < maxSizeJ) {
                endPosition++;
              }
              for (let m = startPosition; m <= endPosition; m++) {
                if (!isNaN(dataMatrix[i - 1][m])) {
                  newNumber += dataMatrix[i - 1][m];
                  dataMatrix[i - 1][m] = '.';
                }
              }
              engineNumber = engineNumber * parseInt(newNumber, 10);
              totalNumbers++;
            }
          }
        }
        // Check next line
        for (let n = j - 1; n <= j + 1; n++) {
          if ((i + 1 >= 0) && (n >= 0 && n < maxSizeJ)) {
            if (!isNaN(dataMatrix[i + 1][n])) {
              newNumber = '';
              let endPosition = n;
              let startPosition = n;
              while (!isNaN(dataMatrix[i + 1][startPosition]) && startPosition > 0) {
                startPosition--
              }
              while (!isNaN(dataMatrix[i + 1][endPosition]) && endPosition < maxSizeJ) {
                endPosition++;
              }
              for (let m = startPosition; m <= endPosition; m++) {
                if (!isNaN(dataMatrix[i + 1][m])) {
                  newNumber += dataMatrix[i + 1][m];
                  dataMatrix[i + 1][m] = '.';
                }
              }
              engineNumber = engineNumber * parseInt(newNumber, 10);
              totalNumbers++;
            }
          }
        }
      }
      
      if (totalNumbers > 1) {
        totalSum += engineNumber;
      }
      totalNumbers = 0;
      engineNumber = 1;
    }
  }
  
  return totalSum;
} 
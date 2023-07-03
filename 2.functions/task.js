function getArrayParams(...arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((a,b)=>a+b);
  let avg = +(sum/arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  return arr.length ? arr.reduce((a,b)=>a+b) : 0;
}

function differenceMaxMinWorker(...arr) {
  return arr.length ? Math.max(...arr) - Math.min(...arr) : 0;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (let i = arr.length; i--;) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]
    } else {sumOddElement += arr[i]};
  }
  return arr.length ? sumEvenElement - sumOddElement : 0;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = arr.length; i--;) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement ++;
    }
  }
  return arr.length ? sumEvenElement/countEvenElement.toFixed(2) : 0;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  for (let i = arrOfArr.length; i--;) {
    let result = func(...arrOfArr[i]);
    (result > maxWorkerResult) && (maxWorkerResult = result);
  }
  return maxWorkerResult;
}

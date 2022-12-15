function rangeOfNumbers(startNum, endNum) {
  if (startNum <= endNum) {
    const countArray = rangeOfNumbers(startNum + 1, endNum);
    countArray.unshift(startNum);
    console.log(countArray)
    return countArray;

  } else if (startNum == endNum) {
    const countArray = [startNum];
    return countArray;
  }
  return [];
};

rangeOfNumbers(6, 9);
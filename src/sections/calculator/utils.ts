export const calculateSum = (sumArray: string[]) => {
  let sum = 0;
  const wholeNumberArray: string[] = [];
  let wholeNumber = "";
  sumArray.forEach((i) => {
    if (!isNaN(Number(i))) {
      wholeNumber += i;
    } else {
      wholeNumberArray.push(wholeNumber);
      wholeNumber = "";
      wholeNumberArray.push(i);
    }
  });

  wholeNumberArray.push(wholeNumber);
  sum = Number(wholeNumberArray.find((element) => !isNaN(Number(element))));

  wholeNumberArray.forEach((element) => {
    if (element === "+") {
      sum =
        sum + Number(wholeNumberArray[wholeNumberArray.indexOf(element) + 1]);
    }
    if (element === "-") {
      sum =
        sum - Number(wholeNumberArray[wholeNumberArray.indexOf(element) + 1]);
    }
    if (element === "x") {
      sum =
        sum * Number(wholeNumberArray[wholeNumberArray.indexOf(element) + 1]);
    }
    if (element === "/") {
      sum =
        sum / Number(wholeNumberArray[wholeNumberArray.indexOf(element) + 1]);
    }
  });
  return sum;
};

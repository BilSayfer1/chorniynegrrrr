function numbers(max) {
  let number1 = 0;
  let number2 = 1;
  let moment = 0;

  while (true) {
    moment = number1 + number2;
    console.log(moment);

    if (moment > max) {
      break;
    }

    number1 = number2;
    number2 = moment;
  }
}

numbers(+prompt('Введите число: '));

function sort() {
  let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  let copyArr = arr.slice();

  for (let element of copyArr) {
    let isSorted = true;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < copyArr.length - 1; i++) {
        if (copyArr[i] > copyArr[i + 1]) {
          [copyArr[i], copyArr[i + 1]] =
            [copyArr[i + 1], copyArr[i]];
          isSorted = false;
        }
      }
    }
    console.log(copyArr,element);
  }
  
}
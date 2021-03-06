// Task 2.2: Replace With Alphabet Position
const alphabetReplace = (text) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return text
    .toLocaleLowerCase()
    .split("")
    .map((str) => {
      const elem = alphabet.indexOf(str);
      if (elem > -1) {
        return alphabet.indexOf(str) + 1;
      }
    });
};
console.log(alphabetReplace("The sunset sets at twelve o' clock."));

const alphabetByUsingFor = (text) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    const element = text[i].toLocaleLowerCase();
    if (alphabet.indexOf(element) > -1) {
      arr.push(alphabet.indexOf(element) + 1);
    }
  }
  return arr.join(" - ");
};
console.log(alphabetByUsingFor("The sunset sets at twelve o' clock."));

// Task 2.3: Square Every Digit
const digits = (num) => {
  return num.map((nums) => Math.pow(nums, 2)).join("");
};
console.log(digits([9, 1, 1, 9]) == 811181);
console.log(digits([3, 2, 3]) == 949);
console.log(digits([1, 0, 1]) == 101);

const digitNumber = (num) => {
  let arr = [];
  for (let i = num.length - 1; i >= 0; i--) {
    let s = Math.pow(num[i], 2);
    arr.push(s);
  }
  return arr.reverse().join("");
};
console.log(digitNumber([9, 1, 1, 9]) == 811181);
console.log(digitNumber([3, 2, 3]) == 949);
console.log(digitNumber([1, 0, 1]) == 101);

const arrayFrom = (num) => {
  return Array.from(num.toString(), (x) => Math.pow(x, 2)).join("");
};

console.log(arrayFrom(9119) == 811181);
console.log(arrayFrom(323) == 949);
console.log(arrayFrom(101) == 101);

let numOfDigit = (num) => {
  return num
    .toString()
    .split("")
    .map((x) => Math.pow(x, 2))
    .join("");
};

console.log(numOfDigit(9119) == 811181);
console.log(numOfDigit(323) == 949);
console.log(numOfDigit(101) == 101);

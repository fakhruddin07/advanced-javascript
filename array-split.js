// array slice method
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const part = nums.slice(2, 6);
console.log(part);
console.log(nums);


// array splice method
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const removed = num.splice(3, 4);
console.log(removed);
console.log(num);


// array join element
const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const together = count.join('.');
console.log(together);
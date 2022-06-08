//Odds in interval
// var countOdds = function(low, high) {
//     let count = 0;
//     for(let i = low; i<=high; i++){
//         if(i%2==1){
//             count = count+1;
//         }
//     }
//     return count;
// };
// console.log(countOdds(3,7));


//Good Pairs

// let count = 0;
// var numIdenticalPairs = function(nums) {
//     // console.log(nums.length);
//     for(let i = 0; i < (nums.length) ; i++){
//          for(let j = i+1 ; j <= nums.length ; j++){
//              if(nums[i]==nums[j]){
//                  count += 1;
//             }
//         }
//     }
//     return count;
// };

// console.log(numIdenticalPairs([1,1,1,1]));


//Salary Average exclude min and max

// var average = function(salary) {
//     salary.sort(function(a, b){return a - b});
//     salary.splice(0,1);
//     salary.splice(salary.length-1,1);
//     let total = salary.reduce((acc,curr)=> acc+curr);
//     let average = total/(salary.length)
//     return average;
// };
// let salary = [25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000];
// console.log(average(salary));


// let salary = [25000,48000,57000,86000,33000,10000,42000,3000,54000,29000,79000,40000];
// console.log(salary.sort(function(a, b){return b-a}));


// Number of 1 bits

// var hammingWeight = function(n) {
//     return n;
    // let count = 0;
    // let array = n.split("").map(Number);
    // return array;
//   for(let i = 0; i<n.length; i++){
//       if(n[i]==1){
//           count += 1;
//       }
//   }  
//   return count;
// };
// var inp = 01000011;
// console.log(hammingWeight(inp));







// let input1 = userInput[0].map(Number);
// let input2 = userInput[1].splice(" ").map(Number);
// let input3 = userInput[2].splice(" ").map(Number);
// let count = 1;
// for(let i = (input3.length-1); i>=0; i--){
//     if(input2[0] != input[i]){
//         count += 1;
//     }
//     else {
//         break;
//     }
// }
// console.log(count);

// const expr = "Mangoes";
// switch (expr) {
//     case 'Oranges':
//       console.log('Oranges are $0.59 a pound.');
//       break;
//     case 'Apples':
//       console.log('Apples are $0.32 a pound.');
//       break;
//     case 'Bananas':
//       console.log('Bananas are $0.48 a pound.');
//       break;
//     case 'Cherries':
//       console.log('Cherries are $3.00 a pound.');
//       break;
//     case 'Mangoes':
//     case 'Papayas':
//       console.log('Mangoes and papayas are $2.79 a pound.');
//       break;
//     default:
//       console.log('Sorry, we are out of ' + expr + '.');
//   }
  
  
//   console.log("Is there anything else you'd like?");
  

// var subtractProductAndSum = function(n) {
//   console.log(n);
//   let array = (n+"").split("").map(Number);
//   console.log(array);
  // let prodRes = 1;
  // let sumRes = 0;
  // for(let values of array){
  //     prodRes = prodRes * values;
  //     sumRes = sumRes + values;
  // }
  // let res = Math.abs(prodRes-sumRes);
  // console.log(res);
  
// };
// subtractProductAndSum(4421);


//Scalene triangle perimeter

var largestPerimeter = function(nums) {
   nums.sort();
  for(let i = (nums.length-3) ; i>=0 ; --i){
    if(nums[i]+nums[i+1]>nums[i+2]){
      let res = nums[i]+nums[i+1]+nums[i+2];
      return res;
    }
    else{
      return 0;
    }
  }
};
let nums = [1,2,3,7,8,6,5];
console.log(largestPerimeter(nums));


// class Solution {
//   public int largestPerimeter(int[] A) {
//       Arrays.sort(A);
//       for (int i = A.length - 3; i >= 0; --i)
//           if (A[i] + A[i+1] > A[i+2])
//               return A[i] + A[i+1] + A[i+2];
//       return 0;
//   }
// }
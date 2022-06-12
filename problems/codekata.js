//consecutive 1's

// const prompt = require ('prompt-sync')();
// let a= prompt('Enter the Numbers: ');
// let array = a.split("").map(Number);
// console.log(array);
// let result = [];
// let count = 0;
// let max = 0;
// for(let i = 0; i<=array.length ; i++) {
//     if(array[i] == 1){
//         count=count+1;
        
//     }
//      else {
//          console.log("Count",count);
//          result.push(count);
//          console.log(result);
//          count = 0;    
//         }
// }


// Right angle Triangle 

// let a = 5;
// let result = [];
// for(i=0;i<=a;i++){
//     result.push("*");
//     console.log(result.join(" "));
// }


//Triangle

// let a = 5;
// let result = [];
// for (i=0;i<5;i++){
//     result.push(" ");
// }
// let index = ((result.length)-1)/2;
// //  console.log(index);

// for(let i = index, j = index ; i>=0 ,j<result.length ; i--, j++){
//     result[i]= "*";
//     result[j]="*";
//     console.log(result.join(" "));
// }

// Co-Prime Number

// let a = "3 5";
// let array0 =a.split(" ").map(Number);
// let count = 0;
// console.log(array0);
// let max = Math.max(...array0);
// for(let i = 2; i <=max; i++ ){
//     if(array0[0] % i == 0 && array0[1] % i == 0){
//         count = count+1;
//     }
// }
// if (count == 0){
//     console.log("1");
// }
// else {
//     console.log("0");
// }



//Palindrome or not

// const prompt = require ('prompt-sync')();
// let a= prompt('Enter the Number: ');

// let inpArr = [];
// let resCount  = 0;
// for(let i = 1;i <= a;i ++){
//     inpArr.push(i);
// }
// for(let j = 0;j < inpArr.length;j ++){
//     array0 = inpArr[j]+"";
//     array0 = array0.split("");
//     array1 = array0.slice().reverse();
//     // console.log(array0);
//     // console.log(array1);
//     let count0 = 0;
//     for (let k = 0;k < array0.length; k++){
//         if(array0[k] == array1[k]){
//             count0 += 1            
//         }
//         else{
//             break;
//             count0 = 0;
//         }
//     }
//     if(count0 == array0.length){
//         resCount +=1 ;
//     }
// }
// console.log(resCount);

// Given 3 numbers a,b,c print a*b mod c.


//To find duplicate in Array
// const numbers = [1, 5, 2, 3, 2, 4, 5, 5, 5, 6];

// const unique = Array.from(new Set(numbers));
// console.log(unique);

//To return first negative number;

// let input = [7, "1 2 3 4 5 6 7", 3];
// let array  = input[1].split(" ").map(Number);
// let window_size = +input[2];
// let result = [];
// let count = 0;

// function getFirstnegative(array,window_size,result,count){
//     for(let i =0; i <= array.length-window_size; i++){
//         for(let j = i; j < i+window_size; j++){
//             if(array[j] < 0){
//                 result.push(array[j]);
//                 break;
//             }
//             else
//             count += 1;
//         }
//     if (count==3){
//         result.push(0);
//     }
//     count = 0;
//     }
//     return result.join(" ");
// }
// console.log(getFirstnegative(array,window_size,result,count)) ;


//Sort two dimensional matrix
// let  a = ["3 3","87 21 34","89 32 78","12 23 45"];
// let inputs = a[0].split(" ").map(Number);
// let noOfArray = inputs[0];
// let lengthOfArray = inputs[1];
// let array = [];

// for (let i = 1; i<=noOfArray; i++){
//     let b = a[i];
//     let inpArr = b.split(" ").map(Number);
//     for(let values of inpArr){
//         array.push(values);
//     }
// }
// let resArray = array.sort();
// console.log(resArray);
// for(let i = 0; i<=resArray.length-3; i+=3){
//     let res = resArray.slice(i,i+3);
//     console.log(res.join(" "));
// }


//Output the total unit of Air encapsulated between the walls of chamber.

// let a = [9, "2 1 2 1 2 1 2 1 2"];

// let lengthOfArray = a[0];
// let input_array = a[1].split(" ").map(Number);
// let ans = 0;    

// for(let i = 1; i < lengthOfArray-1; i++){
//     if,(input_array[i] < input_array[i-1] && input_array[i]<input_array[i+1]){
//         let diff = Math.min(input_array[i-1],input_array[i+1]);
//         ans += diff-input_array[i];
//     }
// }


// Net goal rate of team is calculated

// No of goals(team)- sum of(no of goals by last 3 teams)

// let a = [5,"95 85 75 12 11"];
// let lengthOfArray = a[0];
// let array = a[1].split(" ").map(Number);
// let lastThree = array.slice(lengthOfArray-3,lengthOfArray);
// let sum = lastThree.reduce((sum,arr)=>sum+arr);
// array = array.map(element => element-sum);
// console.log(array.join(" "));


//least occurring element

// let a = [9,"1 6 4 56 56 56 6 4 2"];

// let lengthOfArray = a[0];
// let array = a[1].split(" ").map(Number);

// let resArray = [];

// for(let num of array){
//     let count = 0;
//     for (let values of array){
//         if(num == values){
//             count += 1;
//         }
//     }
//     if(count == 1){
//         resArray.push(num);
//     }
// }
// console.log(resArray.reverse().join(" "));  


//Sort string in Alphabatic order.

// let a = [3,"InfinityWar EndGame Avengers"];

// let array = a[1].split(" ");

// console.log(array.sort().join(" "));

//Sort matrix Array.
let a  = ["3 3","23 15 16","357 65 10"];

let inputs = a[0].split(" ").map(Number);

let array  = [];
let array1 = [];
let res = [];

for(let i = 1; i <= inputs.length; i++){
    let b = a[i];
    array = b.split(" ").map(Number);
    array1.push(array);
}
let res1 = array1[0].sort();
pushData(res,res1);
let res2 = array1[1].sort(function(a, b){return b - a});
console.log(res2);
pushData(res,res2);
function pushData(res,inp){
    for (let i = 0; i < inp.length; i++){
        res.push(inp[i]);
    }
    return res;
}
console.log(res.join(" "));



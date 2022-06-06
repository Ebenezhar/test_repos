const num = [5,10,15];
const arr = num.map(myFun);
function myFun (numb) {
    return numb*10;
} 
myFun();
console.log(num);
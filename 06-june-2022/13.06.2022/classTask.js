// class student {
//     constructor(name,dept,...marks) {
//         this.name = name;
//         this.dept = dept;
//         this.marks = marks;
//     }
//     getAvg(){
//         return this.total();

//     }
//     total(){
//         let total = 0;
//         this.marks.map((value)=>total += value);
//         return total;
//     }

// }

// let Ebi = new student("Ebi","EEE",1,2,3,3,5);
// console.log(Ebi.total);

function createObj(name,dept,...marks){
    return {
        name,
        dept,
        marks,
    }

}

let avg = function()
{
    return total/marks.length;
}


let jonh = createObj("john","Mech",1,2,3);

console.log(jonh.getTotal());
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

// let stark = {
//     name: "Tony",
//     dept: "Avengers",
//     address: {state: "New York", country: "United States"},
// }
// const {name,dept,address} = stark;
// const {state,country} = address;
// console.log(name,dept,state);

class student {
    constructor(name,dept,...marks){
        this.name = name;
        this.dept = dept;
        this.marks = marks;
    }
    getTotal(){
        let total = 0;
        let markArray = this.marks;
        markArray.map(value => total += value);
        return total;
    }
    getAvg(){
        let markArray = this.marks;
        let avg = this.getTotal()/markArray.length;
        return avg;
    }
    getGrade(){
        if(this.getAvg()>90) return "Grade A";
        else if(this.getAvg()>80) return "Grade B";
        else if(this.getAvg()>60) return "Grade C";
        else if(this.getAvg()>50) return "Grade D";
        else return "Grade F"
    }
    print(){
        return `Name:${this.name},
        Dept: ${this.dept},
        Total marks:${this.getTotal()},
        Average Marks:${this.getAvg()},
        Grade:${this.getGrade()}`
    }
} 
const affleck = new student("Ben","justice",50,90,85,75);
// console.log(affleck);
// console.log(affleck.getTotal());
// console.log(affleck.getAvg());
console.log(affleck.print());


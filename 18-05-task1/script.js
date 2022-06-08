function createData(fName,gen,food,state,country){
    let contain = document.createElement("tr");
    contain.setAttribute("id","list");
    contain.innerHTML = `<td>${fName}</td>
    <td>${gen}</td>
    <td>${food}</td>
    <td>${state}</td>
    <td>${country}</td>`
    let wet = document.querySelector("#table");
    wet.append(contain);
}

function getData(){
    let fName = document.querySelector("#firstName").value;
    console.log("Name:",fName);
    let gen = document.querySelector("#gen").value;
    console.log("Gender: ",gen);
    let food = document.querySelector("#food").value;
    console.log("Food: ",food);
    let state = document.querySelector("#state").value;
    console.log("Food: ",state);
    let country = document.querySelector("#country").value;
    console.log("Food: ",country);
    createData(fName,gen,food,state,country);
}

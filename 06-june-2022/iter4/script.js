
function createBooks(element){
let contain = document.createElement("div");
contain.setAttribute("class","contain1");
contain.innerHTML = `
            <h3 class="head">${element.name}</h3>
             <div class="explain">
             <p class="isbn com">ISBN: ${element.isbn}</p>
             <p class="page com">Total Pages: ${element.numberOfPages}</p>
             <p class="author com">Author: ${element.authors}</p>
             <p class="publish com">Publisher: ${element.publisher}</p>
             <p class="release com">Released on ${element.released}</p>
             <span id="charac" class="characters com">Characters</span>`
  document.querySelector("#contain1").append(contain);
}
 

async function createContainer () {
var inp = document.querySelector("#inp2").value;
console.log(inp);
let inputUrl = await fetch(`https://anapioficeandfire.com/api/books/${inp}`);
let result = await inputUrl.json();
console.log(result);


if(Array.isArray(result)){
    result.forEach(element => {
        console.log(element);
        createBooks(element);
    });
   }
   else{
    document.querySelector("#contain1").innerHTML = "";
    createBooks(result);
   }

}
window.addEventListener('DOMContentLoaded', (event) => {
    createContainer();
});
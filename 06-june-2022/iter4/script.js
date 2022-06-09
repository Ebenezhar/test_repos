function createBooks(element){
    let contain = document.createElement("div");
    contain.setAttribute("class","books");
    contain.innerHTML = `
    <h3 class="head">${element.name}</h3>
    <div class="explain">
    <p class="isbn com">ISBN: ${element.isbn}</p>
    <p class="page com">Total Pages: ${element.numberOfPages}</p>
    <p class="author com">Author: ${element.authors}</p>
    <p class="publish com">Publisher: ${element.publisher}</p>
    <p class="release com">Released on ${element.released}</p>
    <div id="charac-${element.isbn}" class="characters com"></div>`
    document.querySelector("#contain1").append(contain);
    var identity = element.isbn;
    //console.log("iden",identity);
    let characterUrls = element.characters;
    createCharacters(identity,characterUrls);   
}
function createSingleCharacter (identity,character) {
    let contain2 = document.createElement("div");
    contain2.setAttribute("class","charer")
    contain2.innerText = character.name;
    console.log(character.name);
    document.querySelector(`#charac-${identity}`).append(contain2);
    if((character.name).length>2){ 
        console.log("len:",(character.name).length)
        console.log("isbn: ",identity);
        return true;
    }
    return false;
}
async function fetchCharacter (identity,characterUrl){
    let response = await fetch(characterUrl);
    let character = await response.json(); 
    return createSingleCharacter(identity,character);
}

function createCharacters (identity,characterUrls){  
    var count = 0;  
    for (let i = 0 ; i < 10; i++ ){
        let characterUrl  = characterUrls[i];
        let isValidchar = fetchCharacter(identity,characterUrl);  
        console.log("cha",isValidchar);
        if(isValidchar==1){
            debugger;
            count++;
            console.log("Count: ",count)
        }
        if(count == 5){
            console.log("completed");
            break;
        }
    }
}   


async function createContainer () {
    var inp = document.getElementById("inp2").value;
    console.log("inp:",inp);
    let inputUrl = await fetch(`https://anapioficeandfire.com/api/books/${inp}`);
    let result = await inputUrl.json();
    console.log(result);
    if(Array.isArray(result)){
        result.forEach(element => {
            createBooks(element);
        });
    }
    else{
        document.querySelector("#contain1").innerHTML = "";
        createBooks(result);
    }

}
// window.addEventListener('DOMContentLoaded', (event) => {
//     createContainer();
// });



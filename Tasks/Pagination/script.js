async function getData(){
    let input = await fetch("https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json")
    let list_Items = await input.json();
    console.log("res",list_Items);

    const list_element = document.querySelector("#list");
    const pagination_element = document.querySelector("#pagination");

    let current_page = 1;
    let rows = 5;
    displayList(list_Items,list_element,rows,current_page);
    setupPagination(list_Items,pagination_element,rows,current_page);

}
getData();  

function setupPagination(items,wrapper,rows_per_page,current_page){
    wrapper.innerHTML = "";
    let page_count = Math.ceil(items.length / rows_per_page);
    for(let i = 1; i <= page_count; i++){
        let btn = paginationButton(i,items,current_page);
        console.log(btn);
        wrapper.appendChild(btn);
    }
}
function paginationButton(page,item,current_page) {
    let button = document.createElement("button");
    button.innerText = page;
  
    if(current_page == page) {
        button.classList.add("active");
    }

    button.addEventListener("click",function(){
        current_page = page;
        displayList(items,list_element,rows,current_page);
    })

    return button;
}

function displayList (items,wrapper,rows_per_page,page) {
    wrapper.innerHTML = "";
    page--;

    let start = page*rows_per_page;
    let end = start+rows_per_page;  
    let paginated_items = items.slice(start,end);
    for(let i = 0; i < paginated_items.length; i++){
        let item_name = paginated_items[i].name;
        let item_email = paginated_items[i].email;
        let item_element1 = document.createElement("div");
        item_element1.classList.add("item-name");
        item_element1.innerText = `Name: ${item_name},\nEmail: ${item_email}`;
        wrapper.appendChild(item_element1);        
    }
} 

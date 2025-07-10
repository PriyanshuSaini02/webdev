// const listOfProducts=document.getElementById('listOfProducts')

// listOfProducts.addEventListener("click",(event)=>{
//     if(event.target.tagName=="LI"){
//         console.log("clicked on: ",event.target.textContent)
//     }
// })

// const newProduct=document.createElement('li')
// newProduct.textContent="Mobile Phone"
// listOfProducts.appendChild(newProduct)


// const searchBox = document.getElementById("searchHandler")
// searchBox.addEventListener("input", (event) => {
//         console.log(event.target.value);
// })

const searchBox = document.getElementById("searchHandler")
function time(){
    let timeoutId;
    function search() {
        searchBox.addEventListener("input", (event) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                console.log(event.target.value);
            }, 2000);
        })
    }
    search();
}
time()




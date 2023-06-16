
let addedProducts=JSON.parse(localStorage.getItem("Products"))
console.log(addedProducts)
addedProducts.map(function (elem, i) {
    

    let box = document.createElement("div"); //to create div

    let product_img = document.createElement("img");//create img tag
    product_img.setAttribute("src", elem.url);//create src for link
    product_img.setAttribute("id", "image");//giving id image in div for style

    let title = document.createElement("p");//create p
    title.innerText = elem.name; //giving name in p

    let price_tag = document.createElement("p");//create p
    price_tag.innerText = elem.price;//giving price in p

    let btn = document.createElement("button");//create button to remove item
    btn.innerText = "sold"; //giving value remove
    btn.setAttribute("id", "sold")
    btn.addEventListener("click", function()
    {
      deleteItem(elem,i)
    } );

    box.append(product_img, title, price_tag, btn);
    document.querySelector("body").append(box);
  });

  function deleteItem(elem,i) {
    event.target.parentNode.remove();
    addedProducts=addedProducts.splice(i,1);
    localStorage.setItem("products",JSON.stringify(addedProducts))
  }

 


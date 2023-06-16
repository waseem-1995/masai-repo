
function Product(name,brand,price,description) {
  // Complete the constructor function
  this.name=name;
  this.brand=brand;
  this.price=price;
  this.description=description;
  this.sold=false;
}
Product.prototype.changePrice=function(price){
    this.price=price
}

Product.prototype.toggleStatus=function(){
  this.sold= !this.sold
}

// Create these two methods in Product prototype :-
// changePrice
// toggleStatus

// Do not change this
export default Product;

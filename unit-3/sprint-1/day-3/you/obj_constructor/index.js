

 
function PumaProducts(n,c,i,p,g){
    this.name=n;
    this.cateogry=c;
    this.image=i;
    this.price=p;
    this.gender=g;


}
let arr=JSON.parse(localStorage.getItem("Products")) || [];
 console.log(arr)

//let arr=[]
function addProduct(e){
    e.preventDefault();

    let form= document.getElementById("product_form")

    let name=form.name.value;
    let cateogry=form.cateogry.value;
    let image=form.image.value;
    let price=form.price.value;
    let gender=form.gender.value;

    let p1=new PumaProducts(name,cateogry,image,price,gender)
    arr.push(p1)
     
    localStorage.setItem("Products",JSON.stringify(arr))
}

//<script> function PumaProducts(n, c, i, p, g) { this.name = n; this.cateogry = c; this.image = i; this.price = p; this.gender = g; } // let arr = JSON.parse(localStorage.getItem("Products")) || []; console.log(arr) let arr=[] function addProduct(e){ e.preventDefault(); let form = document.getElementById("product_form") let name = form.name.value; let cateogry = form.cateogry.value; let image = form.image.value; let price = form.price.value; let gender = form.gender.value; let p1 = new PumaProducts(name, cateogry, image, price, gender) arr.push(p1) localStorage.setItem("Products", JSON.stringify(arr)) }</script>
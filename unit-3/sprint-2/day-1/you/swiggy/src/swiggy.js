function UserInfo(name,location) {
    this.name=name,
    this.location=location
}


function serveFood(food) {
    
    return(`Serving ${food} to ${this.name} in ${this.location}`)
   
}



function serveIn(name,location,food) {
   let x=new UserInfo(name,location)
   return serveFood.call(x,food)
}


function billNote(total) {
    return(`${this.name}'s bill is INR ${total}`)
}
function generateInVoice(name,location,quantity,price) {
    let x=new UserInfo(name,location)
    let total = quantity*price
    return billNote.apply(x,[total])

}



export { UserInfo, serveIn, serveFood, billNote, generateInVoice };

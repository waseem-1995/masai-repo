function MobileOs(props){
    let {list1,list2}=props
   console.log(list2)
    return(
        <div>
            <h1>Mobile Operating System</h1>
            <ul data-testid ="os-list">
            {list1.map(e=><li>{e}</li>)}
            </ul>

            {/* <h1>Mobile Manufacturers</h1>
            <ul data-testid = "manufacturers-list">
            {list2.map(e=><li>{e}</li>)} 
            </ul> */}
            
           
        </div>
    )
}
export default MobileOs
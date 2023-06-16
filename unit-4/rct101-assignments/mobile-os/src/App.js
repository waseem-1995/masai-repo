import "./App.css";
import MobileOs from "./components/MobileOS";


function App() {
  let list1=["Android","Blackberry","iPhone" ,"Windows Phone"]
  let list2=["Samsung","HTC","Micromax" ,"Apple"]
  return (
     <div>
      <MobileOs list1={list1}/>
      <MobileOs list1={list2}/>

      </div>
    )   
    
}

export default App;

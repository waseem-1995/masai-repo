
import React from "react";

function Pagination({current,onChange,total}) {
  const btnArr = new Array(total).fill(0);
  return (
  <div data-testid="page-container">
    {btnArr.map((ele,index)=>{
      return(
        <button key={index+Math.random()} style={{
          margin:"0.5rem",
          padding:"0.5rem",
          borderColor : current === index+1 && "red" ,
          borderRadius:"5px",
          }}
          onClick={()=>onChange(index+1)}
          >
            {index+1}
        </button>
      )
    })}
  </div>
 
  );
}

export default Pagination;


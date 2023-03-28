import React, { useState } from "react";

function Third(props) {
    
    const[inputtext,setInputText] = useState("");
  return (
    <div>
      <h1 className="third">This is the third page</h1>
      <p>{props.textT}</p>

      <input onChange={(e)=>{
        setInputText(e.target.value);
      }}/>

      <p>{"your text input is"+inputtext}</p>
      {
      props.data.map((item,index)=>{
        return <h4>{index+1+ " " +item.name}</h4> 
      })
      }
    </div>
  );
}

export default Third;

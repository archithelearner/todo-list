import React from 'react';


const Items = (props) =>{
    return(
        <div className = "item">
        
            <span className = "item-name">
            <button className ="remove-item" onClick={()=>
            props.removeItem(props.id)}>Delete Me</button>
            {props.name}</span>
            <div className="number">{props.number}</div>
            
            
                </div>
        
            
    );
}




export default Items;














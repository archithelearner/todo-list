import React from 'react';


const Header = (props)=>{
    return(
        <header>
            <span className="stats">items:{props.totalitems}</span>

            <h1>{props.title}</h1>
            <span className="stats2">quantity</span>
            
        </header>
        
    );
}










export default Header;
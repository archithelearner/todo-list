import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './components/App';

/*const Header = (props)=>{
    return(
        <header>
            <span className="stats">items:{props.totalitems}</span>

            <h1>{props.title}</h1>
            <span className="stats2">quantity</span>
            
        </header>
        
    );
}

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


class App extends React.Component {
    state = { 
        items:[
            {name: "grapes",number:"2kg", id:1 },
            {name: "apples", number:"3kg",id:2},
            {name: "oranges", number:"8" ,id:3},
            {name: "bananas",number:"10",id:4} ]
        };
        handleRemoveItem = (id)=>{
            this.setState(prevState=>{
                return{
                items:prevState.items.filter(p=>p.id!==id)
                };
            });
            }


        render(){
            return(
                <div className = 'My-To-Do-List'>
    <Header title="My To Do List" totalItems={this.state.items.length}/>
    {this.state.items.map(items=>
            <Items 
            name = {items.name}
            id={items.id}
            key = {items.id.toString()}    
             number={items.number} 
            removeItem={this.handleRemoveItem}
           
 />
   
            )}

        </div>
            );
            }}*/
            
            


ReactDOM.render(
    <App/>,
    
    document.getElementById('root')
);


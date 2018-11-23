import React, { Component } from 'react';
import Header from './Header';
import Items from './Items';
import AddItemForm from './AddItemForm';


class App extends React.Component {
    state = { 
        items:[
            {name: "grapes",number:"2kg", id:1 },
            {name: "apples", number:"3kg",id:2},
            {name: "oranges", number:"8" ,id:3},
            {name: "bananas",number:"10",id:4} ]
        };


        handleAddItem = (name)=> {
            //console.log(...this.state.players)
        this.setState(prevState => {
        return{
            items:[
            ...prevState.Items,
            //...this.state.players,
            {
                name,
                score:0,
                id:this.prevItemId+=1
            }
            
        
            ]
            }
        })
        }








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
            <AddItemForm addItem={this.handleAddItem}/>

        </div>
            );
            }}
            
            







export default App;
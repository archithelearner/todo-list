import React, { Component } from 'react';


class AddItemForm extends Component{
   
    ItemInput = React.createRef();
    
    handleSubmit=(e) =>{
        
        e.preventDefault();
        this.props.addItem(this.ItemInput.current.value);
        e.currentTarget.reset();
        this.setState({value:''});
    }
    render(){
        // console.log(this.state.value)
        return(

            <form onSubmit={this.handleSubmit}>
                
                <input
                type = "text"
                ref = {this.ItemInput}
                
                placeholder = "Enter a Item's name"
                />
                <input
                type = "submit"
                value = "Add "
                />
            </form>
            
        )
    }
}




















export default AddItemForm;
import React, { Component } from 'react';

import "../style/product.css";

class Product extends Component {
    // state = {  
    //     name: this.props.product.name,
    //     count: this.props.product.count,
    // } 
    getClasses(){
        return this.props.product.count===0
            ?{ color: "red" }
            :{color:"blue"};
    }
    
    render() {
        return <div className="body">
            {this.props.children}
            <span>{this.props.product.name}</span>
            <span style={this.getClasses()}>{this.props.product.count}</span>
            <button className='inc-b' onClick={()=>this.props.onincrement(this.props.product)}>+</button>
            <button className='dec-b' onClick={()=>this.props.ondecrement(this.props.product)}>-</button>
            <button className='del-b' onClick={()=>this.props.onDelete(this.props.product)}>Delete</button>
        </div>;
    }
}
 
export default Product;
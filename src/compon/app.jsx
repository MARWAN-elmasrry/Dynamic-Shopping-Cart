import React, { Component } from 'react';

import NavBar from './navBar';
import ShoppingCart from "./shoppingCart"

class App extends Component {
    state = { 
        products:[
            {id:1,name:"Burger",count:1},
            {id:2,name:"Frise",count:2},
            {id:3,name:"Cola",count:3},
            {id:4,name:"icecream",count:1},
            {id:5,name:"cheken",count:2}
        ]
    }
    IncrementHandler = product => {
        const products = [...this.state.products];
        const index=products.indexOf(product);
        products[index]={...products[index]};

        products[index].count++;

        this.setState({products})  
    }
    decrementHandler = product => {
        const products = [...this.state.products];
        const index=products.indexOf(product);
        products[index]={...products[index]};

        products[index].count--;

        this.setState({products})  
    } 
    HandelDelete=product=>{
        // edit
        const newProducts=this.state.products.filter((p)=>p.id!==product.id)
        // setstate
        this.setState({products: newProducts})
    }
    HandleReset=()=>{
        // Clone
        let products=[...this.state.products];
        // Edit
        products = products.map(p => {
            p.count=0;
            return p;
        })
        // Setstat
        this.setState({products:products});
    }
    render() { 
        return <div className="body">
            <NavBar productsCount={this.state.products.filter(p=> p.count>0).length} />
            <ShoppingCart 
                products={this.state.products}
                onIncrement={this.IncrementHandler}
                onDecrement={this.decrementHandler}
                onDelete={this.HandelDelete}
                onReset={this.HandleReset}   
            />
        </div>;
    }
}
 
export default App;
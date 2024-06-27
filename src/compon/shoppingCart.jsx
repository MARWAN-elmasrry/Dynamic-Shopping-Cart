import React, { Component } from 'react';

import Product from './product';

class ShoppingCart extends Component {
    
    render() { 
        return <div className="body">
            <h1>Shopping Cart</h1>
            <button onClick={this.props.onReset}>Reset</button>
            {this.props.products.map(product=>(
                <Product key={product.id}
                onDelete={this.props.onDelete}
                onincrement={this.props.onIncrement}
                ondecrement={this.props.onDecrement}
                product={product} />
            ))}
        </div>;
    }
}
 
export default ShoppingCart;
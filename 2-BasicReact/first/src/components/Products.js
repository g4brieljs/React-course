import React, { Component } from 'react';

class Products extends Component{
    state = [
        { id: 1, name: 'Camisa ReactJS', precio: 30 },
        { id: 2, name: 'Camisa VueJS', precio: 30 },
        { id: 3, name: 'Camisa AngularJS', precio: 30 },
    ]
    render() {
        return (
            <h1>Lista de productos</h1>
        );
    }
}

export default Products;
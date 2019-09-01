import React, { Component, Fragment } from 'react';
import ProductOnly from './ProductOnly';

class Products extends Component{

    state = {
        products : []
    }

    // Cuando esta listo 
    // Se carga de ultimo
    componentDidMount(){
        console.log(1)

        // Para cambia los states 
        this.setState({
            products : [
                { id: 1, name: 'Camisa ReactJS', precio: 30 },
                { id: 2, name: 'Camisa VueJS', precio: 30 },
                { id: 3, name: 'Camisa AngularJS', precio: 30 },
            ]
        })
    }
    // Antes de que este listo
    // Se ejecuta primero
    UNSAFE_componentWillMount(){
        console.log(2)
    }
    // Cuando se actualiza
    UNSAFE_componentWillUpdate(){
        console.log(3)
    }
    // Cuando se elimina o se reemplaza
    componentWillUnmount(){
        console.log(4)
    }



    render() {
        // El render se carga despues de WillUnMount
        // entre Render y Return puedes llamar alguna funcion o creare variables, etc.

        console.log(5)

        const {products} = this.state;
        console.log(products);

        return (
            <Fragment>
                <h1>Lista de productos</h1>
                {products.map(products => (
                    <ProductOnly 
                        key = {products.id}
                        products = {products}
                    />
                ))}
            </Fragment>
        );
    }
}

export default Products;
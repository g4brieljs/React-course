import React from 'react';

const ProductOnly = (props) => (
    <div>
        <h1>{props.products.name}</h1>
        <p>Precio ${props.products.precio}</p>
    </div>
);


export default ProductOnly;
import React, {Fragment} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Products from './components/Products';


function App() {

  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo = "Tienda virtual"
      />

      <Products 
      
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;

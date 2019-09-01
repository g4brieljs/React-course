# React Course
Progress of the course React Hooks, and redux context

# What is React or Reactjs?

Is a library of Javascript, to create user interfaces, react work in Front-end, to create Webs apps.
React is development for Facebook.
The heart of React are Components.

# Components
You can divide your code in components.

# From Reacjs.org
# Components
Build encapsulated components that manage their own state, then compose them to make complex UIs.
Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
# Reactive
React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
Declarative views make your code more predictable and easier to debug.

# Who use React?

Udemy.com | Platzi.com | Asana.com | Facebook.com | Twitter | Instagram | Microsoft | Outlook | Spotfy| Twitter | Dropbox

# Javascript Essential 

-Var let and Const
-Scope in Javascript
-Template Strings in Javascript
-Function and other types of function 
-Function with parameters
-Arrow Functions
-Object in Javascript
-Object Literal
-Object Constructor
-Prototypes
-Object DEstructuring
-Object literal Enhacemnt
-Function in a Object
-Arrays/.map and Object.keys
-Spread Operator
-.Filter/.find/.reduce
-Promise
-Promise with AJAX
-Class
-Module ES6

# Introduction a webpack

**Webpack** is a bundler of modules for apps modern Javascript.

With webpack you can incorporate dependencies such as css files, javsacript modules, other javascript libraries in your project, you will also have a local server with live reload.

In addtion to transpiling your modern javascript code to previous versions of javascript for greater compatibility with BABEL.

![webpack](https://github.com/g4brieljs/React-course/blob/master/02-Webpack/webpack.png)

**Etry** un punto de entrada que especifica que módulo debe utilizar webpack para comenzar a crear la gráfica de dependencias, webpack se encargará de saber que dependencias tiene este módulo.
Por lo normal el punto de entrada y la configuración se guardan en un archivo, aunque ne la versión 4 ya no es nesesario.

**Outpu** la salida le dirá  webpack, en que parte debe almacenar el bundle que se ha creado.
Normalmente la entrada esta en una carpeta llamada src / y la salida a una carpeta llamada dist/ 

**Loaders** webpack solo entiende arcvhivos javascript, pero con lo loaders puedes cargar otros formatos como sass, less, imagenes, html.

importar archivos css es algo que gulp o grunt no pueden hacer y que le da mucho mayor pode r awebpack sobre estas herramientas.

**test** que le dice al archivo webpack que archivo debe ser transformados.
**use** que le dice al archivo webpack que loader estamos utilizando para este archivo.

**plugins** LOs loaders nos permiten utilizar distinto tipos de módulos y otros formatos. pero los plugins realizan otro tipo de tareas tales como optimizar el bundle, administración avanzada de los assets.

Un plugin se instala via NPM y se importa al archivo webpack con la palabra require();

**Package JSON** con este file you can share you dependencies with other programer.

`npm init`

**Install dependencies**

`npm instal webpack --save-dev`

**--save-dev** es para que se almacenar en tu package.JSON

# First bundle

```javascript
const path = require('path');

// entry / output / loaders / 

module.exports = {
    // entradas
    entry: './src/index.js',
    // salidas
    output: {
        // crea el archivo
        filename: 'bundle.js',
        // crea la carpeta
        path: path.join(__dirname, '/dist')

    }
}
```

`node_modules\.bin\webpack src\index.js`

# Create a script on Webpack

``` javascript
"scripts": {
    "build" : "webpack --mode development"
  },
```

# transpillar the code with babel

`$ sudo npm install --save-dev babel-core babel-loader babel-preset-env`
`$ sudo npm install -D babel-loader @babel/core @babel/preset-env`

```javascript
// loaders
    module: {
        //tests
        rules: [
            {
                test: /\.js$/,
                //excludes esto escluira la carpeta node_modules
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/env']
                    }
                }
            }
        ]
    }
```

# watch in Webpack

`"watch": "webpack --w --mode development"` 

# Import css on Webpack

Install these dependencies:
-`npm instal --save-dev style-loader css-loader`

```javascript
 // other rule
            {
                // esto busca css y le aplica el loader
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            }
```

`import '.../css/style.css';`

// Esto improta la hoja  de estilo dentro del modulo, esto no se puede con js vanilla, se necesita webpack y los modulos necesarios

# Import sass with webpack

`npm install --save-dev sass-loader`
`npm install -g node-sass`
`npm install --save-dev node-sass`

```javascript
 // other rule
    {
        // esto busca css y le aplica el loader
        test: /\.scss$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'sass-loader'}
        ]
    }
```

# Create multiple bundles

```javascript
 // entradas
    entry: {
        index: './src/js/index.js',
        aboutUs: './src/js/aboutUs.js'
    },
    // salidas
    output: {
        // crea el archivo
        filename: '[name].bundle.js',
        // crea la carpeta
        path: path.join(__dirname, '/dist')
    },
```


# Add common chunks 

The common chunks, permiten que las librerias, o frameworks que agreguemos a nuestro webpack se vayan al common bundle, es como el archivo central, entonces los otros .js bundle seran para los codigos que generan cada archivo

```javascript
// common Chunks
    optimization: {
        splitChunks: {
            cacheGroups: {
                //
                commons: {
                    // que archivos vamos a utilizar // todo lo que este en node modules
                    // esto es una expresion regular para que todo el codigo necesario entre al bundle, en este caso webpack
                    test: /[\\/]node_modules[\\/]/,
                    // el nombre
                    name: 'common',
                    // que todo se guarde en el archivo de common
                    chunks: 'all'
                    
                }
            }
        }
    }
```

# add webpack dev server 

`npm install --save-dev webpack-dev-server`

```javascript
 // web dev server
    devServer: {
        // esto son parametros exclusivos de web dev server
        // El primero es la carpeta donde se van a cargar la carpeta dist
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        // the port
        port: 9000
    },
```

# First project with webpack

![firstWebpack](https://github.com/g4brieljs/React-course/blob/master/02-Webpack/firstproject.png)

# Install plugin 

This plugin va a generar los archivos html y se complementa con el webpack dev server
`npm install --save-dev html-webpack-plugin`
```javascript
const HtmlWebpackPlugin = require("html-webpack-plugin");

 plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        })
    ]
```

# React Essentials

**Install React-app** you need:
-Nodejs
-NPM

Acces a carpet in with cmd or terminal write 
-`$ npm install -g create-react-app`
-`$ create-react-app myapp`
If you have a error, you can use
-`npm install`

## React without JSX

```javascript
import React from 'react';

function App() {
  return (
    React.createElement(
      'h1',
      {id: 'heading', className: 'heading'},
      'Hola mundo'
    )
  );
}

export default App;
```

## React with JSX

```javascript
import React, {Fragment} from 'react';

function App() {
//ADD CODE JAVASCRIPT

const client ={
  name: 'Gabriel Jimenez',
  work: 'Web developer'
}

  return (
    <Fragment>
      <h1>{client.name}</h1>
      <p>{client.work}</p>
    </Fragment>
  );
}

export default App;
```

## What is Component in REACT?

**Component** te van a permitir serpar tu código y los elementos de tu interfaz en pequeñas piezas re-utilizables que estarán asoladas una de otras.
- Los componentes son como funciones en Javascript
- Puedes pasarle datos a un componente por medio de algo llamado Props.
- **Importante** es que en React los datos fluyen del componente padre al hijo.

## Two components / Hooks
### Class component
```javascript
class App extends Component{
    render(){
        return(
            <p>Hellow World</p>
        )
    }
}
```

### Functional component
```
const App = props => (
    <p>Hellow World</p>
);
```
**Ventajas**
- Fácil de crear, leer
- Menos código
- Fácil de probar
- "Mejor performance"
**Desventajas**
- No se puede usar los ciclos de vidas (ComponentDidMount, ComponentDidUpdate)
- No tienen state
- No puedes usar refs
- Si necesitan caulquiera de estas 3, crear un class Component

### Hooks
Te permite usar State con function


## First Class Component
**render** es obligatorio en los class Component

**{ Component }** esto permite no utilizar esto:
`extends React.Component`

```javascript
import React, { Component } from 'react';


class FirstComponent extends Component {
state = { }  
    render(){
        return ( 
            <div>
                <h1>First Component</h1>
            </div>
        );
    }
}

export default FirstComponent;
```

## Converting Class Component in a Stateless Functional Component

```javascript
// Use this form for create components Parents
function SecondComponent(){
    return ( 
            <h1>First Component</h1>
    );
}

// For create Methods
const SonSecond = () => ( 
    <h1>Son</h1> 
);
```

## Props in you component
**Props** nos permiten pasar datos entre componentes.
- Un prop se pasan del padre al hijo, nuca del hijo al padre.

**Pasar String**
`name = "Juan"`

**Pasar a var**
`date = {var}`

## State in you Component
Un **estado** es parecido a los props, pero son privados y se controla totalmente por el componente.
**Importante** los State siempre debe ser un objeto cuando se utilizan los class component.

```javascript
 state = {
        products : [
            { id: 1, name: 'Camisa ReactJS', precio: 30 },
            { id: 2, name: 'Camisa VueJS', precio: 30 },
            { id: 3, name: 'Camisa AngularJS', precio: 30 },
        ]
    }
```
**Other form**
```js
constructor(){
    super(){
    this.state = {
        products : [
                { id: 1, name: 'Camisa ReactJS', precio: 30 },
                { id: 2, name: 'Camisa VueJS', precio: 30 },
                { id: 3, name: 'Camisa AngularJS', precio: 30 },
        ]
        
    }
}
```

## Lifecycle Methods to a Class component
Son methods or functions que se ejecutan automaticamente en el componente.
**Mala práctica** Es mala práctica llamarlos.
- Se actualizan automaticamente
- Solo existen en el Class component
- Son eventos que ocurren desde que le componente es creado hasta que es destruido.

### ComponentDidMount
Cuando se termina de cargar el componente.

```js
class App extends Component {
    componentDidMount(){
        console.log('El documento esta listo');
    }
    render(){
        return(
            <p>Hola mundo</p>
        )
    }
}
```
**APIS** las APIS se llamán desde el componentDidMount.

### ComponentWillMount 
El componente se cargará, pero aún no esta listo, este se usa para cargar algo antes de que se monte le Componente.

```js
class App extends Component {
    componentWillMount(){
        console.log('El documento aun no esta listo');
    }
    render(){
        return(
            <p>Hola mundo</p>
        )
    }
}
```

### ComponentDidUpdate
Cuando algo cambia en el componente lo actualiamos con este método de ciclo de vida.
```js
class App extends Component {
    componentDidUpdate(){
        console.log('Algo cambio en el componente');
    }
    render(){
        return(
            <p>Hola mundo</p>
        )
    }
}
```
**Car shop** por ejemplo añadimos un producto al carrito de compras, necesitamos actualizar.

### ComponentWillUnmount
Te permite hacer algo antes de que se reemplaze un componente viejo por uno nuevo.
```js
class App extends Component {
    componentWillUnmount(){
        console.log('Un nuevo componente ha sido cargado y este será reemplazado, pero puedes ejecutar algo antes de que eso pase');
    }
    render(){
        return(
            <p>Hola mundo</p>
        )
    }
}
```

**Importante** Los componentes del ciclo de vida tienen este orden:

**Primero** 
```js 
- componenteWillMount(){} 
```
**Segundo** 
```js
- render()
```
**Tercero** 
```js
- componentDidMount(){}
``` 

**Actualizas el componente**
```js
- componentDidUpdate(){}
```
Y luego el render() para visualizar los cambios.

**Importante** Un state son inmutables, se cambian con el `this.setState({})` en los class Component.

# Firsth project with Reactjs

![firstreact](https://github.com/g4brieljs/React-course/blob/master/04-first-project/quotes-lending/quote.png)

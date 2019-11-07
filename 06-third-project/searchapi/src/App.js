import React, {Component} from 'react';

class App extends Component {
  state = { 
    noticias: []
  }

  async componentDidMount(){
    this.consultarNews();
  } 

  consultarNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6ec23f683b1e44178d29f1971708960b`;
    const res = await fetch(url);
    const data = await res.json();

    this.setState({
      data : data.articles
    })
  } 

  render() { 
    return ( <h1>Noticias With Reactjs</h1> );
  }
}
 
export default App;

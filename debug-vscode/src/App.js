import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import data from './data/data'
import logo from './logo.svg';

// class component
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      properties: data.properties,
      property: data.properties[0]
    }
  }

  nextProperty = () => {
    const newIndex = this.state.property.index+1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  prevProperty = () => {
    const newIndex = this.state.property.index-1;
    this.setState({
      property: data.properties[newIndex]
    })
  }

  render() {
    const {property} = this.state;
    return (
      <div className="App">

        <button 
          onClick={() => this.prevProperty()} 
          disabled={property.index === 0}
        >Prev</button>

        <button 
          onClick={() => this.nextProperty()} 
          disabled={property.index === data.properties.length-1}
        >Next</button>
        

        <div className="page">
            <section>
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Source code ( hopefully ) to debug via VSCode.</h1>
            </section>
              <h4>
            <Card property={property} />
              </h4>
        </div>
      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';
import { SushiContainer } from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    limit: 4,
    offset: 0,
    isLoading: true,
    sushiArray: [],
    sushiEaten: false
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushiArray: sushis}, () => console.log(sushis)))
  }
  
  handleMoreClick = () => {
    this.setState({
      offset: this.state.limit,
      limit: this.state.limit + 4
    })
  }

  eatSushi = (sushi) => {
    console.log(sushi)
    this.setState({
      sushiEaten: true
    })
  }
  
  render() {
    let sushiArray = this.state.sushiArray.slice(this.state.offset, this.state.limit)
    console.log(this.state)
    return (
      <div className="app">
        <SushiContainer 
          sushiArray={sushiArray}
          handleMoreClick={this.handleMoreClick}
          eatSushi={this.eatSushi}
          sushiEaten={this.state.sushiEaten}
        />

        <Table />
      </div>
    );
  }
}

export default App; 
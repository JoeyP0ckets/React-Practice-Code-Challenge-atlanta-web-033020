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
handleMoreClick = () => {
  console.log("i was clicked")
  this.setState({
    offset: this.state.limit,
    limit: this.state.limit + 4
  })
}
  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushiArray: sushis}, () => console.log(sushis)))
  }
  render() {
    let sushiArray = this.state.sushiArray.slice(this.state.offset, this.state.limit)
    return (
      <div className="app">
        <SushiContainer 
          sushiArray={sushiArray}
          handleMoreClick={this.handleMoreClick}
        />

        <Table />
      </div>
    );
  }
}

export default App; 
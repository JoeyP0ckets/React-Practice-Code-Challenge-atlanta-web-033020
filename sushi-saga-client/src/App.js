import React, { Component } from 'react';
import { SushiContainer } from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    
    sushiArray: [],
    sushiEaten: [],
    moneyTotal: 50,
    newMoney: 0,
    displayIndex: 0
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushis => this.setState({ sushiArray: sushis}))
  }
  
  chooseFourSushis = () => {
    return this.state.sushiArray.slice(this.state.displayIndex, this.state.displayIndex+4)
  }
 
  handleMoreClick = () => {
    let newDisplayIndex = this.state.displayIndex + 4
    this.setState({
      displayIndex: newDisplayIndex >= this.state.sushiArray.length ? 0 : newDisplayIndex
    })
  }

  eatSushi = (id, price) => {
    // console.log(sushi)
    if (!this.state.sushiEaten.includes(id) && price <= this.state.moneyTotal) {
    this.setState({
      sushiEaten: [...this.state.sushiEaten, id],
      moneyTotal: this.state.moneyTotal - price
    })
  } else {
    alert('you aint go no more money')
    }
  }

  handleChange = (event) => {
   this.setState({ newMoney: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(prevState => ({
      moneyTotal: prevState.moneyTotal + parseInt(prevState.newMoney),
      newMoney: 0
    }))

  }
  
  render() {
    console.log(this.state)
    return (
      <div className="app">
        <form onSubmit={this.handleSubmit}>
          <label>
            Add Money:
            <input type="text" placeholder="Add Money" value={this.state.newMoney} onChange={this.handleChange}></input>
            <button type="submit">Submit</button>
          </label>
        </form>
        <SushiContainer 
          sushiArray={this.chooseFourSushis()}
          handleMoreClick={this.handleMoreClick}
          eatSushi={this.eatSushi}
          sushiEaten={this.state.sushiEaten}
        />

        <Table 
          moneyTotal={this.state.moneyTotal}
          sushiEaten={this.state.sushiEaten}
        />
      </div>
    );
  }
}

export default App; 
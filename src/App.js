import React, { Component } from 'react';
import './App.css';
import Display from './components/Display';
import IncrementButton from './components/IncrementButton';
import DecrementButton from './components/DecrementButton';
import ResetButton from './components/ResetButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
  }

  increment = () => {
    this.setState({ counter: this.state.counter + 1})
  }
  decrement = () => {
    this.setState({ counter: this.state.counter - 1})
  }
  reset = () => {
    this.setState({ counter:0})
  }
  
  render() {
    return (
      <div className="App">
        <Display counter={this.state.counter} />
        <IncrementButton onIncrement={this.increment} />
        <DecrementButton onDecrement={this.decrement}/>
        <ResetButton onReset={this.reset}/>
        
      </div>
    );
  }
}

export default App;

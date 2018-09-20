import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Draw from './components/Draw';
import Game from './services/game.js';
class App extends Component {

  constructor(props) {
    super(props);

    const cells = Game._init();

    this.state = {
      cells
    };
  }

  componentWillUnmount() {
    if (this._autoRun) {
      clearInterval(this._autoRun);
    }
  }

  componentDidMount() {
    this._autoRun = setInterval(this.handlNextTick, 100);
  }

  handlNextTick = ()=> {
    const { cells }  = this.state;
    const updateCells = Game.update(cells);
    this.setState({cells: updateCells});
  }

  render() {
    const { cells } =  this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Conway game</h1>
        </header>
        <Draw cells={cells}/>
      </div>
    );
  }
}

export default App;

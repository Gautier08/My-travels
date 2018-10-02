import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        working: true,
     };
   }
    handleClick = () => {
        this.setState({ working: !this.state.working });
      };
  render() {
    const works = this.state.working ? 'Work' : 'Break';

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className={works} alt="logo" />
          <h1 className="App-title">Homer</h1>
          <button onClick={this.handleClick}
          >
          {works.toUpperCase()}
          </button>
        </header>
      </div>
    );
  }
}

export default App;
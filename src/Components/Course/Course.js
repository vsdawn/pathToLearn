import React from 'react';
import getlearn from '../Image/getlearn.svg';
import './Course.css';
import Header from '../Header/Header.js'

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
        </div>
        <header className="App-header">
          <img src={getlearn} className="App-logo" alt="logo" />
          <p>
            What is DevOps?/Why should we used it?/How does it work?
          </p>
        </header>
      </div>
    );
  }
}

export default Home;

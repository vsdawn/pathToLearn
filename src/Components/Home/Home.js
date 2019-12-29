import React from 'react';
import getlearn from '../Image/getlearn.svg';
import './Home.css';
import Header from '../Header/Header.js'

class Home extends React.Component {
  render(){
    return (
      <div className="App">
        <div>
          <Header/>
        </div>
        <header className="App-header">
          <img src={getlearn} className="App-logo" alt="logo" />
          <p>
            What is DevOps?/Why should we used it?/How does it work?
          </p>
        </header>
        <div className="container-fluid">
          <div className="row devops">
            <div className="col-12">
              <h1>What is Devops</h1>
            </div>
            <div className="col-6">
              <p className="devopsStyle">
                DevOps is the practice of operations and development
                engineers participating together in the entire service
                lifecycle, from design through the development process to production support.
              </p>
            </div>
            <div className="col-6">
              Image Section
            </div>
          </div>
          <div className="row usedDevops">
            <div className="col-12">
              <h1>Why should we used it</h1>
            </div>
            <div className="col-6">
              <p className="devopsStyle">
                Reduced Deployment Failures, Rollbacks, Time to Recover,
                Shorter Development Cycles, Faster Innovation and build better products.
              </p>
            </div>
            <div className="col-6">
              Image Section
            </div>
          </div>
          <div className="row workDevops">
            <div className="col-12">
              <h1>How does it work</h1>
            </div>
            <div className="col-6">
              <p className="devopsStyle">
                The DevOps life-cycle is all about agility and automation. Each phase in
                the DevOps process flow focuses on closing the loop between development
                and operations.
              </p>
            </div>
            <div className="col-6">
              Image Section
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
import React from 'react';
import './App.css';
import Artists from './components/Artists';
import Podcasts from './components/Podcasts';

function App() {
  return (
    <div className="App">
      <div id="content">
        <div className="section">
          <div className="me"></div>
          <h1>Nils Fahrni</h1>
          <h2>effective accelerationist</h2>

          <a href="https://twitter.com/okaynils" className="link"><span className="X">𝕏</span> -&gt;</a><a href="https://github.com/okaynils" className="link">GitHub -&gt;</a><a href="https://instagram.com/okaynils" className="link">Instagram -&gt;</a>
        </div>
        <div className="section">
          <h6>Currently</h6>

          <ul>
            <li>
              <p style={{ fontSize: "small" }}>2022 - Present</p>
              <a href="https://fhnw.ch/en/degree-programmes/engineering/bsc-data-science">
                <div className="tooltip" style={{ display: "inline-block" }}>
                  <h3><a href="https://fhnw.ch/en/degree-programmes/engineering/bsc-data-science">FHNW</a></h3>
                  <span className="tooltiptext">University of Applied Sciences Northwestern Switzerland</span>
                </div>
              </a>
              <p>BSc Data Science</p>
            </li>
          </ul>
        </div>
        <div className="section">
          <h6>Previously</h6>

          <ul>
            <li>
              <p style={{ fontSize: "small" }}>2021 - 2022</p>
              <a href="https://www.wksbern.ch/de">
                <div className="tooltip" style={{ display: "inline-block" }}>
                  <h3><a href="https://www.wksbern.ch/de">WKS Bern</a></h3>
                  <span className="tooltiptext">School for Business and Management Bern</span>
                </div>
              </a>
              <p>Matura Student</p>
            </li>
            <li>
              <p style={{ fontSize: "small" }}>2017 - 2021</p>
              <h3><a href="https://post.ch/en">Swiss Post</a><span className="grey-word"> + </span><a href="https://postfinance.ch/en">PostFinance</a></h3>
              <p>Software Engineer Apprentice</p>
            </li>
          </ul>
        </div>

        <div className="section">
          <h6>Music I'm currently listening to</h6>

          <ul>
            <li>
              <Artists />  
            </li>
          </ul>
        </div>

        <div className="section">
          <h6>My favorite podcasts</h6>
          <Podcasts />
        </div>

        <div className="section footer-section">
          <p className="left-text" style={{ fontSize: "x-small" }}>Nils Fahrni © 2023</p>
          <p className="right-text" style={{ fontSize: "small" }}>🌿</p>
        </div>
      </div>

    </div>
  );
}

export default App;

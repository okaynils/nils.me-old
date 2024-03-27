import React from 'react';
import '../App.css';
import Artists from './Artists';
import Projects from './Projects';
import Podcasts from './Podcasts';
import Writings from './Writings';
import { useMarkdownListService } from '../hooks/useMarkdownListService';
import { Link } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { useEffect, useState } from 'react';


const Home = () => {
  const { markdownFiles, dates } = useMarkdownListService();
  
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const time = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Europe/Zurich',
    hour12: false,
  }).format(currentDate);

  return (
    <div className="Home">
      <div id="content">
        <div className="section">
          <h1>Nils Fahrni</h1>
          <h2>I am a dedicated Data Science undergraduate in my fourth semester at University of Applied Sciences Northwestern Switzerland.</h2>
          <h2>I harbor a deep passion for machine learning and computer vision.</h2>
          <div className='clock'>
            <a href='https://www.google.com/maps/place/Solothurn'><Globe color='#545454' size={16} /><span>{time} Solothurn, Switzerland</span></a>
          </div>
          <a href="https://twitter.com/okaynils" className="link" target="_blank" rel="noopener noreferrer"><span className="X">𝕏</span> -&gt;</a>
          <a href="https://github.com/okaynils" className="link" target="_blank" rel="noopener noreferrer">GitHub -&gt;</a>
          <a href="https://instagram.com/okaynils" className="link" target="_blank" rel="noopener noreferrer">Instagram -&gt;</a>
          <a href="https://drive.google.com/file/d/1BLZiOTzcqdIuM6l6qBlaQPdr5FGyntk7" className="link" target="_blank" rel="noopener noreferrer">Resume -&gt;</a>
        </div>

        <div className="section">
          <h6>Writings</h6>
          {markdownFiles.map((fileName, index) => (
            <li key={fileName}>
              <Link to={`/writing/${fileName}`} className='writing-link'>
                <span>{fileName}</span>
                <span>{dates[index]}</span>
              </Link>
            </li>
          ))}
        </div>

        <div className="section">
          <h6>Currently</h6>

          <ul>
            <li>
              <p style={{ fontSize: "small" }}>2022 - Present</p>
              <a href="https://fhnw.ch/en/degree-programmes/engineering/bsc-data-science">
                <div className="tooltip" style={{ display: "inline-block" }}>
                  <h3><a href="https://fhnw.ch/en/degree-programmes/engineering/bsc-data-science">FHNW</a></h3>
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
          <h6>Projects & Classwork</h6>
          <Projects />
        </div>

        <div className="section">
          <h6>Artists I'm currently listening to</h6>

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
      </div>

    </div>
  );
}

export default Home;

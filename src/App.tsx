import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomePage from './components/HomePage';
import TeamSpeakLink from './components/TeamSpeakLink';
import './assets/styles/global.css';
import Navbar from "./components/NavBar";
import IconGrid from "./components/IconGrid";
import AboutUs from "./components/AboutUs";
import {AudioProvider} from "./contexts/AudioContext";
import {AudioHandler} from "./contexts/AudioHandler";

const App: React.FC = () => {
  return (
      <AudioProvider>
          <AudioHandler /> {/* This component now safely uses useAudio */}

      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            {/*<Route path="/" exact component={HomePage} />*/}
              <Route path="/about-us" component={AboutUs} />
              <Route path="/teamspeak" component={TeamSpeakLink} />
              <Route path="/" component={AboutUs} />

          </Switch>
            <IconGrid /> {/* Include IconGrid here */}

        </div>
      </Router>
        </AudioProvider>
  );
}

export default App;
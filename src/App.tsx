import React , { useState , useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Intro from './components/Intro';
import Qualities from './components/Qualities';
import WhyMe from './components/WhyMe';
import Memories from './components/Memories';
import Timeline from './components/Timeline';
import Playlist from './components/Playlist';
import Login from './components/Login';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/qualities" element={<Qualities />} />
        <Route path="/whyme" element={<WhyMe />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/playlist" element={<Playlist />} />
      </Routes>
    </Router>
  );
}

export default App;

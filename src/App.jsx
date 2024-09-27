import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Cards from './assets/componentes/Cards';
import VideoPlayer from './assets/componentes/videoplayer.jsx'; 
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const videoUrl = "https://www.youtube.com/embed/EZcODNxIbfM?si=X7nt0J9ZxrSPw0Oq"; 

  return (
    <>
      <Cards />
      
      <h1>Vite + React</h1>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    
      <VideoPlayer videoUrl={videoUrl} />
    </>
  );
}

export default App;

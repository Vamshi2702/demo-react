import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('')
  const toggleMode = (val) => {
    switch (val) {
      case 'dark':
        setMode('dark');
        document.body.style.backgroundColor = "#1d1d1d";
        break;
      case 'summer':
        setMode('warning');
        document.body.style.backgroundColor = "#FFE05D";
        break;
      case 'winter':
        setMode('primary');
        document.body.style.backgroundColor = "#B2DEEC";
        break;
      case 'greeny':
        setMode('success');
        document.body.style.backgroundColor = "#9FE6A0";
        break;
      case 'red':
        setMode('danger');
        document.body.style.backgroundColor = "#FF616D";
        break;
      case 'default':
        setMode('light');
        document.body.style.backgroundColor = "#fff";
        break;

      default:
        setMode('light');
        document.body.style.backgroundColor = "#fff";
        break;
    }
  }
  return (
    <div>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm mode={mode} />
      </div>
    </div>
  );
}

export default App;

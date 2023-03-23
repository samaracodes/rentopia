import './App.css';
import { useState } from 'react'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Listings from './components/Listings';
import { 
  Routes,
  Route
} from 'react-router-dom'

function App() {

  const [name, setName] = useState('Samara')
  console.log(name)

  return (
    <div className="App">
       
        <Navbar />

        <Routes>
          <Route path="/" element={ <Homepage />} />
        </Routes>
        
    </div>
  );
}

export default App;

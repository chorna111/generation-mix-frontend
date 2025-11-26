
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Charts from '../src/components/Charts';
import BestWindow from '../src/components/bestWindow';
import './App.css'

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Charts />} />
          <Route path="/optimal-window" element={<BestWindow />} />

      </Routes>
    </Router>
    
  )
}

export default App

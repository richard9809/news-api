import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Everything from "../src/pages/Everything";
import Favorites from "../src/pages/Favorites";
import TopHeadlines from "../src/pages/TopHeadlines";

function App() {
  return (
    <Router>

      <Navbar />
      <div className='post-component'>
        <Routes>
          <Route path='/' element={<Everything />} />
          <Route path='/top-headlines' element={<TopHeadlines />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;

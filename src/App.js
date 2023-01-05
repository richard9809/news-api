import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Everything from "../src/pages/Everything";
import Favorites from "../src/pages/Favorites";
import TopHeadlines from "../src/pages/TopHeadlines";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

library.add(faAnglesUp);

function App() {

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 20){
        setShowButton(true);
      }else{
        setShowButton(false);
      }
    });
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }
  
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

      <div>
        <button onClick={handleScrollToTop} className="fa-2x scroll-to-top-button"
          style={{ display: showButton ? 'block' : 'none' }}
        >
            <FontAwesomeIcon className='fa-thin' icon={faAnglesUp} />
        </button>
      </div>

    </Router>
  );
}

export default App;

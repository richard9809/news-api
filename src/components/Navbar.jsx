import { Link, useLocation } from "react-router-dom";

function Navbar(){
    const location = useLocation();

    return (
        <div className="navbar container">
            <a href="#!" className="logo"><span>Bit</span>News</a>
            <div className="nav-links">
                <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Everything</Link>
                <Link to="/top-headlines" className={location.pathname === '/top-headlines' ? 'active' : ''}>Top Headlines</Link>
                <Link to="/favorites" className={location.pathname === '/favorites' ? 'active' : ''}>Favourites</Link>
            </div>
                {/* <div onClick={() => setShowSidebar(!showSidebar)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div> */}
        </div>
    );
}

export default Navbar;

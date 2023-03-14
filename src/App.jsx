import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Posts from './pages/Posts';
import Contacts from './pages/Contacts';
import Home from './pages/Home';
import Error from './pages/Error';

function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <ul className="main-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='posts' element={<Posts />} />
            <Route path='contact' element={<Contacts />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </main>
      <footer className="footer">
        <div className="container"></div>
      </footer>
    </>
  );
}

export default App;

import './App.css';
import './components/Books.css';
import Booklist from './components/Booklist';
import Categories from './components/Categories';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<Booklist />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>
    </>
  );
}

export default App;

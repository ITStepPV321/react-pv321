import './App.css';
import { About } from './components/About';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Menu from './components/Menu';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
          {/* <Route path="contacts" element={<Contacts/>} /> */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        {/* <Home /> */}
        {/* <About />
        <NotFound /> */}

      </main>
    </div>

  );
}

export default App;

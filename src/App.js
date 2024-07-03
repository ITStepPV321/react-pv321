import './App.css';
import { About } from './components/About';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Menu from './components/Menu';
import { Routes, Route } from 'react-router-dom';
import BooksLayout from './components/books/BooksLayout';
import BooksList from './components/books/BooksList';
import Book from './components/books/Book';
import NewBook from './components/books/NewBook';

function App() {
  return (
    <div className="App">
      <header className='header'>
        <Menu />
      </header>
      <div className="main-context">
        <main>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            {/* <Route path="contacts" element={<Contacts/>} /> */}
            {/* <Route path="books/*" element={<BooksLayout/>}/> */}
            <Route path="books" element={<BooksLayout/>}>
                {/* index <=> path=""  */}
                <Route index element={<BooksList/>}/> 
                {/* /books/1 */}
                <Route path=":id" element={<Book/>}/>
                {/* /books/newbook */}
                <Route path="newbook" element={<NewBook/>}/>
                {/* <Route path="addBook" element={<AddBook/>}/> */}
                {/* <Route path="editBook" element={<EditBook/>}/> */}
                <Route path="any" element={<h2>Any</h2>}/>
            </Route> 
            <Route path="*" element={<NotFound/>}/>
          </Routes>
          {/* <Home /> */}
          {/* <About />
          <NotFound /> */}
        </main>
        {/* <aside>
        <Routes>
            <Route path="contacts" element={<h2>Our Contacts</h2>} />
          </Routes>
        </aside> */}
      </div>

    </div>

  );
}

export default App;

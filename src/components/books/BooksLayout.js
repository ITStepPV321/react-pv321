import { Route, Routes } from "react-router-dom";
import BooksList from "./BooksList";
import Book from "./Book";

export default function BooksLayout(){
    const booksArrays=[
        {id:1,title:"Harry Potter", pages:657},
        {id:2,title:"Кобзар", pages:248},
        {id:3,title:"ASP.NET C#", pages:748},
    ]
    return(
    <div>
          <Routes>
            {/* <Route path="" element={<h2>List Books</h2>}/> */}
            <Route path="" element={<BooksList booksList={booksArrays}/>}/>
            <Route path="1" element={<Book book={booksArrays[0]}/>}/>
            <Route path="2" element={<Book book={booksArrays[1]}/>}/>
            <Route path="history" element={<h2> Category History Book </h2>}/>
            <Route path="*" element={<h2>List Books</h2>}/>
        </Routes>
    </div>)
}
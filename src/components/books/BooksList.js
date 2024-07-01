import { Link, useOutletContext } from "react-router-dom";
export default function BooksList(){
    const [books, setBooks]=useOutletContext();
    const deleteBookById=(id)=>{
        // let newList=books.filter(book=>book.id!==id);
        // console.log(newList);
        setBooks(books.filter(book=>book.id!==id))
        
    };
    // console.log(booksList);
    return(
        <ol>
        {
            books.map(b=>(
            <li key={b.id}><Link to={`/books/${b.id}`}>{b.title} : {b.pages} pages</Link><button onClick={()=>deleteBookById(b.id)}>Delete</button></li>     
            ))
        }
        </ol>
    )
}
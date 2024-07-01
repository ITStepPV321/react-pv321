import { Link } from "react-router-dom";
export default function BooksList({booksList}){
    console.log(booksList);

    return(
        <ol>
        {
            booksList.map(b=>(
            <li key={b.id}><Link to={`/books/${b.id}`}>{b.title} : {b.pages} pages</Link></li>     
            ))
        }
        </ol>
    )
}
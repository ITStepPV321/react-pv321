import { useState } from "react";
import { useOutletContext } from "react-router-dom";
export default function NewBook(){
    const [books, setBooks] = useOutletContext();
    
    const book={
        id:books.length+1,
        title:"",
        pages:0
    };
    const [newBook, setNewBook]=useState(book);

    const submit=(event)=>{
        event.preventDefault();
        console.log(event.target);
        newBook.title=document.getElementById("title").value;
        newBook.pages=document.getElementById("pages").value;
        setNewBook(newBook);
        console.log(newBook);
        setBooks([...books,newBook]);
    }
    return(
        <>
        <div className="form-newBook">
            <form action="" onSubmit={submit}>
                <div className="container-input">
                    <label htmlFor="title" >Title: </label>
                    <input type="text" id="title" name="title"  />
                </div>
                <div className="container-input">
                    <label> <span>Pages:</span> 
                    <input type="number" min="0" id="pages" name="title"  />
                    </label>
                </div>
                <div className="container-button">
                    {/* <input type="submit" onClick={submit} value="Add Book"/>                     */}
                    <input type="submit" value="Add Book"/>                    
                </div>
            </form>
        </div>
        </>
    )
}
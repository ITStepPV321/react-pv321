import { Route, Routes } from "react-router-dom";

export default function BooksLayout(){
    return(
    <div>
          <Routes>
            <Route path="" element={<h2>List Books</h2>}/>
            <Route path="1" element={<h2> Book 1</h2>}/>
            <Route path="2" element={<h2> Book 2</h2>}/>
            <Route path="history" element={<h2> Category History Book </h2>}/>
            <Route path="*" element={<h2>List Books</h2>}/>
        </Routes>
    </div>)
}
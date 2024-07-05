import { useNavigate,useOutletContext,useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

function EditBook() {
    const navigate = useNavigate();
    const [books, setBooks] = useOutletContext();
    const {id}=useParams();
    const {register,handleSubmit}=useForm();
    const onSubmit=(editBook)=>{

    }    

    return ( <>
     <div className="form-newBook">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-input">
                        <label htmlFor="title" >Title: </label>
                        <input defaultValue="test" {...register("title")} type="text" id="title"/>
                        
                    </div>
                    <div className="container-input">
                        <label> <span>Pages:</span>
                        <input {...register("pages")} type="number" id="pages"/>

                        </label>
                    </div>
                    <div className="container-button">
                        <input type="submit" value="Add Book" />
                    </div>
                </form>
            </div>
    
    </> );
}

export default EditBook;
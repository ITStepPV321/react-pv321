export default function Book({ book }) {
    return (
        <>
            <div className="card-book">
                <h1>{book.id} {book.title}</h1>
                <p>{book.pages} pages</p>
            </div>
        </>
    )
}
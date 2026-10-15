import Book from "./Book";

function BookShelf( { books } ) {
    return(
        <>
            {books.map((book) => (
                <Book key={book.id} book={book} />
            ))}
        </>
    )
}

export default BookShelf;
function Book( props ) {
    return(
        <>
            <h1>{ props.title }</h1>
            <p>{ props.author }</p>
            <p>{ props.pages }</p>
        </>
    )
}

export default Book;
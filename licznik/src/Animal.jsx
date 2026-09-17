function Animal( { imie, gatunek, wiek=3 } ) {
    return (
        <>
            <h2>Poznaj: {imie}</h2>
            <p>Gatunek: {gatunek}</p>
            <p>Wiek: {wiek}</p>
            <hr></hr>
        </>
    )
}

export default Animal;
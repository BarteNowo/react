import { useState } from "react";

function Zdjecie( { id, filename, downloads, alt, category } ) {

    const [downloads_active, setIloscPobran] = useState(downloads)

    return (
        <>
            <img src={filename} alt={alt} />
            <p>Pobrań: {downloads_active}</p>
            <button onClick={() => setIloscPobran((downloads_active) => downloads_active + 1)}>Pobierz</button>
        </>
    )
}

export default Zdjecie;
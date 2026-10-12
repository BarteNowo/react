import { useState } from "react";

function Zdjecie({ id, filename, downloads, alt, category }) {
    const [downloads_active, setIloscPobran] = useState(downloads)
    const imageSrc = new URL(`./assets/${filename}`, import.meta.url).href

    return (
        <>
            <img src={imageSrc} alt={alt} />
            <p>Pobrań: {downloads_active}</p>
            <button onClick={() => setIloscPobran((downloads_active) => downloads_active + 1)}>Pobierz</button>
        </>
    )
}

export default Zdjecie;
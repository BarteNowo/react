import Zdjecie from "./Zdjecie.jsx"
import daneZdjecia from "./zdjecia.json"

function Galeria() {
    return (
        <>
            <h1>Kategorie zdjęć</h1>
            {daneZdjecia.map((item) => (
                <Zdjecie 
                id={item.id}
                filename={item.filename}
                downloads={item.downloads}
                alt={item.alt}
                category={item.category} /> 
            ))}
        </>
    )
}

export default Galeria;
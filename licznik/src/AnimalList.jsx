import Animal from './Animal.jsx'

function AnimalList() {
    return (
        <>
            <Animal imie="Reksio" gatunek="Pies" wiek="4" />
            <Animal imie="Miauczek" gatunek="Kot" wiek="2" />
            <Animal imie="Bober" gatunek="Bóbr" />
        </>
    )
}

export default AnimalList;
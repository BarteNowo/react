var filmy = [
    {id: 1, tytul: "Kosmiczna podróż", cena: 25},
    {id: 2, tytul: "Tajemnica zamku", cena: 22},
    {id: 3, tytul: "Wakacje z duchami", cena: 20},
]

function Kino() {
    return(
        <div class="container">
            <h2>Kino Klaps - rezerwacja biletów</h2>
            
            <form>
                <label for="imie">Imię i nazwisko: </label>
                <input type="text" id="imie" required></input>

                <br></br>

                <label for="film">Film: </label>
                <select id="film" required>
                    <option value={filmy.id=1}>Kosmiczna podróż</option>
                    <option value={filmy.id=2}>Tajemnica zamku</option>
                    <option value={filmy.id=3}>Wakacje z duchami</option>
                </select>

                <br></br>

                <label for="ilosc_biletow">Liczba biletów: </label>
                <input type="number" id="ilosc_biletow" required></input>

                <br></br>

                <input type="checkbox" id="ulgowy"></input>
                <label for="ulgowy">Bilet ulgowy (-30%)</label>

                <br></br>

                <input type="submit" value="Zarezerwuj"></input>

                <br></br>

                <p style={{color:'#FF0000'}}>Uzupełnij poprawnie formularz.</p>

            </form>

        </div>
    )
}

export default Kino;
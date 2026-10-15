import { useState } from "react";

function LicznikLiter( {  }) {

}

function Formularz() {

    const [regulamin, setRegulamin] = useState(false);

    return (
        <form>
            <label htmlFor="imie">Imię</label>
                <input type="text" id="imie" />

            <label htmlFor="nazwisko">Nazwisko</label>
                <input type="text" id="nazwisko" />

            <br />

            <label htmlFor="email"></label>
                <input type="email" id="email" />

            <br />

            <label htmlFor="data">Data urodzenia</label>
                <input type="date" id="data" />

            <fieldset>
                <legend>Turnus</legend>

                <label htmlFor="lipiec">Lipiec</label>
                    <input type="radio" name="miesiac" value="lipiec" id="lipiec" defaultChecked/>
                <label htmlFor="sierpien">Sierpień</label>
                    <input type="radio" name="miesiac" value="sierpień" id="sierpien" />
            </fieldset>

            <label htmlFor="profil">Profil kursu</label>
                <select name="profil" id="laptop">
                    <option value="web">Web</option>
                    <option value="gry">Gry</option>
                    <option value="roboty">Roboty</option>
                </select>

            <fieldset>
                <legend>Czy masz własny laptop?</legend>

                <label htmlFor="tak">Tak</label>
                    <input type="radio" name="laptop" value="tak" id="tak" defaultChecked/>
                <label htmlFor="tak">Nie</label>
                    <input type="radio" name="laptop" value="nie" id="nie" />
            </fieldset>

            <label htmlFor="info">Dodatkowe informacje</label>
            <br />
                <textarea name="info" id="info" maxLength={200} />
            <br />
            
            <label htmlFor="regulamin">Akceptuję regulamin</label>
                <input type="checkbox" value={"Akceptuję regulamin"} id="regulamin" checked={regulamin} onChange={(event) => setRegulamin(event.target.checked)} required />
                    { regulamin == false && <p style={{ color: "red" }}>Zaakceptuj regulamin, aby kontynuować.</p>}

            <input type="submit" value="Zapisz mnie" />
            <input type="reset" value="Wyczyść" />
        </form>
    )
}

export default Formularz;
import { useState } from 'react'

function StatusPanel() {
    var statusy = ["Dostępny", "Zajęty", "Nieobecny"]

    const [status, zmienStatus] = useState(0)

    return (
        <>
            <p>Status ucznia: {statusy[status]}</p>

            <button onClick={() => zmienStatus((aktualny_status) => (aktualny_status + 1) % statusy.length)}>Zmień Status</button>
        </>
    )
}

export default StatusPanel;
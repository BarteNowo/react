function PlanetList() {
    const planets = ["Mercury", "Venus", "Earth", "Mars"];

    return(        
        <ul>
            {planets.map((planet) => <li>{planet}</li>)}
        </ul>
    )
}

export default PlanetList;
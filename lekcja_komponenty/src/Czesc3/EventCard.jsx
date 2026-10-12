function EventCard( props ) {
    return (
        <section>
            <h3>{ props.title }</h3>
            <p>Miejsc: { props.seats }</p>
            <p>Czy wyprzedane: { props.isSoldOut == true ? "Wyprzedane" : "Dostępne" }</p>
        </section>
    )
}

export default EventCard;
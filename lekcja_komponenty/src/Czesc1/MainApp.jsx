import Banner from "./Banner";
import Signature from "./Signature";
import EventCard from "../Czesc3/EventCard";
import Speaker from "../Czesc4/Speaker";

function MainApp() {
    return(
        <section>
            <Banner />    
            <br />        

            <section>
                <EventCard title="Forum" seats={30} isSoldOut={true} />
                    <Speaker name="Błażej" topic="AI" />
                <EventCard title="Prezentacja" seats={10} isSoldOut={false} />
                    <Speaker name="Tomasz" topic="Programowanie"/>
                <EventCard title="Pokaz" seats={20} isSoldOut={true} />
                    <Speaker name="Igor" topic="Technologia" />
            </section>

            <br />
            <Signature />
        </section>
    )
}

export default MainApp;
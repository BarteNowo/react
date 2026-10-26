function ArticleCard( { title, category, views } ) {
    return (
        <div className="produkt">
            <h3>{ title }</h3>
            <p>{ category }</p>
            <p>Wyświetlenia: { views }</p>
        </div>
    )
}

function Author( { name, section } ) {
    return (
        <p>{ name }: { section }</p>
    )
}

function Banner() {
    return (
        <h1>
            Serwis informacyjny
        </h1>
    )
}

function Signature() {
    return (
        <p>Redakcja: Bartosz Nowosad</p>
    )
}

function App() {
    const articles = [
    { id: 1, title: "Nowa pracownia informatyczna otwarta w szkole", category: "szkoła", views: 1200, readMinutes: 3, isBreaking: false, isPremium: false, authorId: 1 },
    { id: 2, title: "Awaria sieci w centrum miasta", category: "technologia", views: 5400, readMinutes: 2, isBreaking: true, isPremium: false, authorId: 2 },
    { id: 3, title: "Analiza: sztuczna inteligencja na rynku pracy", category: "technologia", views: 830, readMinutes: 9, isBreaking: false, isPremium: true, authorId: 3 },
    { id: 4, title: "Mistrzostwa szkół w piłce nożnej", category: "sport", views: 2100, readMinutes: 4, isBreaking: false, isPremium: false, authorId: 4 },
    { id: 5, title: "Wywiad z twórcą popularnej gry", category: "kultura", views: 640, readMinutes: 7, isBreaking: false, isPremium: true, authorId: 9 },
    { id: 6, title: "Wyniki szkolnej ligi koszykówki", category: "sport", views: 3900, readMinutes: 2, isBreaking: false, isPremium: false, authorId: 4 },
    { id: 7, title: "Zmiana planu lekcji w piątek", category: "szkoła", views: 4800, readMinutes: 1, isBreaking: true, isPremium: false, authorId: 1 },
    ];

    const authors = [
    { id: 1, name: "Anna Kowalska", section: "dział szkoła" },
    { id: 2, name: "Jan Nowak", section: "dział technologia" },
    { id: 3, name: "Ewa Zielińska", section: "analizy i komentarze" },
    { id: 4, name: "Piotr Maj", section: "dział sport" },
    ];

    return (
        <>
            <Banner />
            {articles.map((article) => (
                <ArticleCard key={article.id} title={article.title} category={article.category} views={article.views} readMinutes={article.readMinutes} isBreaking={article.isBreaking} isPremium={article.isPremium} />
            ))}
            <Signature />
            {authors.map((author) => (
               <Author key={author.id} name={author.name} section={author.section}/> 
            ))}

            <section>
                <h2></h2>
            </section>

            <section>

            </section>

            <section>

            </section>
        </>
    )
}

export default App;
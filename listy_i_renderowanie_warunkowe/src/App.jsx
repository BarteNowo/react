import './App.css'
import PlanetList from './Czesc1/PlanetList'
import BookShelf from './Czesc2/BookShelf';

function App() {

  const books = [
    { id: 1, title: "Dune", author: "F. Herbert", pages: 612 },
    { id: 2, title: "Solaris", author: "S. Lem", pages: 224 },
    { id: 3, title: "Neuromancer", author: "W. Gibson", pages: 271 },
  ];

  return(
    <BookShelf books={books} />
  )
}

export default App;
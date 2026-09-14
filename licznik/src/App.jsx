import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Licznik: {count}</h1>

      <button onClick={() => { if (count < 5) setCount(count + 1) }}>Dodaj +1</button>
      <button onClick={() => { if (count > -5) setCount(count - 1) }}>Odejmij -1</button>
      <button onClick={() => setCount(0)}>Resetuj</button>

      <p>{count === 0 ? "Licznik jest pusty" : "Trwa odliczanie"}</p>
    </div>
  );
}

export default App;
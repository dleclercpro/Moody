import './App.scss';

function App() {
  return (
    <>
      <h1>Moody</h1>
      <h3>Wie fühlst du dich heute?</h3>
      <p>Nenne deine heutige Emotion:</p>
      <button className='card'>
        Freude
      </button>
      <button className='card'>
        Traurigkeit
      </button>
      <button className='card'>
        Wut
      </button>
      <button className='card'>
        Angst
      </button>
      <button className='card'>
        Scham
      </button>
      <button className='card'>
        Ekel
      </button>
    </>
  )
}

export default App;

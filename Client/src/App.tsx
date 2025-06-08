import { useEffect, useState } from 'react';
import './App.scss';
import CallGetUser from './calls/CallGetUser';

interface User {
  name: string,
}



const App = () => {
  const [user, setUser] = useState<User>({ name: '' });
  const text = `Wie fühlst du dich heute, ${user.name}?`;
  
  useEffect(() => {
    CallGetUser()
      .then(data => {
        setUser(data);
      });

  }, []);

  return (
    <>
      <h1>Moody</h1>
      <h3>{text}</h3>
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

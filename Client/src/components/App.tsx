import { useEffect, useState } from 'react';
import './App.scss';
import CallGetUser from '../calls/CallGetUser';
import CallSetEmotion from '../calls/CallSetEmotion';
import { Emotion } from '../types/common';

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
      <button className='card' onClick={() => CallSetEmotion(Emotion.Happiness)}>
        Freude
      </button>
      <button className='card' onClick={() => CallSetEmotion(Emotion.Sadness)}>
        Traurigkeit
      </button>
      <button className='card' onClick={() => CallSetEmotion(Emotion.Anger)}>
        Wut
      </button>
      <button className='card' onClick={() => CallSetEmotion(Emotion.Fear)}>
        Angst
      </button>
      <button className='card' onClick={() => CallSetEmotion(Emotion.Shame)}>
        Scham
      </button>
      <button className='card' onClick={() => CallSetEmotion(Emotion.Disgust)}>
        Ekel
      </button>
    </>
  )
}

export default App;

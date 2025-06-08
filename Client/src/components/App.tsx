import { useEffect, useState } from 'react';
import './App.scss';
import CallGetUser from '../calls/CallGetUser';
import CallSetEmotion from '../calls/CallSetEmotion';
import { EMOTIONS } from '../constants';
import { capitalize } from '../utils/common';
import { Emotion } from '../types/common';

interface User {
  name: string,
}



const App = () => {
  const [user, setUser] = useState<User>({ name: '' });
  const text = `Hey, ${user.name}! How are you feeling today?`;
  const [emotion, setEmotion] = useState<Emotion | null>(null);
  
  useEffect(() => {
    CallGetUser()
      .then(data => {
        setUser(data);
      });

  }, []);

  const handleClick = (emotion: Emotion) => () => {
    CallSetEmotion(emotion);
    setEmotion(emotion);
  };

  return (
    <>
      <h1>Moody</h1>
      <h3>{text}</h3>
      <p>Select your current emotion:</p>
      
      {EMOTIONS.map((emotion) => (
        <button key={`button-emotion-${emotion}`} className='card' onClick={handleClick(emotion)}>
          {capitalize(emotion)}
        </button>
      ))}

      {emotion && (
        <p>You selected: {emotion}</p>
      )}
    </>
  )
}

export default App;

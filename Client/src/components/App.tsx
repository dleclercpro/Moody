import { useEffect, useState } from 'react';
import './App.scss';
import CallGetUser from '../calls/CallGetUser';
import CallSetEmotion from '../calls/CallSetEmotion';
import { EMOTIONS } from '../constants';
import { capitalize } from '../utils/common';
import { Emotion } from '../types/common';

interface User {
  name: string,
  emotion: Emotion | null,
}



const App = () => {
  const [user, setUser] = useState<User>({ name: '', emotion: null });
  const text = `Hey, ${user.name}! How are you feeling today?`;
  
  useEffect(() => {
    CallGetUser()
      .then(data => {
        setUser(data);
      });

  }, []);

  const handleClick = (emotion: Emotion) => () => {
    CallSetEmotion(emotion);
    setUser({ ...user, emotion });
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

      {user.emotion && (
        <p>You selected: <strong>{capitalize(user.emotion)}</strong></p>
      )}
    </>
  )
}

export default App;

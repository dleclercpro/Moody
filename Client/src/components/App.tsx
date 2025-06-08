import { useEffect, useState } from 'react';
import './App.scss';
import CallGetUser from '../calls/CallGetUser';
import { Emotion } from '../types/common';
import EmotionMosaic from './EmotionMosaic';
import { MOCK_USERS } from '../data/users';
import EmotionChoice from './EmotionChoice';

interface User {
  name: string,
  emotion: Emotion | null,
}



const App = () => {
  const [user, setUser] = useState<User>({ name: '', emotion: null });

  useEffect(() => {
    CallGetUser().then((data) => {
      setUser(data);
    });
  }, []);

  return (
    <div className='container'>
      <h1>Moody</h1>
      {user.emotion ?
        <EmotionMosaic user={user} users={MOCK_USERS} /> :
        <EmotionChoice user={user} setUser={setUser} />
      }
    </div>
  );
};

export default App;

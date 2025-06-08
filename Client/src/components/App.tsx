import './App.scss';
import EmotionMosaic from './EmotionMosaic';
import { MOCK_USERS } from '../data/users';
import EmotionChoice from './EmotionChoice';
import { useUser } from '../contexts/UserContext';

const App = () => {
  const { user } = useUser();

  return (
    <div className='app-container'>
      <h1>Moody</h1>
      {user.emotion ?
        <EmotionMosaic users={MOCK_USERS} /> :
        <EmotionChoice />
      }
    </div>
  );
};

export default App;

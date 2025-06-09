import './App.scss';
import EmotionMosaic from './components/EmotionMosaic';
import { MOCK_USERS } from './data/users';
import EmotionChoice from './components/EmotionChoice';
import { useUser } from './contexts/UserContext';
import QRCode from './pages/QRCode';

const App = () => {
  const { user } = useUser();

  return (
    <div className='app-container'>
      <h1>Moody</h1>
      {user.emotion ?
        <EmotionMosaic users={MOCK_USERS} /> :
        <EmotionChoice />
      }
      <QRCode />
    </div>
  );
};

export default App;

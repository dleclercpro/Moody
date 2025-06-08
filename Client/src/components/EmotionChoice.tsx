import './EmotionChoice.scss';
import { capitalize } from '../utils/common';
import CallSetEmotion from '../calls/CallSetEmotion';
import { Emotion } from '../types/common';
import { EMOTIONS } from '../data/constants';
import { useUser } from '../contexts/UserContext';

const EmotionChoice = () => {
  const { user, setUserEmotion } = useUser();

  const text = `Hey, ${user.name}! How are you feeling today?`;

  const handleClick = (emotion: Emotion) => () => {
    CallSetEmotion(emotion);
    setUserEmotion(emotion);
  };

  return (
    <div className='emotion-choice-container'>
      <h3>{text}</h3>
      <p>Select your current emotion:</p>

      <div className='emotion-buttons'>
        {EMOTIONS.map((emotion) => (
          <button
            key={`emotion-button-${emotion}`}
            className={`emotion-button emotion-${emotion}`}
            onClick={handleClick(emotion)}
          >
            {capitalize(emotion)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmotionChoice;
import './EmotionChoice.scss';
import { capitalize } from '../utils/common';
import CallSetEmotion from '../calls/CallSetEmotion';
import { Emotion, User } from '../types/common';
import { EMOTIONS } from '../data/constants';

interface EmotionChoiceProps {
  user: User;
  setUser: (user: User) => void,
}

const EmotionChoice = ({ user, setUser }: EmotionChoiceProps) => {
  const text = `Hey, ${user.name}! How are you feeling today?`;

  const handleClick = (emotion: Emotion) => () => {
    CallSetEmotion(emotion);
    setUser({ ...user, emotion });
  };

  return (
    <>
      <h3>{text}</h3>
      <p>Select your current emotion:</p>

      <div className='emotion-buttons'>
        {EMOTIONS.map((emotion) => (
          <button
            key={`button-emotion-${emotion}`}
            className={`emotion-button emotion-${emotion}`}
            onClick={handleClick(emotion)}
          >
            {capitalize(emotion)}
          </button>
        ))}
      </div>
    </>
  );
};

export default EmotionChoice;
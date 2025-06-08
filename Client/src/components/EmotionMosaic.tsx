import './EmotionMosaic.scss';
import { User } from '../types/common';
import { capitalize } from '../utils/common';
import { useUser } from '../contexts/UserContext';

interface MosaicProps {
  users: User[];
}

const EmotionMosaic = (props: MosaicProps) => {
  const { users } = props;

  const { user, setUserEmotion } = useUser();

  const text = `Hey, ${user.name}! Here is today's mood:`;

  const reset = () => setUserEmotion(null);

  return (
    <div className='emotion-mosaic-container'>
      <h3>{text}</h3>
  
      <div className='emotion-mosaic'>
        {users.map((user, index) => (
          <div
            key={`${user.name}-${index}`}
            className={`emotion-mosaic-tile ${`emotion-${user.emotion!}`}`}
            title={`${user.name}: ${user.emotion}`}
          >

          </div>
        ))}
      </div>

      <p>
        You selected: <strong>{capitalize(user.emotion!)}</strong>
      </p>

      <p>
        Changed your mind? <strong className='emotion-reset' onClick={reset}>Click here.</strong>
      </p>
    </div>
  );
};

export default EmotionMosaic;
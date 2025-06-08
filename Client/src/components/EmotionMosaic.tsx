import './EmotionMosaic.scss';
import { User } from '../types/common';
import { capitalize } from '../utils/common';

interface MosaicProps {
  user: User;
  users: User[];
}

const EmotionMosaic = ({ user, users }: MosaicProps) => {
  const text = `Hey, ${user.name}! Here is today's mood:`;

  return (
    <>
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
    </>
  );
};

export default EmotionMosaic;
import { Emotion } from '../types/common';
import CallAPI from './CallAPI';

const CallSetEmotion = (emotion: Emotion) => {
    return CallAPI('/user/emotion', 'POST', { emotion });
};

export default CallSetEmotion;
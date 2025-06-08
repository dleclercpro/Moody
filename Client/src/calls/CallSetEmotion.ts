import { Emotion } from '../types/common';
import CallAPI from './CallAPI';

const CallSetEmotion = (emotion: Emotion) => {
    return CallAPI('/user', 'POST', { emotion });
};

export default CallSetEmotion;
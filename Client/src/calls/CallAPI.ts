import { SERVER_ORIGIN } from '../config';

const CallAPI = (resource: string, method: 'GET' | 'POST' | 'PUT' | 'POST') => {
  return fetch(`${SERVER_ORIGIN}/api${resource}`, { method })
      .then(res => res.json())
      .catch(err => {
        console.error(err);
      });
};

export default CallAPI;
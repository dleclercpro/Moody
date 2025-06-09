import { SERVER_ORIGIN } from '../config';
import { HttpMethod } from '../types/common';

const getCallOptions = (method: HttpMethod, body?: any) => {
  if (!body) {
    return { method };
  }
  
  return {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  };
}



const CallAPI = (resource: string, method: HttpMethod, body?: any) => {
  return fetch(`${SERVER_ORIGIN}/api${resource}`, getCallOptions(method, body))
      .then(res => res.json())
      .catch(err => {
        console.error(err);
      });
};

export default CallAPI;
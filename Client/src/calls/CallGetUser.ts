import CallAPI from './CallAPI';

const CallGetUser = () => {
    return CallAPI('/user', 'GET');
};

export default CallGetUser;
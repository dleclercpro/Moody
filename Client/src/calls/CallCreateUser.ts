import CallAPI from './CallAPI';

const CallCreateUser = (name: string) => {
    return CallAPI(`/user?name=${name}`, 'POST');
};

export default CallCreateUser;
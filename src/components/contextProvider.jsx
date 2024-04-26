import { useContext } from 'react';
import { AuthContext } from './../AuthProvider/AuthProvider';


const contextProvider = () => {
    const info = useContext(AuthContext);
    return info;
};

export default contextProvider;
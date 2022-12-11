import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selecUsername } from 'redux/authorization/authSelectors';
import { logOut } from 'redux/authorization/requestAPI';

const Logout = () => {
    const user = useSelector(selecUsername);

    const dispatch = useDispatch();

    const userOut = async () => {
        await dispatch(logOut());
        window.localStorage.removeItem('persist:auth');
    };

    return (
            <div>
                <h2>Welcome {user ? user : 'NickName'}</h2>
                <button onClick={userOut}>Logout</button>
            </div>
    );
};
export default Logout;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selecIsLoggedIn } from 'redux/authorization/authSelectors';

const HomeAll = () => {
    const isLoggedIn = useSelector(selecIsLoggedIn);
    
    return (
        <div>
            <Link to="/">Home</Link>
            {isLoggedIn &&(<Link to="/phonebook">Phonebook</Link>)}
        </div>
    )
}
export default HomeAll;
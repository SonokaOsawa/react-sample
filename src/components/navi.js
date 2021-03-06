import React from "react";
import { useHistory } from 'react-router-dom';

const Navi = props => {
    const history = useHistory();
    const handleLink = path => history.push(path);
    return (
        <nav>
            <button onClick={() => handleLink('/about/100')}>About</button>
            <button onClick={() => handleLink('/users')}>Users</button>
            <button onClick={() => handleLink('/topics')}>Topics</button>
            <button onClick={() => handleLink('/')}>Home</button>
        </nav>
    );
}
export default Navi;
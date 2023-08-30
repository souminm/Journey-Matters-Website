import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className='navbar'>
            <Link className='home' to ="/">
            <a id="weblogo">Journey Matters</a>
            </Link>
     
            <Link className='funny' to="/funny">
                <a id="anchor1">Entertainment</a>
            </Link>
            <Link className='cooking' to ="/cooking">
                <a id="anchor2">Cooking</a>
            </Link>
            <Link className='lifestyle' to ="/lifestyle">
                <a id="anchor3">LifeStyle</a>
            </Link>
            <Link className='authentication' to ="/admin">
                <a id="anchor4">Admin</a>
            </Link>
            
        </div>
    );
}

export default Header;

import React from 'react'
import './container.scss'
import { Icons } from "utils/icons";
const Header = ({children}) => {
    return( 
        <div className='root'>
            {children}

            <img className="icon" height='30' src={Icons[0].icon} alt='close'/>
        </div>
    )
}

export default Header
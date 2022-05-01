import React from 'react';
import './Header.css'

class Header extends React.Component{

    render(){

        return(
            <nav>
                <ul>
                    <li style={{color:"whitesmoke"}}>
                        <a href='javascript:void(0);'>tic-tac-toe</a>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Header;
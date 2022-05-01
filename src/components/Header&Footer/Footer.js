import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

function Instructions(){

    return(
        <div className='how-to-play'>
            <div className="instructions-link">
                <Link to="./components/Instructions/how-to-play" style={{textDecoration:"none"}}>
                    How to Play?
                </Link>
            </div>
        </div>
    )
}

let currentYear=new Date().getFullYear();

class Footer extends React.Component{

    render(){

        return(
            <footer className='footer'>
                <div className='footer_details'>
                    <div>
                        <Instructions />
                    </div>
                    <span>
                        <span className='copyright-icon'><FontAwesomeIcon icon={faCopyright} /></span>
                        Wes <span className='copyright_year'>{currentYear}</span>
                    </span>
                </div>
            </footer>
        )
    }
}
export default Footer;
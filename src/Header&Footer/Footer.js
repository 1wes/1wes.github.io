import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCopyright} from '@fortawesome/free-solid-svg-icons'
let currentYear=new Date().getFullYear();

class Footer extends React.Component{

    render(){

        return(
            <footer className='footer'>
                <div className='footer_details'>
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
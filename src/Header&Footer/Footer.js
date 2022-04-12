import React from 'react';

let currentYear;

class Footer extends React.Component{

    render(){

        return(
            <footer className='footer'>
                <div className='footer_details'>
                    <span>
                        Wes, <span className='copyright_year'>2022</span>
                    </span>
                </div>
            </footer>
        )
    }
}
export default Footer;
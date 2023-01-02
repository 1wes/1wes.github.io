import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

class Header extends React.Component{

    // make the header sticky on scroll
    componentDidMount(){

        window.onscroll=()=>{
            stickNavbar();
        }

        let navbar=document.getElementById("nav-bar");

        let stickNavbar=()=>{

            // if horizontal scroll is greater than position of the navbar
            if(window.scrollY>60){
                navbar.style.top='0';
                navbar.style.backgroundColor='rgba(0, 0, 0, 0.9)';
                navbar.style.position='fixed';
                navbar.style.width='100%'
            }else{
                navbar.style.top='-60px'
            }
        }
    }

    render(){

        return(
            
            <nav id='nav-bar'>
                <ul>
                    <li>
                        <Link id='header-banner' to='/'>tic-tac-toe</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}
export default Header;
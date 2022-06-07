import React from 'react';
import './Header.css'


var navbar=document.getElementById("nav-bar");



class Header extends React.Component{

    // make the header sticky on scroll
    componentDidMount(){

        window.onscroll=function (){
            stickNavbar();
        }

        let navbar=document.getElementById("nav-bar");

        let navbarPosition=navbar.getBoundingClientRect().top;

        let stickNavbar=()=>{

            // if horizontal scroll is greater than position of the navbar
            if(window.scrollY>navbarPosition){
                navbar.classList.add("sticky");
            }else{
                navbar.classList.remove("sticky");
            }
        }
    }

    render(){

        return(
            <nav id='nav-bar'>
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
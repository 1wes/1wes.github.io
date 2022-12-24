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

        // let navbarPosition=navbar.getBoundingClientRect().top;

        // alert(navbarPosition);

        let stickNavbar=()=>{

            // if horizontal scroll is greater than position of the navbar
            if(window.scrollY>60){
                navbar.classList.add("sticky");
                navbar.classList.add("top-padding");
            }else{
                navbar.classList.remove("sticky");
                navbar.classList.remove("top-padding");
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
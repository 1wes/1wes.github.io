import React from 'react';
import './Header.css'


// var navbar=document.getElementById("nav-bar");

// window.onscroll=function (){
//     stickNavbar()
// };

// var navbar=document.getElementById("nav-bar");

// var navbarPosition=navbar.offsetTop;

// function stickNavbar(){
//     if(window.scrollY>navbarPosition){
//         navbar.classList.add("sticky");
//     }else{
//         navbar.classList.remove("sticky");
//     }
// }

class Header extends React.Component{

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
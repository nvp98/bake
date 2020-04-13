import React from "react";
import "./Header.scss";
import "../../assets/styles/Helpers/variable.scss";
export default function Header(){
    return(
        <header className="header section-padding">
            <a href="#" className="header__logo">BAKE</a>
            <nav className="header__nav">
                <ul>
                    <li ><a className="active" href="">HOME</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">SERVICE</a></li>
                    <li><a href="">GALLERY</a></li>
                    <li><a href="">CLIENT</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
        </header>
    );
}
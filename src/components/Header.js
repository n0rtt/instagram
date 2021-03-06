import React, { Component } from "react";
import logo from "../logo.svg";

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="container h-flex">
                    <a href="#" className="logo">
                        <img alt="logo" src={logo} />
                    </a>
                    <nav className="links">
                        <ul>
                            <li>
                                <a className="menu__links">Feed</a>
                            </li>
                            <li>
                                <a className="menu__links">Profile</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        );
    }
}

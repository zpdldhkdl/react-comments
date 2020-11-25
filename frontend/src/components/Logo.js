import React from 'react';
import {Navbar} from "react-bootstrap";
import logo from '../logo.svg';
import './Logo.css';

export default function Logo() {
    const navStyle = {
      height: '10rem',
    };
    const logoStyle = {
      height: '5rem'
    };
    return (
        <div>
            <Navbar bg='dark' style={navStyle} className='row'>
                <div className='w-100 h-100 text-center'>
                    <img
                        src={logo}
                        alt='logoImage'
                        className='App-logo'
                        style={logoStyle}
                    />
                    <h1 className='logoText'>
                        React Comments
                    </h1>
                </div>
            </Navbar>
        </div>
    );
};

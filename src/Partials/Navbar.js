import React from 'react'
import './navbar.scss'
import resume from '../_Assets/Kennan_Salisbury_Resume_2020.pdf'

const Navbar = props => {

    return (
        <nav className='navbar fixed-top navbar-expand-sm d-flex justify-content-between'>

                <div>
                    <a className="navbar-brand" href="#home">Kennan Salisbury</a>
        
                    <div className="top-icons">
                        <a href="http://www.linkedin.com/in/kennansalisbury" target="_blank" rel='noreferrer noopener'><i className="fab fa-linkedin"></i></a>
                        <a href="mailto:kennansalisbury@gmail.com"><i className="fas fa-envelope-square"></i></a>
                        <a href="https://github.com/kennansalisbury" target="_blank" rel='noreferrer noopener'><i className="fab fa-github-square"></i></a>
                    </div>
                </div>

                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                        <a className="nav-link" href="#projects">WORK</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#about">ABOUT</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href={resume} target="_blank" rel='noreferrer noopener'>RESUME</a>
                        </li>
                    </ul>
                </div>
                

        </nav>
    )
}

export default Navbar
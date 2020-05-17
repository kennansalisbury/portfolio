import React from 'react'

const Footer = props => {
    return (
        <footer className="fixed-bottom text-center">
            <div className="btm-icons">
                <a href="http://www.linkedin.com/in/kennansalisbury" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                <a href="mailto:kennansalisbury@gmail.com"><i className="fas fa-envelope-square"></i></a>
                <a href="https://github.com/kennansalisbury" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            </div>
        </footer>
    )
}

export default Footer
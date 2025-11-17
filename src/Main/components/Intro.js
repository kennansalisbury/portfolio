import React from 'react'
import resume from "../../_Assets/Kennan_Salisbury_Resume_2020.pdf"

const Intro = props => {
    return (
        <div className="home intro container">

            <div className="row text-center"><h1>Kennan Salisbury</h1></div >

            <div className="row text-center"><h4>Software Engineer Test</h4></div>

            <div className="row"><div className="line col-sm-12"></div></div>
            

            <div className="row text-center links-page">
                <a className="col-sm-4 links-main" href="#projects">WORK</a>
                <a className="col-sm-4 links-main" href="#about">ABOUT</a>
                <a className="col-sm-4 links-main" href={resume} target="_blank" rel='noreferrer noopener'>RESUME</a>
            </div>

            
            <div className = "row links-contact">
                <div>
                    <a href="http://www.linkedin.com/in/kennansalisbury" target="_blank" rel='noreferrer noopener'><i className="fab fa-linkedin"></i></a>
                    <a href="mailto:kennansalisbury@gmail.com"><i className="fas fa-envelope-square"></i></a>
                    <a href="https://github.com/kennansalisbury" target="_blank" rel='noreferrer noopener'><i className="fab fa-github-square"></i></a>
                </div>
            </div>
            <a href="#projects" className="links-page"><i className="fas fa-chevron-down"></i></a>
        </div>
    )
}

export default Intro
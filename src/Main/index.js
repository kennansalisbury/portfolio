import React, {useState} from 'react'
import './main.scss'
import Intro from './components/Intro'
import Work from './components/Work/index'
import About from './components/About'

const Main = props => {

    const skills = [ 'Node.js', 'React', 'HTML', 'CSS', 'Python', 'Express', 'TypeScript', 'EJS', 'Sass', 'SQL/Sequelize', 'PostgreSQL', 'Git', 'MongoDB/Mongoose', 'Materialize/Material UI', 'Bootsrap/Reactstrap']

    return (
        <div className="main">
            <Intro />
            <Work />
            <About skills={skills} />
            <br/>
            <br/>
            <div className="d-flex justify-content-center"><a href="#home" className="links-page"><i className="fas fa-chevron-up"></i></a></div>
            <br/>
            <br/>
        </div>
    )
}

export default Main
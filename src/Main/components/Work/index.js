import React from 'react'

import Project from './Project/index'

//import project info
import Projects from '../../../_Assets/ProjectData'


const Work = props => {

    // const projects = 

    let projectList = Projects.map(project => {
        return(
            <Project 
                key={project.title}
                title={project.title}
                tech={project.tech}
                description={project.description}
                demoLink={project.demoLink}
                demoUn={project.demoUn}
                demoPw={project.demoPw}
                github={project.github}
                github2={project.github2}
                images={project.images}
            />
        )
    })
    
    return (
        <div className="work">
            <div className="row mb-5"><h1 className="col-sm-12 text-center">WORK</h1></div>
            <div className="projects">
                {projectList}
            </div>

        </div>
    )
}

export default Work
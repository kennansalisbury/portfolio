import React from 'react'

import Project from './Project/index'

import meetImg from '../../../_Assets/img/meet_out/user-home.png'
import givingImg from '../../../_Assets/img/giving_tree/hero-img.png'
import chefImg from '../../../_Assets/img/exp_chef/by-category.png'
import scrammbleImg from '../../../_Assets/img/scrammble/scrammble.png'


const Work = props => {
    const projects = [
        {
            title: 'Meet Out',
            tech: 'TypeScript, React, Node.js, Express, JavaScript, MongoDB/Mongoose, HTML/CSS, Reactstrap',
            description: 'Build community with like-minded outdoor activity and fitness enthusiasts.',
            demoLink: 'https://meeting-out.herokuapp.com/',
            demoUn: 'beargrylls@gmail.com',
            demoPw: 'password',
            github: 'https://github.com/kennansalisbury/meet-out',
            github2: null,
            img: meetImg
        },
        {
            title: 'The Giving Tree',
            tech: 'React, Node.js, Express, JavaScript, PostgreSQL, SQL/Sequelize, HTML/CSS, Material UI',
            description: "View an organization's donation needs, purchase to donate, and see the impact your contributions are making.",
            demoLink: 'https://givingtree.netlify.app',
            demoUn: 'motherteresa@gmail.com',
            demoPw: 'password',
            github: 'https://github.com/kennansalisbury/giving_client',
            github2: 'https://github.com/kennansalisbury/giving_server',
            img: givingImg
        },
        {
            title: 'Express Chef',
            tech: 'Node.js, Express, EJS, PostgreSQL, SQL/Sequelize, HTML/CSS, Bootstrap',
            description: "Search, save, create and categorize recipes in your own digital cookbook.",
            demoLink: 'https://express-chef.herokuapp.com/auth/login/test-user',
            demoUn: 'juliachild@gmail.com',
            demoPw: 'password',
            github: 'https://github.com/kennansalisbury/express-chef',
            github2: null,
            img: chefImg
        },
        {
            title: 'Scrammble',
            tech: 'JavaScript, HTML, CSS, Materialize',
            description: "A one-round, time restricted word game in which 2 players compete to play the best word from a random set of tiles.",
            demoLink: 'https://scrammble.netlify.app/',
            demoUn: null,
            demoPw: null,
            github: 'https://github.com/kennansalisbury/scrabble_scramble',
            github2: null,
            img: scrammbleImg
        },
    ]

    let projectList = projects.map(project => {
        return(
            <Project 
                title={project.title}
                tech={project.tech}
                description={project.description}
                demoLink={project.demoLink}
                demoUn={project.demoUn}
                demoPw={project.demoPw}
                github={project.github}
                github2={project.github2}
            />
        )
    })
    
    return (
        <div className="projects">
            <div class="row mb-5"><h1 class="col-sm-12 text-center">WORK</h1></div>
            <div>
                {projectList}
            </div>

        </div>
    )
}

export default Work
import React from 'react'

import Project from './Project/index'

// import images
import meetImg from '../../../_Assets/img/meet_out/user-home.png'
import meetModal from '../../../_Assets/img/meet_out/modal.png'
import meetDetails from '../../../_Assets/img/meet_out/details.png'
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
            images: [
                {
                    img: meetImg,
                    caption: 'View calendar and scheduled meets',
                    alt: 'meet-out-home screenshot'
                },
                {
                    img: meetModal,
                    caption: 'View more info on a meet',
                    alt: 'meet-out-modal screenshot'
                },
                {
                    img: meetDetails,
                    caption: 'Full meet details',
                    alt: 'meet-out-details screenshot'
                },
        ]
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
            images: [{
                img: givingImg,
                alt: 'giving tree image',
                caption: 'Giving Tree home'
            }]
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
            images: [{
                img: chefImg,
                alt: 'express chef home',
                caption: 'Home'
            }]
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
            images: [{
                img: scrammbleImg,
                alt: 'scrammble image',
                caption: 'Home'
            }]
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
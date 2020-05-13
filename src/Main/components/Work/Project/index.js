import React from 'react'

import Images from './Images'

const Project = props => {

    return (
        <div className="card border-0 mb-5">
            <div className="row project">
                <div className="col-sm-12 col-md-6">
                    <h2>{props.title}</h2>
                    <p>{props.tech}</p>
                    <hr/>
                    <p>{props.description}</p>
                    <a href={props.demoLink} target="_blank" rel='noreferrer noopener'>Live Demo </a>
                    <br/>
                    <p className="demo-info"><small>Test User un: {props.demoUn} pw: {props.demoPw}</small></p>
                    <a href={props.github} target="_blank" rel='noreferrer noopener'>Github Repo {props.github2 ? '- Client' : ''}</a>
                    {props.github2 ? <><br/> <a href={props.github2} target="_blank" rel='noreferrer noopener'>Github Repo - Server</a></> : '' }
                </div>
                <div className="col-md-1"></div>
                <div className="col-sm-12 col-md-5 mt-5">
                    <Images images={props.images} />
                </div> 
            </div>
        </div>
    )
}

export default Project
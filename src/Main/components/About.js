import React from 'react'
import '../main.scss'
import me from '../../_Assets/img/me3.jpg'

const About = props => {

    let skillSection = props.skills.map((skill, i) => {
        return <li key={i}>{skill}</li>
    })

    return (
        <div className="container about">
            <div className="row mb-4 ab">
                <div className="col-sm-12 col-md-4"><img className=" img-fluid my-img rounded" src={me} alt='picture_of_kennan'/></div>
                
                <div className="col-sm-12 col-md-8 about-head">
                    <div className="col-sm-12"><h1>About Kennan</h1></div>   
                    <div className="col-sm-12"><img className="img-fluid hide-img rounded" src={me} alt='picture_of_kennan'/></div>

                    <h4>Seattle-based lover of food, travel, and a good crossword puzzle.</h4>
                    <p className="text-left">I am a purpose-driven software engineer who loves solving complex 
                        front-end and back-end challenges. I am a <span>strategic thinker</span> by nature, and a big <span>believer in laughter</span>. 
                        With seven years of experience in marketing and client service, I have a strong foundation in <span>communication</span>, 
                        an <span>obsession for detail</span>, a knack for <span>inspiring cross-functional teams</span>, and a keen interest in the <span>end user.</span>
                        I am passionate about creating <span>tangible solutions</span> that <span>make an impact</span> on those around me, and I am looking 
                        for opportunities to build digital tools that <span>better lives.</span></p>
                </div>
            </div>
        
            <hr/>
            <div className="row skills">
                <h3 className="col-sm-12">Technical Skills</h3>
                <ul>{skillSection}</ul>
            </div>
            
            <hr/>
        </div>
    )
}

export default About
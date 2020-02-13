import React, { Component } from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';

class Work extends Component {
    render() { 
        return (
            <div>
                <h1 className='heading'>
                    <Fade bottom cascade>Machine Learning.</Fade>
                </h1>
                <div className='work-content'>
                    {data.machineLearning.map((project)=>(
                        <Project key={project.id}
                                 title = {project.title}
                                 service = {project.service}
                                 imageSrc = {project.imageSrc}
                                 url={project.url}
                       />
                    ))}
                </div>
                <h1 className='heading'>
                <Fade bottom cascade>Web development.</Fade></h1>
                <div className='work-content'>
                        {data.projects.map((project)=>(
                            <Project key={project.id}
                                     title = {project.title}
                                     service = {project.service}
                                     imageSrc = {project.imageSrc}
                                     url={project.url}
                            />
                        ))}
                </div>
            </div>
        );
    }
}
 
export default Work;
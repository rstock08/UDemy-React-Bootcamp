import React, { Component} from 'react';
import PROJECTS from './data/projects.js';

class Project extends Component {
    render(){
        const { title, image, description, link } = this.props.project;
        //const title = this.props.project.title;
        //const image = this.props.project.image;
        //const description = this.props.project.description;
        //const link = this.props.project.link;

        console.log('this.props', this.props);

        return(
            //<div>{this.props.project.title}</div>
            <div style={{ display: 'inline-block', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src={image} alt='Profile' style={{width: 200, height: 120}}/>
                <p>{description}</p>
                <a href={link}>{link}</a>
            </div>
        )
    }
}

class Projects extends Component {
    render(){
        return (
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return(
                                <Project key={PROJECT.id} project={PROJECT}/>
                            );
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;
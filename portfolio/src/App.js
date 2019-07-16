// Import react and the component classes
import React, { Component } from 'react';

// See the difference between a regular class and one that extends component
class RegularClass {}
class ComponentClass extends Component{}

const regularClassInstance = new RegularClass();
const componentClassInstance = new ComponentClass();

console.log('componentClassInstance', componentClassInstance);
console.log('regularClassInstance', regularClassInstance);

// Creating a class called App which uses Component
class App extends Component{

    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    /*
    constructor(){
        super();
        this.state = { displayBio: false};

        console.log('Component this', this);

        this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
    }

    toggleDisplayBio(){
        this.setState({ displayBio: !this.state.displayBio });
    }*/

    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Reed. I'm a Software Engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
                {
                    // Ternary statement if this.state.displayBio = true it will be set to everything inside the parenthesis
                    // Else if this.state.displayBio = false it will set it to whats after the colon
                    this.state.displayBio ? (
                        <div>
                            <p>I live in San Diego, and code every day.</p>
                            <p>My favorite language is Javascript, and I think React.js is awesome.</p>
                            <p>Besides coding, I also love music and ramen!</p>
                            <button onClick={this.toggleDisplayBio}>Read Less...</button>
                        </div>
                    ) : (
                        <button onClick={this.toggleDisplayBio}>Read More...</button>
                    )
                }
            </div>
        )
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
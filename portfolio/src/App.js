// Import react and the component classes
import React, { Component } from 'react';

// Creating a class called App which uses Component
class App extends Component{
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Reed. I'm a Software Engineer.</p>
                <p>I'm always looking forward to working on meaningful projects.</p>
            </div>
        )
    }
}

// Other files will be able to import this App (look at index.js import statements
export default App;
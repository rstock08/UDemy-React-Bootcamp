// Imports react library
import React from 'react';

// Imports react-dom library which allows the insertion of index.js into index.html
import ReactDOM from 'react-dom';

// import App from local src/App.js
import App from './App';

// Imports the div into the root element located in index.html
//ReactDOM.render(<div>React Element</div>, document.getElementById('root'));

// Imports the imported App into document with element id root
//ReactDOM.render(<App></App>, document.getElementById('root'));
// Shorter version - allowed due to no children of <App> being required
ReactDOM.render(<App />, document.getElementById('root'));

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    speak(){
        console.log('My name is ' + this.name + ' and my age is ' + this.age);
    }
}

class Lion extends Animal{
    constructor(name, age, color, speed){
        super(name, age);
        this.color = color;
        this.speed = speed;
    }

    roar(){
        console.log('Fur color is ' + this.color + ' my speed is ' + this.speed);
    }
}

const animal1 = new Animal('Henry', 21);
animal1.speak();
console.log(animal1);

const lion = new Lion('Timmay', 10, 'blue', 20)
lion.roar();
lion.speak();
console.log(lion);

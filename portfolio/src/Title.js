import React, {Component} from 'react';

const TITLES = [
    'a software engineer.',
    'a music lover.',
    'an enthusiastic learner.',
    'an adventure seeker.'
];

export default class Title extends Component {
    state = { titleIndex: 0};

    componentDidMount(){
        console.log('Title component has mounted!');
        this.animateTitles();
    }

    componentWillUnmount(){
        console.log('Title component will unmount!');
        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        // Causes a small memory leak because if the component is unmounted setInterval is still going to fire after 4 seconds
        this.titleInterval = setInterval(()=>{
            //setInterval(()=>{
            if(this.state.titleIndex < 3){
                this.setState({titleIndex: this.state.titleIndex += 1});
            }
            else{
                this.setState({titleIndex: 0})
            }
        }, 4000);
        console.log('this.titleInterval' + this.titleInterval);
    }

    render(){
        const title = TITLES[this.state.titleIndex];

        return(
            <p>I am {title}</p>
        )
    }
}
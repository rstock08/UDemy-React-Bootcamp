import react from 'react';
console.log("hi");

//const element = React.createElement('div', null, 'React element!');

const element = <div>React element with JSX!</div>;

ReactDOM.render(element, document.getElementById('root'));
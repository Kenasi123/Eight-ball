import React from 'react'; // import react from react
const ateball = require('./8image.png');

class EightApp extends React.Component { // creat a class called joke app that inherits joke app component
    constructor(props) { // called as instance when joke app class created 
        super(props); // pass the props into consturtor and super 
        this.state = {
            question: ''
           
        };
    }

    _handleQuestionChange = (event) => {
        this.setState({ question: event.target.value });
      };
    
    render() {
        return (
            <div>
               
                <input type="text" value={this.state.question} onChange={this._handleQuestionChange} />
                <button onClick={this._fetchAPI}>Submit</button>
                <br></br>
                <img src={ateball} alt="8 ball image" style={{"height" : "100%", "width" : "50%"}}/>
            </div>
        );
    }
    _fetchAPI = () => {  // convetion is with underscore to know we made the method 
        const url = 'https://8ball.delegator.com/magic/JSON/';
        fetch(url) // make a get request with fetch 
            .then(response => response.json()) // we need time to get data back from the promise 
            .then(eightJson => {  // we need to parse out the json and it takes time for first promise 
                this.setState({ })

        });
    }

}
export default EightApp; 


import React from "react" ;
class StateComponent extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"KEC",
            course:"MERN"
        }
    }
    changeState = () =>{
        console.log("Kongu Engineering College")
    }
    render(){
        return(
            <div>
                <h1>This is State Component</h1>
                <h2>Hello, {this.state.name} <br></br> This is {this.state.course} class</h2>
                <h3>I am changing the state of the {this.state.name} to {this.changeState} </h3>
                <button onMouseOver={this.changeState}><h2>Click me to Change the State</h2></button>
            </div>
        )
    }
}
    
export default StateComponent;
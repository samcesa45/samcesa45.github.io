//import React, { Component } from 'react';
//import pic1 from "./pic1.jpg"
import React, { Component } from "react"

//import Todoitem from "./Todoitem.js"
//import todosData from "./todosData"
//import React, { Component } from 'react';
class App extends Component{
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.baseState =
       this.state
        this.handleClick = this.handleClick.bind(this)
        this.handleClick1 = this.handleClick1.bind(this)
        
        
    
    
        
    }
   
    handleClick() {
        this.setState((prevState => {
            return{
                count: prevState.count + 1
            }
        }))
     
    }
    handleClick1() {
        this.setState((prevState => {
            return{
                count: prevState.count * 2
            }
        }))
     
    }
    resetButton = () => {
        this.setState(this.baseState)
    }
    
       
    
   
    render() {
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Add</button>
                <br/>
                <button onClick={this.handleClick1}>Double</button>
                <button onClick={this.resetButton}>Reset</button>
                
            </div>
        )
    }
}
/*function App() {
        const todoComponent = todosData.map( item => <Todoitem key={item.id} text={item.text} completed={item.completed}/>)
    return(
        <div className="todo-list">
            {todoComponent}
        </div>
    )
}
*/
/*function App() {
      function handleClick() {
          console.log("you click here")
      }
    return(
        <div>
            <img onMouseOver={() => console.log("Hovered")} src={pic1} alt={"eye"} />
            <br />
            <br />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}*/

/*class App extends Component{
    constructor(props){
        super(props)
        this.state = {
               isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
          this.setState(state => ({isToggleOn: !state.isToggleOn}))
    }
    render() {
        return(
          <button onClick={this.handleClick}>
               {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        )
    }
}*/
/*function App() {
    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    return(
        <button onClick={handleClick}>Click me</button> 
    )
}*/
/*function handleClicked() {
    console.log("You clicked me")
}
function App(){
    return(
        <div>
            <img style={{width:"350px", height:"350px"}} src={pic1} alt={"eye"} />
            <br />
            <br />
            <button onClick={handleClicked}>Click me</button>
        </div>
    )
}*/
/*class App extends Component{
    constructor() {
        super()
        this.state = {
             todo: todosData
        }
    }
       render() {
        const todoComponent = this.state.todo.map(item => <Todoitem key={item.id} text={item.text} completed={item.completed}/>)
        return(
        
            <div className="todo-list">
                 {todoComponent}
            </div>
        )
       }
}*/
/*function App () {
         const todoComponent = todosData.map(item => <Todoitem key={item.id} text={item.text} completed={item.completed}/>)
    return(
        
        <div className="todo-list">
             {todoComponent}
        </div>
    )

}
*/
/*function App()
 {
    return ( 
        <div>
            <h1>You are currently logged (in/out)</h1>
        </div>
     );
}*/


/*class App extends Component {
    constructor(){
        super() 
            this.state ={
                name: "Samuel",
                age: "5"
            }
        
    }
    render(){
        return(
            <div>
                 <h1> {this.state.name} is my name</h1>
                 <h3> I am {this.state.age} years old</h3>
            </div>
        )
    }
    
}*/

/*function App() {
    return(
        <div>
            <Header />
            <Greeting />
        </div>
    )
}*/


/*function Header(props) {
    return(
        <div>
            <header>
                <p>Welcome, {props.username}!</p>
            </header>
        </div>
    )
}*/

/*class Header extends React.Component{
       render(){
           return(
            <div>
            <header>
           <p>Welcome, {this.props.username}!</p>
       </header>
      </div>
           )
          
       }
}*/
/*function Greeting(props) {
       const date = new Date();
       const hours = date.getHours()
       let timeOfDay;
       if (hours < 12){
           timeOfDay ="Morning";
       }else if(hours >= 12 && hours < 17) {
        timeOfDay ="Afternoon";
       }else {
        timeOfDay ="night";
       }
       return(
          <h1>Good {timeOfDay} to you, sir or madam!</h1>
       )  
}*/

/*class Greeting extends Component{
    
    render() {
        const date = new Date();
    const hours = date.getHours()
    let timeOfDay;
    if (hours < 12){
        timeOfDay ="Morning";
    }else if(hours >= 12 && hours < 17) {
     timeOfDay ="Afternoon";
    }else {
     timeOfDay ="night";
    }
        return(
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}*/

export default App

//State is actually the data that the component maintains
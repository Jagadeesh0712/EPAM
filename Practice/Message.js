import { Component } from "react";

class Message extends Component{
    constructor()
    {
        super();
        this.state={
            Message:"How do you do? from message Component"
        }
    }
    changeMessage(){
        this.setState(
            {
            Message:"Well Great..!"}
        )
    }
    render()
    {
          return (<div className="my-app">
            <h1>{this.state.Message}</h1>
            <button onClick={()=>this.changeMessage.Message()}>Click</button>
          </div>)
    }
}
export default Message
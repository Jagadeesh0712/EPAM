/*import React from 'react'*/
import React, { Component } from "react";
class Welcome extends Component{
    render(){
        return <h1>{this.props.Age}</h1>
    }
}
/*function Welcome(props){
    return <h1>{props.Name}</h1>
}*/
export default Welcome;
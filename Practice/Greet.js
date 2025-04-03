import React from 'react'
function Greet(props)
{
   /* return(
        <div>
            <h1>Hello from Greet</h1>
        </div>
    )*/
   /* return(
        React.createElement('div',null,<h1>Hello Welcome</h1>)
    )*/
    return <h1>{props.Name} and his age is {props.age}</h1>
}
export default Greet;

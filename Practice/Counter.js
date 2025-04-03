import React,{ component } from "react";

class Counter extends component
{
    constructor (props)
    {
        super(props);
        this.state={
            count:0
             
        }
    }
    increment()
    {
       /* this.setState(
            {
                count :this.state.count+1
            }

        ) */

        this.setState(prevState=>({count:prevState.count+10}))
        console.log(this.state.count)
        
    }
    render()
    {
        return (<div className="Anna">
           
           <h1>{this.state.count}</h1>
           <button onClick={()=>this.increment()}>Click</button>
            
        </div>
        )
    }
  

}
export default Counter
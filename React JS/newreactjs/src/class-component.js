import { Component} from "react";

class Life extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"deepak",
            id:1,
            class:4
        }
        console.log("constructor")
    }
    static getDrivedStateFromProps(props,state){
        console.log("from get drived")
        return null
    }
    componentDidMount(){
        console.log("in mount")
    }
render()
{   
    return(
        <div className="life">
            {
                console.log("in render")
            }
          <h1>Welcome</h1>
        </div>
    )

}

}
export default Life;
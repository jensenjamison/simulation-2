import React, {Component} from "react";
import House from "../House/House"
import {Link} from "react-router-dom"


export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            houses:[]
        }
        this.handleInput = this.handleInput.bind(this)
    }

    handleInput(e) {
        this.setState({[e.target.houses] : e.target.value }) 
    }



    render(){
        return(
            <div>
                <Link> <button>Wizard</button> </Link>
                <House  />
            </div>
        )
    }
}
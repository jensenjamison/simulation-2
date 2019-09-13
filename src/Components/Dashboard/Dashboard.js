import React, {Component} from "react";
import House from "../House/House"
import {Link} from "react-router-dom"


export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state ={
            houses:[]
        }
    }



    render(){
        return(
            <div>
                <Link> <button>Dashboard</button> </Link>
                <House  />
            </div>
        )
    }
}
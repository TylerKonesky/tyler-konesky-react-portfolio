import React, { Component } from "react";
import PortfolioContainer from "../portfolio-container"


export default class Home extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    
    render(){
        return(
            <div>
                <PortfolioContainer />
            </div>
        )
    }
}

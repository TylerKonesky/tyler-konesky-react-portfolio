import React, { Component } from 'react';
import PortfolioItem from './portfolio-item'
import axios from "axios"

export default class PortfolioContainer extends Component {
    constructor(){
        super();

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data : []   
        };

        this.handleFilter = this.handleFilter.bind(this)
    }

    componentDidMount(){
        axios.get("https://tylerkonesky.devcamp.space/portfolio/portfolio_items")
        .then(response =>{
            this.setState({data: response.data.portfolio_items})
        })
        
    }
    portfolioItems(){
        return this.state.data.map(item=>{
            return <PortfolioItem 
                key={item.id}
                item={item}
                
                />    
        })
    }

    handleFilter(filter){
        this.setState({
            data: this.state.data.filter(element =>{return element.category === filter})
        })
    }


    render() {
        if(this.state.isLoading){
            return <div>Loading...</div>;
        }
        return (
            <div className="portfolio-items-wrapper">
                <button className="btn" onClick={()=>{this.handleFilter('Ecommerce')}}>Ecommerce</button>
                <button className="btn" onClick={()=>{this.handleFilter('Scheduling')}}>Scheduling</button>
                <button className="btn" onClick={()=>{this.handleFilter('Enterprise')}}>Enterprise</button>
                {this.state.data.length != 0 ? this.portfolioItems() : <h3>"No data you have found..."</h3>}
            </div>
        )
    }
}
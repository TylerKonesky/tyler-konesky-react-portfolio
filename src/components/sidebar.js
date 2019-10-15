import React, {Component} from 'react'
import { Link} from 'react-router-dom'

class SideBar extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            
            
            <div>
            <Link to="/counter">Counter</Link>
            <Link to="/">Home</Link>
            <Link to="/toggle">Toggle</Link>
            <Link to="/align">Align</Link>
            <Link to="/showhide">Show Hide</Link>
            <Link to="/clockr">Clock</Link>
            <Link to="/changecolor">Change Color</Link>
            <Link to="/fontsizer">Font Sizer</Link>
            </div>

            
        )
    }
}

export default SideBar
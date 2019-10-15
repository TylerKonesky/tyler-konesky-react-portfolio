import React, { Component } from "react";
import moment from 'moment'

export default class ReactPractice extends Component {
  constructor() {
    super();

    this.state = {
        counter: 0,
        toggle: "Hello",
        fontSize: 20,
        align: "Left",
        color: "Blue",
        time: moment().format('h:mm:ss a'),
        hideAndSeek : true,
        newColor: ''

    }
  }

  handleAdd(){
      let count = this.state.counter
      this.setState({
          counter: count + 1
      })
  }
  handleSub(){
    let count = this.state.counter
    this.setState({
        counter: count - 1
    })
}

handleToggle(){
    if(this.state.toggle === "Hello"){
        this.setState({
            toggle: "Goodbye"
        })
    }else if(this.state.toggle === "Goodbye"){
        this.setState({
            toggle: "Hello"
        })
    }
}

handleAlign(direction){
    this.setState({
        align: direction
    })
}

handleHide(){
    this.setState({
        hideAndSeek: false
    })
}

handleShow(){
    this.setState({
        hideAndSeek: true
    })
}

componentDidMount(){
    this.interval = setInterval(this.updateTime.bind(this), 1000)
}

componentWillUnmount(){
    clearInterval(this.interval)
}

updateTime(){
    this.setState({
        time: moment().format('h:mm:ss a')
    })
}

handleIncreaseFont(){
    let currentFont = this.state.fontSize
    this.setState({
        fontSize: currentFont + 5
    })
}

handleDecreaseFont(){
    let currentFont = this.state.fontSize
    this.setState({
        fontSize: currentFont - 5
    })
}

handleColorChange(newColor){
    this.setState({
        color: newColor
    })
}




  render() {
    
    return (
      <div>
        <div>

            {/* Counter */}
            <div>
                {this.state.counter}
            </div>
            <div>
                <button onClick={()=>{this.handleAdd()}}>Add</button>
                <button onClick={()=>{this.handleSub()}}>Subtract</button>
            </div>

            {/* Toggle Hello Goodbye */}
            <div>
                {this.state.toggle}
            </div>
            <div>
                <button onClick={()=>{this.handleToggle()}}>Toggle Text</button>
            </div>

            {/* Toggle Alignment */}
            <div>
            {this.state.align == "Right" ?
                <div className="align-items" style={{"display": "flex", "justify-content": "flex-end"}}>
                Align Me
               
               </div>
               :
               this.state.align == "Center" ?
               <div className="align-items" style={{"display": "flex", "justify-content": "center"}}>
                   Align Me
               </div>
               :
               <div className="align-items" style={{"display": "flex", "justify-content": "flex-start"}}>
                   Align Me
               </div>
            }
            <button onClick={()=>{this.handleAlign("Left")}}>Left</button>
            <button onClick={()=>{this.handleAlign("Center")}}>Center</button>
            <button onClick={()=>{this.handleAlign("Right")}}>Right</button>
            </div>

            {/* Clock! */}
            <div>
                {this.state.time}
            </div>
            {/* Peekaboo */}
            <div>
                
                {this.state.hideAndSeek == false ? 
                
                <button onClick={()=>{this.handleShow()}}>Show</button> : 
                
                <div>
                    <div>Peek - a - boo</div>
                    <button onClick={()=>{this.handleHide()}}>Hide</button>
                </div>
                }
            </div>

            {/* Font Sizer */}

            <div>
                <div style={{"font-size":this.state.fontSize}}>{this.state.fontSize}px</div>
                <button onClick={()=>{this.handleIncreaseFont()}}>Increase</button>
                <button onClick={()=>{this.handleDecreaseFont()}}>Decrease</button>
            </div>

                {/* Color */}
                <div style={{"font-size": "30px"}}>
                    <div style={{"color": this.state.color}}>{this.state.color}</div>
                    <input onChange={(e)=>{this.setState({newColor: e.target.value})}} placeholder="Enter Hex or Color"></input>
                    <button onClick={()=>{this.handleColorChange(this.state.newColor)}}>Change</button>
                </div>
            
            
            
        </div>
      </div>
    );
  }
}





//color changer
import React,{Component} from'react'
import {Button} from'react-bootstrap'
import '../assets/css/LightSwitch.css'

class LightSwitch extends Component{
    
    constructor(){
        super()
        this.handleclick =this.handleclick.bind(this)
        this.state={
            power:false
        }
    }
     handleclick() {
        this.setState({
        power:!this.state.power
        })
    }
    render(){
        return(
            <>
            <h1 className={this.state.power?'ON':'OFF'}>
                Switch {this.state.power?'ON':'OFF'}
            </h1>
            <Button onClick={this.handleclick}>바꾸기</Button>
            </>
        )
    }
}
export default LightSwitch
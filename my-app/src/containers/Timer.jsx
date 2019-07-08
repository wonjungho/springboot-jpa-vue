import React,{Component} from 'react'

class Timer extends Component{
    constructor(props){
        super(props)
        this.state={secend:0}
    }
    tick(){
        this.setState(state=>({
            secend:state.secend +1
        }))
    }
    componentDidMount(){
        this.interval = setInterval(() => this.tick(),1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    render(){
        return(
            <>
            <h1>Secend:{this.state.secend}</h1>
            </>
        )
    }
}
export default Timer
import React,{Component} from 'react'
import ListNames from '../components/ListNames.jsx'

const listData =[
    '김유신','강감찬','유관순'
]

class Hello extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'홍길동'
        }
    }
    render(){
        return(
            <>
            <ListNames data={listData}/>
            <h1>Hello {this.state.name}</h1>
            </>
        )
    }
}
export default Hello
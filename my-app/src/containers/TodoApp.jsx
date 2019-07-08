import React,{Component} from 'react'
import TodoList from '../components/TodoList.jsx'
import {Form,Button} from'react-bootstrap'

class TodoApp extends Component{
    constructor(props){
        super(props)
        this.state={items:[],text:''}
        this.handleChange =this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    render(){
        return(
            <>
            <h3>TODO</h3>
            <TodoList items={this.state.items}/>
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Label htmlFor="new-todo">What needs to be done?</Form.Label>
                <Form.Control id="new-toto" onChange={this.handleChange} value={this.state.text} type="text"/>
                </Form.Group>
                <Form.Group>
                <Button className="btn btn-info" type="submit">
                    Add#{this.state.items.length+1}
                </Button>
                </Form.Group>
            </Form>
            </>
        )
    }
    handleChange(e){
        this.setState({text:e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        if(!this.state.text.length){
            return;
        }
        const newItem={
            text:this.state.text,
            id:Date.now()
        };
        this.setState(state => ({
            items:state.items.concat(newItem),
            text:''
        }));
    }
}
export default TodoApp
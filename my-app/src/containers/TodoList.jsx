import React,{Component} from 'react';
import { ListGroup } from 'react-bootstrap';

class TodoList extends Component{
    render(){
        return(
            <ListGroup as="ul">
                {this.props.items.map(item =>(
                <ListGroup.Item as="li" key={item.id}>{item.text}</ListGroup.Item>
                ))}
            </ListGroup>  
        )
    }
}

export default TodoList
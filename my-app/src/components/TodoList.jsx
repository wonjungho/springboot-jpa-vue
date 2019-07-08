import React from 'react'
import {ListGroup} from 'react-bootstrap'
const TodoList =(props)=>{
    return(
        <ListGroup as="ul">
                {props.items.map(item =>(
                <ListGroup.Item as="li" key={item.id}>{item.text}</ListGroup.Item>
                ))}
        </ListGroup>  
    );
}
export default TodoList;
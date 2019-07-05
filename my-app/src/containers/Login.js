import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            customerId:'',
            password:''
        }
    }
    render(){
        return(
            <from onSubmit ="{this.handleSubmit}">
            <Form>
            <Form.Group controlId="customerId">
              <Form.Label>Customer Id</Form.Label>
              <Form.Control type="text" placeholder="CustomerId" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              전송
            </Button>
            <Button variant="danger">취소</Button>
          </Form>
          </from>
        );
    }
}
export default Login
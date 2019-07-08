import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap'

class Join extends Component{
    constructor(props){
        super(props)
        this.state={
            customerId:'',
            password:'',
            customerName:'',
            phone:'',
            city:''
        }
    }
    render(){
        return(
            <from onSubmit ="{this.handleSubmit}">
            <Form>
              <Form.Group  controlId="customerId">
                <Form.Label>CustomerId</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>
              <Form.Group  controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group  controlId="customerName">
                <Form.Label>CustomerName</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>
              <Form.Group  controlId="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>
              <Form.Group  controlId="city">
                <Form.Label>city</Form.Label>
                <Form.Control type="text" placeholder="Password" />
              </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </from>
        );
    }
}
export default Join
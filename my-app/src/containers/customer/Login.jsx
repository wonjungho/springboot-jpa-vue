import React,{Component} from 'react';
import {Form,Button} from 'react-bootstrap';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            customerId:'',
            password:'',
            context:'http://localhost:9000/customers'
        }
    }
    render(){
        return(
            <Form onSubmit ="{this.handleSubmit}">
            <Form.Group controlId="customerId">
              <Form.Label>Customer Id</Form.Label>
              <Form.Control type="text" placeholder="CustomerId" name="customerId" value={this.state.customerId} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}/>
            </Form.Group>
            <Button variant="primary" type="submit" onClick={this.login}>
              전송
            </Button>
            <Button variant="danger">취소</Button>
          </Form>
        );
    }
    login=(e)=>{
      e.preventDefault();
      alert('로그인버튼 클릭');
      let data={
        customerId:this.state.customerId,
        password:this.state.password
      }
      alert('보내는 아이디'+data.customerId)
      alert('보내는 비밀번호'+data.password)
      let header={
        'Content-Type':'application/json',
        'Authorization':'JWT fefege..'
      }
      axios.post(`${this.state.context}/login`,data,{headers:header})
      .then(res=>{
        alert('성공!')
        alert('Login 성공'+res.data.customerName)
      })
      .catch(e=>{
        alert('실패!')
      })
    }
    handleChange=(e)=>{
      const target =e.target;
      const name =target.name;
      this.setState({
        [name]:target.value
      })
    }
    
}
export default Login
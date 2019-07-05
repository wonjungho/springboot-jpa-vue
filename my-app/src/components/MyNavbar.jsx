import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../containers/Login';
import Join from '../containers/Join';
import Home from '../containers/Home'
import MyPage from '../containers/MyPage';

const MyNavbar = () =>{
    return(
        <Router>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand > <Link to="/home">BITCAMP</Link></Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link > <Link to="/home">Home</Link></Nav.Link>
                <Nav.Link > <Link to="/s">스케쥴러</Link></Nav.Link>
                <Nav.Link > <Link to="/join">회원가입</Link></Nav.Link>
                <Nav.Link > <Link to="/login">로그인</Link></Nav.Link>
                <Nav.Link > <Link to="/mypage">마이페이지</Link></Nav.Link>
                <Nav.Link > <Link to="#">회원탈퇴</Link></Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>

        <Route path="/login"  component={Login} />
        <Route path="/join" component={Join} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/home" component={Home}/>
        </Router>
    );
}

export default MyNavbar;

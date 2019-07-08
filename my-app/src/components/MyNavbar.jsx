import React from 'react'
import {Navbar,Nav,Form,FormControl,Button,NavDropdown} from 'react-bootstrap'
import { BrowserRouter as Router, Route} from "react-router-dom";
import Login from '../containers/customer/Login.jsx';
import Join from '../containers/customer/Join.jsx';
import Home from '../containers/Home.jsx'
import MyPage from '../containers/customer/MyPage.jsx';
import Hello from '../containers/Hello.jsx'
import LigthSwitch from '../containers/LightSwitch.jsx'
import Timer from '../containers/Timer.jsx'
import TodoApp from '../containers/TodoApp.jsx'
import Clock from '../containers/Clock.jsx'

const MyNavbar = () =>{
    return(
        <Router>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/home">BITCAMP</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/todoapp">스케쥴러</Nav.Link>
                <NavDropdown title="기본문법" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/hello">Hello</NavDropdown.Item>
                <NavDropdown.Item href="/switch">Switch</NavDropdown.Item>
                <NavDropdown.Item href="/timer">Timer</NavDropdown.Item>
                <NavDropdown.Item href="/clock">Clock</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="유저관리" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/join">회원가입</NavDropdown.Item>
                <NavDropdown.Item href="/login">로그인</NavDropdown.Item>
                <NavDropdown.Item href="/mypage">마이페이지</NavDropdown.Item>
                <NavDropdown.Item href="/#">회원탈퇴</NavDropdown.Item>
                </NavDropdown>
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
        <Route path="/hello" component={Hello}/>
        <Route path="/switch" component={LigthSwitch}/>
        <Route path="/timer" component={Timer}/>
        <Route path="/todoapp" component={TodoApp}/>
        <Route path="/clock" component={Clock}/>
        </Router>
    );
}

export default MyNavbar;

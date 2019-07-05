import React from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

const MyNavbar = () =>{
    return(
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BITCAMP</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">스케쥴러</Nav.Link>
                <Nav.Link href="#features">회원가입</Nav.Link>
                <Nav.Link href="#pricing">로그인</Nav.Link>
                <Nav.Link href="#pricing">정보수정</Nav.Link>
                <Nav.Link href="#pricing">회원탈퇴</Nav.Link>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>

    );
}

export default MyNavbar;

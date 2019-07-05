import React, { Component } from 'react';
import { Table, Figure } from 'react-bootstrap';
import photo from '../assets/images/dddd.jpeg';
class MyPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photo: '',
            customerid: '',
            customerName: '',
            phone: '',
            city: '',
        }

    }
    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <tbody>
                        <tr>
                            <td rowSpan='4'>
                                <Figure>
                                    <Figure.Image
                                        width={171}
                                        height={180}
                                        alt="171x180"
                                        src= {photo}
                                    />
                                </Figure>
                            </td>
                            <td>아이디:</td>
                            <td>Hong</td>
                        </tr>
                        <tr>
                            <td>이름:</td>
                            <td>홍길동</td>
                        </tr>
                        <tr>
                            <td>전화번호:</td>
                            <td>1234</td>
                        </tr>
                        <tr>
                            <td>주소:</td>
                            <td>서울</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default MyPage
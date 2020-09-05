import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from "react-bootstrap";

export default function NavBar() {
    return (
        <div className={"navStyle"}>
            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
            </Nav>

        </div>
    );
}
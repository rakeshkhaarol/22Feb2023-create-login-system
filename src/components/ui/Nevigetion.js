import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Nevigetion() {
  return (
    
    <>
        <Nav
            activeKey="/home"
            onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
            <Nav.Item>
                <Link to="/" className="nav-link active">Home</Link>
            </Nav.Item>
            <Nav.Item>
                <Link to="/Login" className="nav-link">Login</Link>
            </Nav.Item>
            <Nav.Item>
                <Link  to="/Register" className="nav-link ">Register</Link>
            </Nav.Item>
        </Nav>
    </>
  )
}

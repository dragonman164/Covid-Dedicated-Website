import {Nav,Navbar,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';


const fontStyle = {
    'fontWeight':'bold',
    'fontSize':'26px'
  }
  

  
  const NavbarStyle = {
    textDecoration : 'inherit',
    color : 'inherit',
    fontWeight:'bold',
  
  }


const NavBar = ()=>{
    return (
        <>
       <Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className="h4">
  <Navbar.Brand  >
  Covid Se Bacho</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link style={fontStyle} ><Link to="/" style={NavbarStyle}>Home</Link></Nav.Link>
      <Nav.Link style={fontStyle} ><Link to="/testing" style={NavbarStyle}>Self Testing</Link></Nav.Link>
      <Nav.Link style={fontStyle} ><Link to="/track" style={NavbarStyle}>Tracker</Link></Nav.Link>
    </Nav>
    <Nav>
      <Button variant="success" className="btn-lg font-weight-bold"><Link to="/resources" style={NavbarStyle}>Resources</Link></Button>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </>
    )
}

export default NavBar;
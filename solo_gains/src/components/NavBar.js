import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" component={Link}>Solo Gains</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='https://buy.stripe.com/test_bIY2bTb188h86WY288' component={Link}>Donate</Nav.Link>
            <NavDropdown title="Workout categories" id="collapsible-nav-dropdown">
              <Nav.Link href='/Leg-workout' component={Link} to="/Leg-workout">Leg Workout</Nav.Link>
              <Nav.Link href='/Back-workout' component={Link}>Back Workout</Nav.Link>
              <Nav.Link href='/Chest-workout' component={Link}>Chest Workout</Nav.Link>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
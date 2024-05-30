import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom';

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
              <NavLink className="workoutLink" to='/Leg-workout'>Leg workouts</NavLink>
             <div>
             <NavLink className="workoutLink" to='/Chest-workout' component={Link}>Chest Workouts</NavLink>
             </div>
              <NavLink className="workoutLink" to='/Back-workout'>Back Workouts</NavLink>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
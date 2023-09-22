import logo from './logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet, Link } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
function App() {
  return (
    <>
      <div id="sidebar">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Nav className="mr-auto">
            <ListGroup horizontal>
              <ListGroup.Item variant="dark"> <Link to={`/boardgame`}>Tic-tac-toe</Link></ListGroup.Item>
              <ListGroup.Item variant="light"><Link to={`/counter`}>Counter</Link></ListGroup.Item>
              <ListGroup.Item variant="dark"> <Link to={`/productlist`}>Product Catalog</Link></ListGroup.Item>

            </ListGroup>
          </Nav>
        </Navbar>
      </div>
      <div id="detail"><Outlet /></div>
    </>
  );
}

export default App;

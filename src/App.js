import logo from './logo.svg';
import {
  Navbar,
  NavbarBrand,
  Container,
  Col,
  Row,
  Button
} from 'reactstrap';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar>
        <NavbarBrand href="/">reactstrap</NavbarBrand>
      </Navbar>
      <Container>
        <Row>
          <Col xs="3">
            <img src="https://m.media-amazon.com/images/I/71puQ9OgpzL._AC_UX385_.jpg"/>
            <Button color="primary">
              Add to cart
            </Button>
          </Col>
          <Col xs="3">
            <img src="https://m.media-amazon.com/images/I/71puQ9OgpzL._AC_UX385_.jpg"/>
          </Col>
                <Col xs="3">
            <img src="https://m.media-amazon.com/images/I/71puQ9OgpzL._AC_UX385_.jpg"/>
          </Col>

        </Row>
        <Row>
          <Col xs="3">
            <img src="https://m.media-amazon.com/images/I/71puQ9OgpzL._AC_UX385_.jpg"/>
          </Col>
          <Col xs="3">
            <img src="https://m.media-amazon.com/images/I/71puQ9OgpzL._AC_UX385_.jpg"/>
          </Col>
                <Col xs="3">
            <img src="https://m.media-amazon.com/images/I/71puQ9OgpzL._AC_UX385_.jpg"/>
          </Col>
          <Col xs="3">
            <img src="https://m.media-amazon.com/images/I/71puQ9OgpzL._AC_UX385_.jpg"/>
          </Col>

        </Row>

      </Container>
    </div>
  );
}

export default App;

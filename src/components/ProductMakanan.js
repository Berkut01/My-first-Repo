import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import seblak from "../image/seblak.jpg";
import sisri from "../image/sisri.jpg";
import "../css/home.css";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <div className="myBack">
        <Container>
          <h1 className="text-center text-white mb-3 ">Menu</h1>
            <div className="text-white ">
              <h2>Makanan</h2>
              <hr />
            </div>
      <Link to="/detail" style={{textDecoration : "none" , color : "black"}} >
          <Row className="mb-5">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={seblak} />
                <Card.Body>
                  <Card.Title>Seblak</Card.Title>
                  <Card.Text>Harga: Rp15.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={seblak} />
                <Card.Body>
                  <Card.Title>Seblak</Card.Title>
                  <Card.Text>Harga: Rp15.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={seblak} />
                <Card.Body>
                  <Card.Title>Seblak</Card.Title>
                  <Card.Text>Harga: Rp15.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Link>
      <Link to="/detaile" style={{textDecoration : "none" , color : "black"}}>
          <Row className="mt-5">
            <div className="text-white ">
              <h2>Minuman</h2>
              <hr />
            </div>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={sisri} />
                <Card.Body>
                  <Card.Title>Teh sisri</Card.Title>
                  <Card.Text>Harga: Rp5.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={sisri} />
                <Card.Body>
                  <Card.Title>Teh sisri</Card.Title>
                  <Card.Text>Harga: Rp5.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={sisri} />
                <Card.Body>
                  <Card.Title>Teh sisri</Card.Title>
                  <Card.Text>Harga: Rp5.000</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </Link>
        </Container>
    </div>
  );
}

export default BasicExample;

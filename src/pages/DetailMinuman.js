import Navbar from "../components/Navbar";
import { Container, Card, Row, Col } from "react-bootstrap";
import sisri from "../image/sisri.jpg";
import "../css/detail.css";
import "../css/home.css";

const ProductDetail = () => {
  return (
    <div className="back">
      <Navbar />
      <Container className="detail p-5">
        <Row>
          <Col md="6" className="d-flex justify-content-center">
            <img className="productImage" src={sisri} alt="Product" width={450} height={350} />
          </Col>
          <Col>
            <Card style={{ border: "none", marginTop: "50px" }}>
              <Card.Body>
                <Card.Title className="fw-bold fs-2">Teh Sisri dingin</Card.Title>
                <Card.Text className="fw-bold fs-4">Rp 5.000</Card.Text>
                <Card.Text>
                  Description : <br />
                  Teh Sisri Dari Forisa merupakan salah satu produk teh dalam bentuk bubuk instan yang praktis. Teh Sisri sudah dilengkapi dengan gula, sehingga tidak membutuhkan penambahan gula. Minuman ini menyegarkan, juga memiliki aroma
                  yang khas. Produk ini terbuat dari bahan alami yang berkualitas.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetail;

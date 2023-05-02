import Navbar from "../components/Navbar";
import { Container, Card, Row, Col } from "react-bootstrap";
import seblak from "../image/seblak.jpg";
import "../css/detail.css";
import "../css/home.css";

const ProductDetail = () => {
  return (
    <div className="back">
      <Navbar />
      <Container className="detail p-5">
        <Row>
          <Col md="6" className="d-flex justify-content-center">
            <img className="productImage" src={seblak} alt="Product" width={450} height={350} />
          </Col>
          <Col>
            <Card style={{ border: "none", marginTop: "50px" }}>
              <Card.Body>
                <Card.Title className="fw-bold fs-2">Seblak Ceker Seuhah</Card.Title>
                <Card.Text className="fw-bold fs-4">Rp 15.000</Card.Text>
                <Card.Text>
                  Description : <br />
                  Seblak adalah masakan khas Sunda yang awal mula nya terinspirasi dari makanan kobok khas india. dikenal berasal dari wilayah Parahyangan dengan cita rasa gurih dan pedas. Terbuat dari kerupuk basah bumbu halus ala india yang
                  terdiri dari bawang putih dengan kencur.
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

import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "../css/form.css"

const contact = () => {
  return (
    <div className="form">
      <Container>
        <Row>
          <h1 className="text-white">Contact</h1>
          <Col className="col-6 bg"> 
            <Form.Label className="mt-3">Nama Lengkap</Form.Label>
            <Form.Control type="text" placeholder="Enter " />
            <Form.Label>Alamat </Form.Label>
            <Form.Control type="email" placeholder="Enter " />
            <Form.Label>Nomor Telepon</Form.Label>
            <Form.Control type="number" placeholder="Enter " />
            <Button className="w-100 mt-5 mb-3">Klik</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default contact;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

const FormComponent = ({
  namaMakanan,
  deskripsi,
  harga,
  handleChange,
  handleSubmit,
  id,
}) => {
  return (
    <Card className="my-4 shadow">
      <Card.Header>
        <h2>{id ? "Edit Data" : "Tambah Data"}</h2>
      </Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="namaMakanan">
                <Form.Label>Nama Makanan</Form.Label>
                <Form.Control
                  type="text"
                  name="namaMakanan"
                  value={namaMakanan}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="harga">
                <Form.Label>Harga</Form.Label>
                <Form.Control
                  type="number"
                  name="harga"
                  min="0"
                  value={harga}
                  onChange={(e) => handleChange(e)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="deskripsi">
            <Form.Label>Deskripsi</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="deskripsi"
              value={deskripsi}
              onChange={(e) => handleChange(e)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default FormComponent;

import { Container, Row, Col } from "react-bootstrap";
import Layout from "../components/Layout";

const ProductList = () => {
  return (
    <Layout>
      {" "}
      <Container>
        <Row>
          <h2 className="products_text text-center mt-2">منتجات 2023</h2>
        </Row>
        <Row className="mt-2">
          <Col md={4} className="mb-4  ">
            <div className="border border-dark p-3 text-center">
              <img src="/13z.jpg" alt="Product 1" className="img-fluid mb-3" />
              <h5 className="product-title">عجينة سمبوسة</h5>
              <p className="product-des">حجم 420 مخصصة للقلي </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="border border-dark p-3 text-center">
              <img src="/14z.jpg" alt="Product 2" className="img-fluid mb-3" />
              <h5 className="product-title">عجينة سمبوسة</h5>
              <p className="product-des">حجم 450 مخصصة للقلي والفرن </p>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <div className="border border-dark p-3 text-center">
              <img src="/15z.jpg" alt="Product 3" className="img-fluid mb-3" />
              <h5 className="product-title">عجينة سمبوسة</h5>
              <p className="product-des">حجم 450 مخصصة للقلي والفرن </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default ProductList;

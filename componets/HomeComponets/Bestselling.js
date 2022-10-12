import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Bestselling = () => {
  return (
    <section>
      <Row>
        <Col xs={12} md={6}>
          <div className="bestselling">
            <div className="title">
              <b>Bestselling Productss</b>
            </div>
            <hr></hr>
            <div className="bestselling-contant">
              <div className="products-title">
                <b>The Product </b>
                <b>The Sold Quantity </b>
                <b>The Remaining Quantity</b>
              </div>
              <div className="products">
                <div>
                  <p>Denim Light Board British Style Jazz Hat</p>{' '}
                </div>
                <p>4 </p>
                <p>30000</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Bestselling;

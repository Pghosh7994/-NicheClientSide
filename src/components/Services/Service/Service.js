import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = (Props) => {
  const { _id, service, imageUrl, description, cost } = Props.service;
  return (
    <Col>
      <Card height="100px">
        <Card.Img
          className="image"
          height="300px"
          variant="top"
          src={imageUrl}
        />
        <Card.Body>
          <Card.Title>{service}</Card.Title>
          <h2>Price: BDT {cost}</h2>
          <p>
            <small>{description}</small>
          </p>
          <Link to={`/services/${_id}`}>
            <button type="button" className="btn btn-info">
              View Details info for add to card
            </button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Service;

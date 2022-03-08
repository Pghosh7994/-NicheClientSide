import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "./Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://hidden-shore-76699.herokuapp.com/allServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <Container>
      <h1 className="mt-5 text-success">Our All Product: </h1>
      <h4 className="text-danger">
        *Please "view details" information before buy any watch*
      </h4>
      <Row xs={1} md={3} className="g-5 mt-3">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default Services;

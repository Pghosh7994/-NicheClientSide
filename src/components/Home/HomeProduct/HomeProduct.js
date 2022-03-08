import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Service from "../../Services/Service/Service";

const HomeProduct = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  const myData = [];
  if (services.length > 0) {
    for (let i = 0; i < 6; i++) {
      myData.push(services[i]);
    }
  }
  console.log(myData);

  return (
    <Container>
      <h1 className="mt-5 text-success">Our regular Watch</h1>
      <h4 className="text-danger">
        *Please "view details" information before buy any watch*
      </h4>
      <Row xs={1} md={3} className="g-5 mt-3">
        {myData.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </Container>
  );
};

export default HomeProduct;

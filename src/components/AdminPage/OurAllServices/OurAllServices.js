import React, { useEffect, useState } from "react";
import OurAllService from "./OurAllService";
import { Container, Row } from "react-bootstrap";

const OurAllServices = () => {
  const [myOrder, setMyOrder] = useState();
  useEffect(() => {
    const url = "https://tranquil-hamlet-44273.herokuapp.com/allServices";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, []);

  return (
    <Container>
      <h1 className="mt-5 text-success">All Project</h1>
      <Row xs={1} md={2} className="g-5 mt-3">
        {myOrder?.map((order) => (
          <OurAllService key={order._id} order={order}></OurAllService>
        ))}
      </Row>
    </Container>
  );
};

export default OurAllServices;

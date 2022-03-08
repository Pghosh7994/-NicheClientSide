import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ManageAllService from "./ManageAllService";

const ManageAllServices = () => {
  const [myOrder, setMyOrder] = useState();
  useEffect(() => {
    const url = "https://hidden-shore-76699.herokuapp.com/allorders";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, []);

  return (
    <Container>
      <h1 className="mt-5 text-success">All Orders</h1>
      <Row xs={1} md={2} className="g-5 mt-3">
        {myOrder?.map((order) => (
          <ManageAllService key={order._id} order={order}></ManageAllService>
        ))}
      </Row>
    </Container>
  );
};
export default ManageAllServices;

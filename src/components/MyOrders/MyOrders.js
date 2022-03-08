import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import useFirebase from "./../../Hooks/useFirebase";
import MyOrder from "./MyOrder";

const MyOrders = () => {
  const { user } = useFirebase();
  const [myOrder, setMyOrder] = useState();

  useEffect(() => {
    const emailOrName = user?.email || user?.displayName;
    if (emailOrName !== undefined) {
      const url = `https://hidden-shore-76699.herokuapp.com/allorders/${emailOrName}`;
      fetch(url)
        .then((res) => res.json())
        .then((data) => setMyOrder(data));
    }
  }, [user]);

  return (
    <Container>
      <h1 className="mt-5 text-success">My Orders</h1>
      <Row xs={1} md={2} className="g-5 mt-3">
        {myOrder?.map((order) => (
          <MyOrder key={order._id} order={order}></MyOrder>
        ))}
      </Row>
    </Container>
  );
};

export default MyOrders;

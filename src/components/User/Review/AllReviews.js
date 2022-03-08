import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import OurAllReview from "./OurAllReview";

const AllReviews = () => {
  const [myOrder, setMyOrder] = useState();
  useEffect(() => {
    const url = "https://hidden-shore-76699.herokuapp.com/allReviews";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, []);

  console.log(myOrder);
  return (
    <Container>
      <h1 className="mt-5 text-success mb-5">Our All Reviews</h1>
      <Row xs={1} md={2} className="g-5 mt-3">
        {myOrder?.map((order) => (
          <OurAllReview key={order._id} order={order}></OurAllReview>
        ))}
      </Row>
    </Container>
  );
};

export default AllReviews;

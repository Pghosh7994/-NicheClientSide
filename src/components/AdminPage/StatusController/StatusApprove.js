import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, Col } from "react-bootstrap";
const StatusApprove = (Props) => {
  const { _id, service, imageUrl, description, cost, emailOrName, status } =
    Props.order;
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const url = `https://hidden-shore-76699.herokuapp.com/allorders/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleApprove = () => {
    // console.log(user);
    const url = `https://hidden-shore-76699.herokuapp.com/allorders/${_id}`;
    console.log(url);
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Successfully Approved ");
          setUser({});
        }
      });
  };

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
          <h2>Cost: BDT {cost}</h2>
          <p>
            description: <small>{description}</small>
          </p>
          <p>
            <small>user: {emailOrName}</small>
          </p>
          <p>
            <small>order status: {status}</small>
          </p>
          <br />
          <button
            onClick={() => handleApprove(_id)}
            type="button"
            className="btn btn-success"
          >
            Approve order
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default StatusApprove;

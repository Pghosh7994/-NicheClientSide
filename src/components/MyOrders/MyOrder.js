import React from "react";
import { Card, Col } from "react-bootstrap";

const MyOrder = (Props) => {
  const { _id, service, imageUrl, description, status, cost } = Props.order;

  const handleDeleteItem = (id) => {
    console.log(id);
    const proceed = window.confirm(
      "Are you sure..! you want to delete this order?"
    );
    if (proceed) {
      const url = `https://hidden-shore-76699.herokuapp.com/deleteOrder/${_id}`;
      console.log(url);
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            alert("deleted successfully");
            alert("Please reload after successfully delete a order ");
          }
        });
    }
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
          <h2>Travel cost: BDT {cost}</h2>
          <p>
            description: <small>{description}</small>
          </p>
          <h4>
            your order is : <span className="text-warning">{status}</span>
          </h4>
          <br />
          <button
            onClick={() => handleDeleteItem(_id)}
            type="button"
            className="btn btn-danger"
          >
            Delete this order
          </button>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default MyOrder;

import React from "react";
import { Accordion, Container } from "react-bootstrap";

const WhyUs = () => {
  return (
    <Container className="mt-5">
      <h1 className="text-success">WHY CHOOSE US?</h1>
      <h3 className="text-warning">
        There are basic principles that we consistently uphold:
      </h3>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Our Speed</Accordion.Header>
          <Accordion.Body className="text-info">
            After successful payment, the seller will be preparing the shipment
            and send the goods in due time. If the shipment is not completed in
            the required time on the order page, AliExpress will close the order
            and return all the funds to you. Below is where you can see the
            countdown of the shipping time.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What's Free Return Service?</Accordion.Header>
          <Accordion.Body className="text-info">
            With AliExpress 'Free Return' service, you get an extra 15 days (on
            top of the on-time delivery date) to decide if you want to keep or
            return the item for any reason. It is totally free.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>When will I get my refund?</Accordion.Header>
          <Accordion.Body className="text-info">
            Please take easy that the fund is guaranteed as AliExpress knows how
            important your money is and we make sure that the refund is handled
            accordingly. Usually, it takes 3-20 business days, varying with
            different banks, for buyers to receive the refund after the refund
            is successfully processed by AliExpress.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How do I get coupons or discounts?
          </Accordion.Header>
          <Accordion.Body className="text-info">
            In the orange section you can see the discount the seller offers.
            During checkout, this discount gets automatically deducted from the
            order total. There are instant discount, Store promo code, Store
            coupon can be found. Click on the coupon to get it and remember to
            use it when you place your order.Note: Store coupon can be used with
            AliExpress coupon while Store promo code cannot.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default WhyUs;

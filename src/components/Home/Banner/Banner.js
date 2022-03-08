import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Banner = () => {
  return (
    <Container className="mb-5">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gq.com/photos/615b1d60f45f207112fc21b9/master/pass/watches.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="bg-info">Why Time is Important in Our Life?</h3>
            <p className="bg-success">
              Time is one of the most mysterious forces in the universe. Time
              plays a significant role in our life. Time helps us make a good
              habit of structuring and organizing our daily activities. If you
              understand the value of time better, you can gain experience and
              develop skills over time. Time is the most valuable resource
              because you cannot take it back.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.apple.com/v/watch/compare/p/images/meta/gps-lte/og__bq4s0q4hhcuq.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="bg-info">Time Management</h3>
            <p className="bg-success">
              Based on what we have mentioned about the importance of time in
              our life, it is the duty of the rational person to preserve the
              time that is in his hands and not to waste these times without
              proper exploitation and benefit us. So we must learn to manage
              time because of its importance.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gq.com/photos/5e8c9a7cc21b8b00087a00f1/64:25/w_1984,h_775,c_limit/watches-fix.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="bg-info">The Importance of Time in Our Life </h3>
            <p className="bg-success">
              Time is related to all that is going on around us, so we often
              hear about the time dimension, because time is an essential
              element of life. Time represents special milestones, including
              birthdays, anniversaries and the birth of babies and helps us
              organize our daily lives and activities, so we can live a more
              organized and productive life.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Banner;

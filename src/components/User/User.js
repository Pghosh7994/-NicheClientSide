import React, { useState } from "react";

import "./User.css";

import { Container } from "react-bootstrap";
import Payment from "./Payment/Payment";
import MyOrders from "../MyOrders/MyOrders";
import Review from "./Review/Review";
const User = () => {
  const [control, setControl] = useState("addServices");
  return (
    <Container>
      <div className="user-container">
        <div className="dashboard">
          <div className="user-box">
            <div className="row user-container">
              <div className="col-md-3 ">
                <div className="user-area p-1 mt-5">
                  <h6 className="mt-5">User Dashboard</h6>
                  <div className="all-menu mt-5">
                    <li
                      onClick={() => setControl("payment")}
                      className="user-menu p-2"
                    >
                      Paymnet
                    </li>

                    <li
                      onClick={() => setControl("myorders")}
                      className="user-menu p-2"
                    >
                      My Orders
                    </li>
                    <li
                      onClick={() => setControl("review")}
                      className="user-menu p-2"
                    >
                      Review
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-9 text-center  text-center">
                {control === "payment" && <Payment></Payment>}
                {control === "myorders" && <MyOrders></MyOrders>}
                {control === "review" && <Review></Review>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default User;

import React, { useState } from "react";
import ManageAllServices from "../ManageAllServices/ManageAllServices";
import AddNewService from "../AddNewService/AddNewService";
import OurAllServices from "../OurAllServices/OurAllServices";
import "./Admin.css";
import StatusController from "../StatusController/StatusController";
import { Container } from "react-bootstrap";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
const Admin = () => {
  const [control, setControl] = useState("addServices");
  return (
    <Container>
      <div className="admin-container">
        <div className="dashboard">
          <div className="admin-box">
            <div className="row admin-container">
              <div className="col-md-3 ">
                <div className="admin-area p-1 mt-5">
                  <h6 className="mt-5">Admin Dashboard</h6>
                  <div className="all-menu mt-5">
                    <li
                      onClick={() => setControl("addServices")}
                      className="admin-menu p-2"
                    >
                      Add A New Product
                    </li>

                    <li
                      onClick={() => setControl("services")}
                      className="admin-menu p-2"
                    >
                      Manage All Product
                    </li>
                    <li
                      onClick={() => setControl("MangeOrder")}
                      className="admin-menu p-2"
                    >
                      Manage All Orders
                    </li>
                    <li
                      onClick={() => setControl("status")}
                      className="admin-menu p-2"
                    >
                      Approve Order
                    </li>
                    <li
                      onClick={() => setControl("makeAdmin")}
                      className="admin-menu p-2"
                    >
                      Make Admin
                    </li>
                  </div>
                </div>
              </div>
              <div className="col-md-9 text-center  text-center">
                {control === "services" && <OurAllServices> </OurAllServices>}
                {control === "MangeOrder" && (
                  <ManageAllServices></ManageAllServices>
                )}
                {control === "addServices" && <AddNewService></AddNewService>}
                {control === "status" && <StatusController></StatusController>}
                {control === "makeAdmin" && <MakeAdmin></MakeAdmin>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Admin;

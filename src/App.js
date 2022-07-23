import React from "react";
import "./App.css";
import chart from "../src/img/chart.png";
import maintainance from "../src/img/maintainance.png";
import creditCard from "../src/img/credit_card.png";
import group from "../src/img/group.png";
import community_manager from "../src/img/community_manager.png";
import browser from "../src/img/browser.png";
import crm from "../src/img/crm.png";

function App() {
  return (
    <div className="app">
      <div className="header">
        <span className="heading">What We Do</span>
        <span className="description">
          Luctus laoreet primis tempor tristique elementum dignissim morbi
          suspendisse.
        </span>
      </div>
      <div className="main-box">
        <div className="second-box">
          <div className="icons">
            <div className="report single-icon">
              <div className="icon">
                <img src={chart} alt="" />
              </div>
              <span className="icon-title">Reports</span>
            </div>
            <div className="maintainance single-icon">
              <div className="icon">
                <img src={maintainance} alt="" />
              </div>
              <span className="icon-title">Maintenance</span>
            </div>
            <div className="payment single-icon">
              <div className="icon">
                <img src={creditCard} alt="" />
              </div>
              <span className="icon-title">Payments</span>
            </div>
            <div className="group single-icon">
              <div className="icon">
                <img src={group} alt="" />
              </div>
              <span className="icon-title">Communication</span>
            </div>
            <div className="community_manager single-icon">
              <div className="icon">
                <img src={community_manager} alt="" />
              </div>
              <span className="icon-title">Community</span>
            </div>
            <div className="resident single-icon">
              <div className="icon">
                <img src={browser} alt="" />
              </div>
              <span className="icon-title">Resident and Tenant Portals</span>
            </div>
            <div className="lead single-icon">
              <div className="icon">
                <img src={crm} alt="" />
              </div>
              <span className="icon-title">Lead to Lease CRM</span>
            </div>
          </div>
          <div className="third-box">
            <div className="core-box"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import "../App.css";
import { Asidebar } from "./Asidebar";

export const Dashboard = () => {
  return (
    <div className="dashboard container-fluid">
      <div className="row">
        {/* Sidebar Section */}
        <div className="col-lg-3">
          <Asidebar />
        </div>

        {/* Main Content Section */}
        <div className="col-lg-9">
          <div className="main-content">
            {/* Projects Section */}
            <div className="row mb-4">
              <div className="col-lg-5">
                <div className="card shadow">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
                  </div>
                  <div className="card-body">
                    {[
                      { title: "Server Migration", percent: 20, bg: "bg-danger" },
                      { title: "Sales Tracking", percent: 40, bg: "bg-warning" },
                      { title: "Customer Database", percent: 60, bg: "bg-primary" },
                      { title: "Payout Details", percent: 80, bg: "bg-info" },
                      { title: "Account Setup", percent: 100, bg: "bg-success" },
                    ].map((item, idx) => (
                      <div key={idx}>
                        <h4 className="small font-weight-bold">
                          {item.title}
                          <span className="float-right">{item.percent}%</span>
                        </h4>
                        <div className="progress mb-4">
                          <div
                            className={`progress-bar ${item.bg}`}
                            role="progressbar"
                            style={{ width: `${item.percent}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Illustrations Section */}
              <div className="col-lg-6">
                <div className="card shadow">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Illustrations</h6>
                  </div>
                  <div className="card-body text-center">
                    <img
                      className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                      style={{ width: "14rem" }}
                      src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/undraw_like_post_dn6g_(1)_vgik.svg"
                      alt="Illustration"
                    />
                    <p>
                      Add some quality SVG illustrations to your project courtesy of
                      unDraw, a constantly updated collection of beautiful SVG images
                      that you can use completely free and without attribution!
                    </p>
                    <a
                      href="https://undraw.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Browse Illustrations on unDraw →
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Cards Section */}
            <div className="row">
              {[
                { title: "Primary", color: "#4e73df", bg: "bg-primary" },
                { title: "Success", color: "#1cc88a", bg: "bg-success" },
                { title: "Info", color: "#36b9cc", bg: "bg-info" },
                { title: "Warning", color: "#f6c23e", bg: "bg-warning" },
                { title: "Danger", color: "#e74a3b", bg: "bg-danger" },
                { title: "Secondary", color: "#858796", bg: "bg-secondary" },
              ].map((item, idx) => (
                <div className="col-lg-4 mb-4" key={idx}>
                  <div className={`card text-white shadow ${item.bg}`}>
                    <div className="card-body">
                      {item.title}
                      <div className="text-white-50 small">{item.color}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

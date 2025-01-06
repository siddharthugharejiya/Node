import React from "react";
import "../App.css";
import { Asidebar } from "./Asidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  Tooltip,
  BarElement,
  BarController,
  Title,
  Legend,
  ArcElement,
  DoughnutController,
} from 'chart.js';
import { Line, Bar, Doughnut, Pie } from "react-chartjs-2";

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  LineController,
  BarElement,
  BarController,
  Tooltip,
  Title,
  Legend,
  ArcElement,
  DoughnutController
);

export const Dashboard = () => {
  const userGrowthData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "User Growth",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "#4e73df",
        borderColor: "#4e73df",
      },
    ],
  };

  const salesData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Sales",
        data: [40, 48, 60, 70, 80, 90, 100],
        backgroundColor: "#1cc88a",
      },
    ],
  };

  const trafficData = {
    labels: ["Desktop", "Tablet", "Mobile"],
    datasets: [
      {
        label: "Traffic Source",
        data: [60, 20, 20],
        backgroundColor: ["#36b9cc", "#f6c23e", "#e74a3b"],
      },  
    ],
  };

  const doughnutData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "Doughnut Chart",
        data: [300, 50, 100],
        backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
      },
    ],
  };

  const pieData = {
    labels: ["Direct", "Referral", "Social"],
    datasets: [
      {
        label: "Pie Chart",
        data: [300, 50, 100],
        backgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
        hoverBackgroundColor: ["#ff6384", "#36a2eb", "#cc65fe"],
      },
    ],
  };

  return (
    <div className="dashboard container-fluid bg-dark text-white">
      <div className="row">
        {/* Sidebar Section */}
        <div className="col-lg-3">
          <Asidebar />
        </div>

        {/* Main Content Section */}
        <div className="col-lg-9">
          <div className="main-content">
            {/* User Data Table Section */}
            <div className="row mb-4">
              <div className="col-lg-12">
                
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">User Data</h6>
                  </div>
                  <div className="card-body">
                    <table className="table table-bordered table-dark">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Role</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
                          { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Inactive" },
                          { name: "Sam Wilson", email: "sam@example.com", role: "Subscriber", status: "Active" },
                        ].map((user, idx) => (
                          <tr key={idx}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                            <td>{user.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
             {/* Social Media Section */}
             <div className="row justify-content-between">
              {[
                { platform: "Facebook", logo: "facebook-f", data: "1.2k Followers" },
                { platform: "Twitter", logo: "twitter", data: "800 Followers" },
                { platform: "Instagram", logo: "instagram", data: "1.5k Followers" },
                { platform: "LinkedIn", logo: "linkedin-in", data: "500 Connections" },
              ].map((social, idx) => (
                <div className="col-lg-3 mb-4" key={idx}>
                  <div className="card shadow text-center bg-dark text-white">
                    <div className="card-body">
                      <i className={`fab fa-${social.logo} fa-2x mb-3`}></i>
                      <h6 className="font-weight-bold text-primary">{social.platform}</h6>
                      <p className="fs-light">{social.data}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="row mb-4">
              <div className="col-lg-6">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">User Growth Chart</h6>
                  </div>
                  <div className="card-body">
                    <Line data={userGrowthData} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Sales Chart</h6>
                  </div>
                  <div className="card-body">
                    <Bar data={salesData} />
                  </div>
                </div>
              </div>
            </div>

            {/* Traffic Source Section */}
            <div className="row mb-4">
              <div className="col-lg-12">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Traffic Source</h6>
                  </div>
                  <div className="card-body">
                    <Bar data={trafficData} options={{ indexAxis: 'y' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Doughnut Chart Section */}
            <div className="row mb-4">
              <div className="col-lg-6">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Doughnut Chart</h6>
                  </div>
                  <div className="card-body">
                    <Doughnut data={doughnutData} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card shadow bg-dark text-white">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Pie Chart</h6>
                  </div>
                  <div className="card-body">
                    <Pie data={pieData} />
                  </div>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

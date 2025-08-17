import React from "react";
import { Outlet, Link } from "react-router-dom";

const DashboardLayout = () => {
  const styles = {
    container: {},
    title: {},
    rest: {
      display: "flex",
      width: "99%",
      height: "calc(100vh - 30px)",
      backgroundColor: "#f1f1f1ff",
    },
    sidebar: {
      width: "20%",
      backgroundColor: "#e0e0e0ff",
      padding: "10px",
    },
    links: {
      display: "flex",
      flexDirection: "row",
      gap: "10px",
      textDecoration: "none",
      color: "#000000ff",
    },
    content: {
      width: "80%",
      padding: "20px",
      backgroundColor: "#ffffff",
      overflowY: "auto",
    },
  };
  return (
    <div
      className="container"
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        className="title"
        style={{
          fontSize: "24px",
          margin: "0",
          backgroundColor: "#74c5ffff",
          color: "#ffffffff",
          width: "99%",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <div className="links" style={styles.links}>
          <Link to={"/"}>Home</Link>
        </div>
      </div>
      <div className="rest" style={styles.rest}>
        <div className="sidebar" style={styles.sidebar}>
          <ul>
            <li>
              <Link to={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link to={"/dashboard/blogs"}>Blogs</Link>
            </li>
            <li>
              <Link to={"/dashboard/events"}>Events</Link>
            </li>
            <li>
              <Link to={"/dashboard/appointments"}>Appointment</Link>
            </li>
            <li>
              <Link to={"/dashboard/setting"}>Setting</Link>
            </li>
          </ul>
        </div>
        <div className="content" styles={styles.content}>
          {/* You can add more components or content here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

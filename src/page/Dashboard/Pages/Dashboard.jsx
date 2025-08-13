import React from "react";

const Dashboard = () => {
  const visitors = {
    totalVisitors: 1000,
    lastWeekVisitors: 200,
    lastMonthVisitors: 500,
  };
  const events = { totalEvents: 50, upcomingEvents: 10, pastEvents: 40 };
  const blogs = { totalBlogs: 30, recentBlogs: 5, popularBlogs: 10 };
  const appointments = {
    totalAppointments: 20,
    upcomingAppointments: 5,
    pastAppointments: 15,
  };

  const styles = {
    container: {
      margin: "20px",
      backgroundColor: "#f3f3f3ff",
      padding: "20px",
      display: "flex",
      gap: "20px",
    },
    boxContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "5px",
      margin: "10px 0",
      border: "1px solid #ccc",
      padding: "10px",
      width: "300px",
      borderRadius: "5px",
    },
    title: {
      textAlign: "center",
    },
  };
  return (
    <>
      <h1 style={styles.container}>Dashboard</h1>
      <div style={styles.container}>
        <div style={styles.boxContainer}>
          <h2 style={styles.title}>Visitors</h2>
          <p style={{ color: "green" }}>
            Total Visitors: {visitors.totalVisitors}
          </p>
          <p>Last Week: {visitors.lastWeekVisitors}</p>
          <p>Last Month: {visitors.lastMonthVisitors}</p>
        </div>
        <div style={styles.boxContainer}>
          <h2 style={styles.title}>Events</h2>
          <p>Total Events: {events.totalEvents}</p>
          <p>Upcoming Events: {events.upcomingEvents}</p>
          <p>Past Events: {events.pastEvents}</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

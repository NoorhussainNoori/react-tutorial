import React from "react";
import { Outlet, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import SettingsIcon from "@mui/icons-material/Settings";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Stack } from "@mui/material";
import MenuItem from "../../components/MenuItem/MenuItem";

const DashboardLayout = () => {
  const routes = [
    {
      id: 1,
      path: "/dashboard",
      name: "Dashboard",
      icon: HomeIcon,
    },
    {
      id: 2,
      path: "/dashboard/blogs",
      name: "Blogs",
      icon: EventNoteIcon,
    },
    {
      id: 3,
      path: "/dashboard/events",
      name: "Events",
      icon: EventAvailableIcon,
    },
    {
      id: 4,
      path: "/dashboard/appointments",
      name: "Appointments",
      icon: BookOnlineIcon,
    },
    {
      id: 5,
      path: "/dashboard/setting",
      name: "Setting",
      icon: SettingsIcon,
    },
  ];

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
          <Stack>
            {routes.map((route) => {
              return (
                <MenuItem
                  key={route.id}
                  name={route.name}
                  route={route.path}
                  icon={route.icon}
                />
              );
            })}
          </Stack>
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

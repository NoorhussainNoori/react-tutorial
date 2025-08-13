import Home from "./page/Home";
import Contact from "./page/Contact";
import Blogs from "./page/Blogs";
import NoPage from "./page/NoPage";
import Layout from "./page/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./page/Dashboard/DashboardLayout";
import CreateBlogs from "./page/Dashboard/Pages/CreateBlogs";
import Dashboard from "./page/Dashboard/Pages/Dashboard";
import CreateEvent from "./page/Dashboard/Pages/CreateEvent";
import Appointments from "./page/Dashboard/Pages/Appointments";
import Setting from "./page/Dashboard/Pages/Setting";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/*" element={<NoPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/blogs" element={<CreateBlogs />} />
          <Route path="/dashboard/events" element={<CreateEvent />} />
          <Route path="/dashboard/appointments" element={<Appointments />} />
          <Route path="/dashboard/setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

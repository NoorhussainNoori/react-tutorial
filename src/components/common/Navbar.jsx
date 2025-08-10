import React from "react";

function WelcomeAdminMsg() {
  return <h6>Welcome Admin</h6>;
}
function WelcomeStaffMsg() {
  return <h6>Welcome Staff</h6>;
}

// function Message(props) {
//   if (props.isAdmin) {
//     return <WelcomeAdminMsg />;
//   } else {
//     return <WelcomeStaffMsg />;
//   }
// }
const Navbar = () => {
  const isAdmin = false;
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Navbar</h1>
      {/* <Message isAdmin={true} /> */}
      {isAdmin ? <WelcomeAdminMsg /> : <WelcomeStaffMsg />}
    </div>
  );
};

export default Navbar;

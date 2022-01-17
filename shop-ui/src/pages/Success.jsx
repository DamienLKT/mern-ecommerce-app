import { useLocation, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { userRequest } from "../api/requestMethod";

const Success = () => {
  const location = useLocation();
  console.log(location);

const clearLocalStorage = () => {
  localStorage.removeItem("products");
  localStorage.removeItem("total");
}

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {`Successfull. Your order is being prepared...`}
      <Link to="/">
        <button onClick={clearLocalStorage} style={{ padding: 10, marginTop: 20, cursor:"pointer"}}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default Success;

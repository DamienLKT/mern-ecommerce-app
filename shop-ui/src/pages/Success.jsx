import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { userRequest } from "../api/requestMethod";

const Success = () => {
  const navigate = useNavigate();

  const clearAll = () => {
    localStorage.removeItem("products");
    localStorage.removeItem("total");
    navigate("/");
    window.location.reload();
  };

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
      <button
        onClick={clearAll}
        style={{ padding: 10, marginTop: 20, cursor: "pointer" }}
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default Success;

import React from "react";
import { PropagateLoader } from "react-spinners";

export default function Spiner() {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "10rem", marginBottom: "5rem" }}
    >
      <PropagateLoader
        color="#1e5d68"
        cssOverride={{}}
        size={16}
        speedMultiplier={1}
      />
    </div>
  );
}

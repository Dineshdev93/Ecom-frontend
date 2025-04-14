import React from "react";
import { PropagateLoader ,MoonLoader,HashLoader} from "react-spinners";

export default function Spiner() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ marginTop: "10rem", marginBottom: "5rem" }}
    >
      {/* <PropagateLoader
        color="#1e5d68"
        cssOverride={{}}
        size={16}
        speedMultiplier={1}
      /> */}
      <img src="./giffy.gif" alt="" width={100} />
    </div>
  );
}
 
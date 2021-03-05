import React from "react";

function DashBoard({ avatar, firstName, lastName, email }) {
  return (
    <div className="col-4">
      <div className="card m-1">
        <img src={avatar} style={{ height: "80%", width: "100%" }} />
        <div>
          {firstName} {lastName}
        </div>
        <div>{email}</div>
      </div>
    </div>
  );
}

export default DashBoard;

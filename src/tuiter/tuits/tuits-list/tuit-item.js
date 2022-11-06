import React from "react";
import TuitStats from "./tuit-stats";

const TuitItem = ({ tuit }) => {
  return (
    <div className="row mx-1 border rounded pt-2">
      <div className="col-2 px-0">
        <img
          src={`/images/avatar/${tuit.image}`}
          className="rounded-circle mx-auto d-block"
          height={48}
          width={48}
        />
      </div>
      <div className="col-10 ps-0 pe-3">
        <div className="wd-text-content">
          <span className="fw-bold me-1">
            {tuit.userName}
            <i className="bi bi-patch-check-fill mx-1 text-primary"></i>
          </span>
          {tuit.handle} - {tuit.time}
        </div>
        <p className="m-0">{tuit.tuit}</p>
        <TuitStats tuit={tuit} />
      </div>
    </div>
  );
};

export default TuitItem;

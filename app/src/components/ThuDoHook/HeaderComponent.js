import React, { Fragment, memo } from "react";

const HeaderComponent = memo(() => {
  return (
    <Fragment>
      <div className="card">
        <div className="text-center">
          <img
            src={require("./../../assets/images/cybersoft.png")}
            alt="logo"
          />
        </div>
        <div className="card-body">
          <h4 className="card-title text-center">
            React Hook - Dự án thử đồ trực tuyến - Virtual Dressing Room
          </h4>
        </div>
      </div>
      <hr />
    </Fragment>
  );
});
export default HeaderComponent;

import React, { Fragment, PureComponent } from "react";

export default class HeaderComponent extends PureComponent {
  render() {
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
              React Lifecycle - Dự án thử đồ trực tuyến - Virtual Dressing Room
            </h4>
          </div>
        </div>
        <hr />
      </Fragment>
    );
  }
}

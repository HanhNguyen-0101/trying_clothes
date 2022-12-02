import React, { Fragment, PureComponent } from "react";

export default class HeaderComponent extends PureComponent {
  render() {
    return (
      <Fragment>
        <div>
          <div className="card-body">
            <h4 className="card-title text-center">Virtual Dressing Room</h4>
          </div>
        </div>
        <hr />
      </Fragment>
    );
  }
}

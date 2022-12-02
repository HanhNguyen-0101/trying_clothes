import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProductItemComponent from "./ProductItemComponent";

class ProductListComponent extends Component {
  renderTabPane = (navItem) => {
    const { tabPanes, navActive } = this.props;
    const productOfNav = (tabPanes || []).filter(
      (i) => i.type === navItem.type
    );
    if (productOfNav && productOfNav.length) {
      return (productOfNav || []).map((product, index) => {
        return (
          <Fragment key={index}>
            <ProductItemComponent stt={index + 1} product={product} />
          </Fragment>
        );
      });
    } else {
      return navActive.tabName;
    }
  };
  renderTabHeader = () => {
    const { navPills, navActive } = this.props;
    return (navPills || []).map((navItem, index) => {
      return (
        <div
          key={index}
          className={`tab-pane container ${
            navItem.type === navActive.type ? "active" : "fade"
          }`}
          id={navItem.tabName}
        >
          <div className="container">
            <div className="row">{this.renderTabPane(navItem)}</div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="well">
        <div className="tab-content">{this.renderTabHeader()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  navActive: state.ThuDoReducer.navActive,
});
export default connect(mapStateToProps)(ProductListComponent);

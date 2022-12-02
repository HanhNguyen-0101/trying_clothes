import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import ProductItemComponent from "./ProductItemComponent";

export default function ProductListComponent({ tabPanes, navPills }) {
  const navActive = useSelector((state) => state.ThuDoReducer.navActive);

  const renderTabPane = (navItem) => {
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
  const renderTabHeader = () => {
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
            <div className="row">{renderTabPane(navItem)}</div>
          </div>
        </div>
      );
    });
  };
  return (
    <div className="well">
      <div className="tab-content">{renderTabHeader()}</div>
    </div>
  );
}

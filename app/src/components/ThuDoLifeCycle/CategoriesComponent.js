import React, { Component } from "react";
import { connect } from "react-redux";
import { changeAnimationPLP, changeTab } from "../../actions/ThuDoAction";

class CategoriesComponent extends Component {
  renderCategory = () => {
    const { navPills, navActive } = this.props;
    return (navPills || []).map((navItem, index) => {
      return (
        <li
          className="nav-item"
          key={index}
          onClick={() => {
            this.props.dispatch(changeTab(navItem));
            this.props.dispatch(changeAnimationPLP());
          }}
        >
          <a
            className={`nav-link btn-default ${
              navItem.type === navActive.type ? "active" : ""
            }`}
            data-toggle="pill"
            href={`#${navItem.tabName}`}
          >
            {navItem.showName}
          </a>
        </li>
      );
    });
  };
  render() {
    return <ul className="nav nav-pills">{this.renderCategory()}</ul>;
  }
}

const mapStateToProps = (state) => ({
  navActive: state.ThuDoReducer.navActive,
});

export default connect(mapStateToProps)(CategoriesComponent);

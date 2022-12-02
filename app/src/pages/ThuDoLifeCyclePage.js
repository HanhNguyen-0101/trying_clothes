import React, { Component } from "react";
import CategoriesComponent from "../components/ThuDoLifeCycle/CategoriesComponent";
import HeaderComponent from "../components/ThuDoLifeCycle/HeaderComponent";
import ProductListComponent from "../components/ThuDoLifeCycle/ProductListComponent";
import ProductModelComponent from "../components/ThuDoLifeCycle/ProductModelComponent";
import data from "./../assets/data/Data.json";
import './../assets/css/style.css';

export default class ThuDoLifeCyclePage extends Component {
  render() {
    return (
      <div className="container-fluid thuDoApp">
        <div className="row">
          <div className="col-sm-12">
            <HeaderComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <CategoriesComponent navPills={data.navPills} />
            <ProductListComponent
              tabPanes={data.tabPanes}
              navPills={data.navPills}
            />
          </div>
          <div className="col-md-4">
            <ProductModelComponent />
          </div>
        </div>
      </div>
    );
  }
}

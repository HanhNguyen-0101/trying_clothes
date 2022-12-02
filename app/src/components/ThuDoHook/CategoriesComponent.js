import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { changeAnimationPLP, changeTab } from "../../actions/ThuDoAction";
export default function CategoriesComponent({navPills}) {
  const navActive = useSelector(state => state.ThuDoReducer.navActive);
  const dispatch = useDispatch();
  const renderCategory = () => {
    return (navPills || []).map((navItem, index) => {
      return <li className="nav-item" key={index} onClick={() => {dispatch(changeTab(navItem)); dispatch(changeAnimationPLP())}}>
        <a
          className={`nav-link btn-default ${navItem.type === navActive.type ? 'active' : ''}`}
          data-toggle="pill"
          href={`#${navItem.tabName}`}
        >
          {navItem.showName}
        </a>
      </li>
    })
  }
  return (
    <ul className="nav nav-pills">
      {renderCategory()}
    </ul>
  );
}

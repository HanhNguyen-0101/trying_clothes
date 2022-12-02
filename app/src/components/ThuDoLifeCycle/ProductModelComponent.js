import React, { Component } from "react";
import { connect } from "react-redux";

const style = {
  hairstyle: {
    width: 1000,
    height: 1000,
    position: "absolute",
    top: "-75%",
    right: "-57%",
    transform: "scale(0.15)",
    zIndex: 4,
  },
  necklaces: {
    width: 500,
    height: 1000,
    position: "absolute",
    bottom: "-40%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: 4,
  },
  topclothes: {
    width: 500,
    height: 500,
    position: "absolute",
    top: "-9%",
    left: "-5%",
    zIndex: 3,
    transform: "scale(0.5)",
  },
  botclothes: {
    width: 500,
    height: 1000,
    position: "absolute",
    top: "-30%",
    left: "-5%",
    zIndex: 2,
    transform: "scale(0.5)",
  },
  handbags: {
    width: 500,
    height: 1000,
    position: "absolute",
    bottom: "-40%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: 4,
  },
  shoes: {
    width: 500,
    height: 1000,
    position: "absolute",
    bottom: "-37%",
    right: "-3.5%",
    transform: "scale(0.5)",
    zIndex: 1,
  },
  background: {},
};

class ProductModelComponent extends Component {
  renderModel = () => {
    return (this.props.model || []).map((item, index) => {
      const styleItem = {
        ...style[item.type],
        backgroundImage: `url('${item.imgSrc_png}')`,
      };
      return <div key={index} className={item.type} style={styleItem}></div>;
    });
  };
  render() {
    return (
      <div className="contain">
        <div className="body" />
        <div className="model" />
        {this.renderModel()}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  model: state.ThuDoReducer.model,
});
export default connect(mapStateToProps)(ProductModelComponent);

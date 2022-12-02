import React, { Component, createRef } from "react";
import { connect } from "react-redux";
import { Spring, animated } from "react-spring";
import { changeAnimationImage, changeProduct } from "../../actions/ThuDoAction";
import { style } from "../AnimationImageStyle";

class ProductItemComponent extends Component {
  constructor(props) {
    super(props);
    this.productCard = createRef();
    this.state = {
      state: true,
      dimension: {
        width: 0,
        height: 0,
      },
    };
  }

  thuDo = () => {
    const { product } = this.props;
    this.setState(
      {
        state: !this.state.state,
      },
      () => {
        this.props.dispatch(changeAnimationImage(product.id));
        setTimeout(() => {
          this.props.dispatch(changeProduct(product));
        }, 1000);
      }
    );
  };
  render() {
    const { product, animationImage, stt, animationPLP } = this.props;
    const { dimension, state } = this.state;
    const isProductActive =
      animationImage.active && animationImage.productID === product.id;
    const xx = style(stt, dimension.width, dimension.height)[`${product.type}`]
      .x;
    const yy = style(stt, dimension.width, dimension.height)[`${product.type}`]
      .y;
    return (
      <div className="col-md-3" ref={this.productCard}>
        <Spring
          from={{ x: 0 }}
          to={{ x: animationPLP ? 1 : 0 }}
          config={{ duration: 1000 }}
        >
          {({ x }) => (
            <animated.div
              style={{
                scale: x.to({
                  range: [0, 0.5, 1],
                  output: [1, 0.3, 1],
                }),
              }}
              className="card text-center"
            >
              <div className="position-relative">
                <img src={product.imgSrc_jpg} alt={product.name} width="100%" />
                <Spring
                  from={{ xyzab: [0, 0, 0, 0, 0] }}
                  to={{
                    xyzab: isProductActive
                      ? [xx, yy, 0, 0.7, 720]
                      : [0, 0, 0, 0, 0],
                  }}
                  config={{ duration: 1000 }}
                >
                  {({ xyzab }) => (
                    <animated.img
                      src={product.imgSrc_jpg}
                      alt={product.name}
                      className={`position-absolute ${
                        product.id === animationImage.productID
                          ? "over"
                          : "under"
                      }`}
                      style={{
                        transform: xyzab.interpolate(
                          (x, y, z, a, b) =>
                            `translate3d(${x}px, ${y}px, ${z}px) scale(${a}) rotate(${b}deg)`
                        ),
                      }}
                    />
                  )}
                </Spring>
              </div>
              <h4>
                <b>{product.name}</b>
              </h4>
              <Spring
                from={{ y: 0 }}
                to={{ y: state ? 1.1 : 0 }}
                config={{ duration: 1000 }}
              >
                {({ y }) => (
                  <animated.button
                    style={{
                      scale: y.to({
                        range: [0, 0.2, 0.4, 0.6, 0.8, 1],
                        output: [1, 0.9, 1.1, 0.9, 1.03, 1],
                      }),
                    }}
                    type="button"
                    onClick={() => this.thuDo()}
                  >
                    Thử đồ
                  </animated.button>
                )}
              </Spring>
            </animated.div>
          )}
        </Spring>
      </div>
    );
  }
  componentDidMount() {
    this.setState({
      dimension: {
        width: this.productCard.current.offsetWidth,
        height: this.productCard.current.offsetHeight,
      },
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.navActive.type !== prevProps.navActive.type) {
      this.setState({
        dimension: {
          width: this.productCard.current.offsetWidth,
          height: this.productCard.current.offsetHeight,
        },
      });
    }
  }
}
const mapStateToProps = (state) => ({
  animationPLP: state.ThuDoReducer.animationPLP,
  animationImage: state.ThuDoReducer.animationImage,
  navActive: state.ThuDoReducer.navActive,
});
export default connect(mapStateToProps)(ProductItemComponent);

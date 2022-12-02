import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSpring, animated } from "react-spring";
import { changeProduct, changeAnimationImage } from "../../actions/ThuDoAction";
import { style } from "../AnimationImageStyle";

export default function ProductItemComponent({ product, stt }) {
  // Props
  const animationPLP = useSelector((state) => state.ThuDoReducer.animationPLP);
  const animationImage = useSelector(
    (state) => state.ThuDoReducer.animationImage
  );
  const navActive = useSelector(state => state.ThuDoReducer.navActive);
  
  // States
  const [state, toggle] = useState(true);
  const [dimension, setDimension] = useState({width: 0, height: 0});
  const [prevNavActive, setPrevNavActive] = useState(null);
  const dispatch = useDispatch();
  const ref = useRef(null);

  if (!prevNavActive || (prevNavActive && prevNavActive.type !== navActive.type)) {
    setPrevNavActive(navActive);
  }
  const { x } = useSpring({
    from: { x: 0 },
    x: animationPLP ? 1 : 0,
    config: { duration: 1000 },
  });

  const { y } = useSpring({
    from: { y: 0 },
    y: state ? 1.1 : 0,
    config: { duration: 1000 },
  });

  const isProductActive =
    animationImage.active && animationImage.productID === product.id;
  const propsSpring = useSpring({
    loop: { reverse: false },
    from: { y: 0, x: 0, rotate: 0, scale: 0 },
    to: {
      y: isProductActive ? style(stt, dimension.width, dimension.height)[`${product.type}`].y : 0,
      x: isProductActive ? style(stt, dimension.width, dimension.height)[`${product.type}`].x : 0,
      scale: isProductActive ? 0.7 : 0,
      rotate: isProductActive ? 720 : 0,
    },
    config: { duration: 1000 },
  });
  useEffect(() => {
    setDimension({
      width: ref.current.offsetWidth,
      height: ref.current.offsetHeight
    })
  }, [prevNavActive]);

  return (
    <div className="col-md-3" ref={ref}>
      <animated.div
        className="card text-center"
        style={{
          scale: x.to({
            range: [0, 0.5, 1],
            output: [1, 0.3, 1],
          }),
        }}
      >
        <div className="position-relative">
          <img src={product.imgSrc_jpg} alt={product.name} />
          <animated.img
            src={product.imgSrc_jpg}
            alt={product.name}
            className={`position-absolute ${product.id === animationImage.productID ? "over" : "under"}`}
            style={propsSpring}
          />
        </div>
        <h4>
          <b>{product.name}</b>
        </h4>
        <animated.button
          style={{
            scale: y.to({
              range: [0, 0.2, 0.4, 0.6, 0.8, 1],
              output: [1, 0.9, 1.1, 0.9, 1.03, 1],
            }),
          }}
          type="button"
          onClick={() => {
            toggle(!state);
            dispatch(changeAnimationImage(product.id));
            setTimeout(() => {
              dispatch(changeProduct(product));
            }, 1000);
          }}
        >
          Thử đồ
        </animated.button>
      </animated.div>
    </div>
  );
}

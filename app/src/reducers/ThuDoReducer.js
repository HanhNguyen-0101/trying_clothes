import {
  CHANGE_ANIMATION_IMAGE,
  CHANGE_ANIMATION_PLP,
  CHANGE_PRODUCT,
  CHANGE_TAB,
} from "../types/ThuDoType";

const initialState = {
  navActive: { tabName: "tabTopClothes", showName: "Áo", type: "topclothes" },
  model: [
    {
      id: "topcloth_1",
      type: "topclothes",
      imgSrc_png: "./images/clothes/topcloth1.png",
    },
    {
      id: "botcloth_1",
      type: "botclothes",
      imgSrc_png: "./images/clothes/botcloth1.png",
    },
    {
      id: "shoes_1",
      type: "shoes",
      imgSrc_png: "./images/shoes/shoes1.png",
    },
    {
      id: "handbag_1",
      type: "handbags",
      imgSrc_png: "./images/handbags/handbag1.png",
    },
    {
      id: "necklace_1",
      type: "necklaces",
      imgSrc_png: "./images/necklaces/necklace1.png",
    },
    {
      id: "hairstyle_1",
      type: "hairstyle",
      imgSrc_png: "./images/hairstyle/hairstyle1.png",
    },
    {
      id: "background_2",
      type: "background",
      imgSrc_png: "./images/background/background2.jpg",
    },
  ],
  animationPLP: true,
  animationImage: { active: false, productID: "" },
};

export const ThuDoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_PRODUCT: {
      const index = state.model.findIndex(
        (i) => i.type === payload.product.type
      );
      const { id, type, imgSrc_png } = payload.product;
      if (index !== -1) {
        if (state.model[index].id !== id) {
          state.model[index] = { id, type, imgSrc_png };
        }
      } else {
        state.model.push({ id, type, imgSrc_png });
      }
      state.model = [...state.model];
      return { ...state };
    }
    case CHANGE_ANIMATION_PLP: {
      state.animationPLP = !state.animationPLP;
      return { ...state };
    }
    case CHANGE_ANIMATION_IMAGE: {
      const index = state.model.findIndex((i) => i.id === payload.productID);
      if (
        index === -1 ||
        state.animationImage.productID !== payload.productID
      ) {
        state.animationImage.active = true;
        state.animationImage.productID = payload.productID;
      }
      state.animationImage = { ...state.animationImage };
      return { ...state };
    }
    case CHANGE_TAB: {
      if (state.navActive.type !== payload.tab.type) {
        const { tabName, showName, type } = payload.tab;
        state.navActive = { tabName, showName, type };
      }
      return { ...state };
    }
    default:
      return state;
  }
};

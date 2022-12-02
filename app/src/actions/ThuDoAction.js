import {
  CHANGE_ANIMATION_IMAGE,
  CHANGE_ANIMATION_PLP,
  CHANGE_PRODUCT,
  CHANGE_TAB,
} from "../types/ThuDoType";

export const changeProduct = (product) => ({
  type: CHANGE_PRODUCT,
  payload: { product },
});

export const changeAnimationPLP = () => ({
  type: CHANGE_ANIMATION_PLP,
});

export const changeAnimationImage = (productID) => ({
  type: CHANGE_ANIMATION_IMAGE,
  payload: { productID },
});

export const changeTab = (tab) => ({
  type: CHANGE_TAB,
  payload: {tab}
})
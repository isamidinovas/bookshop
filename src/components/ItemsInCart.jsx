import React from "react";
export const ItemsInCart = ({ quantity = 0 }) => {
  return quantity > 0 ? <div className="items-in-cart"></div> : null;
};

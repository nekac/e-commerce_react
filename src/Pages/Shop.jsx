import React, { Component } from "react";
import SHOP_ITEMS_DATA from "../Data/shop-items";
import Preview from "../Components/Preview";

class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: SHOP_ITEMS_DATA,
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherProps }) => (
          <Preview key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Shop;

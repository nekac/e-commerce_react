import React from "react";
import "../Styles/preview-item.scss";

const PreviewItem = ({ id, name, price, imageUrl }) => (
  <div className="preview-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="footer">
      <span className="name">{name.toUpperCase()}</span>
      <span className="price">${price}</span>
    </div>
  </div>
);

export default PreviewItem;

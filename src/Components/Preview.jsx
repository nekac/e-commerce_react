import React from "react";
import PreviewItem from "./PreviewItem";
import "../Styles/preview.scss";

const Preview = ({ title, items }) => (
  <div className="complete-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((item, id) => id < 4)
        .map(({ id, ...props }) => (
          <PreviewItem key={id} {...props} />
        ))}
    </div>
  </div>
);

export default Preview;

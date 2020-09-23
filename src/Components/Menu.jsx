import React from "react";
import MenuItem from "./MenuItem";
import "../Styles/menu.scss";

class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "shirts",
          imageUrl: "https://bit.ly/3hZL9BE",
          id: 1,
          linkUrl: "shop/shirts",
        },
        {
          title: "jeans",
          imageUrl: "https://bit.ly/33Rmjiq",
          id: 2,
          linkUrl: "shop/jeans",
        },
        {
          title: "jackets",
          imageUrl: "https://bit.ly/2RQyFBF",
          id: 3,
          linkUrl: "shop/jackets",
        },
        {
          title: "womens",
          imageUrl: "https://bit.ly/3mVmWjM",
          id: 4,
          size: "large",
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://bit.ly/3cqkpZZ",
          id: 5,
          size: "large",
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Menu;

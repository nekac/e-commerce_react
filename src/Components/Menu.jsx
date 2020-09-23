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
          linkUrl: "shirts",
        },
        {
          title: "jeans",
          imageUrl: "https://bit.ly/33Rmjiq",
          id: 2,
          linkUrl: "jeans",
        },
        {
          title: "jackets",
          imageUrl: "https://bit.ly/2RQyFBF",
          id: 3,
          linkUrl: "jackets",
        },
        {
          title: "womens",
          imageUrl: "https://bit.ly/3mVmWjM",
          id: 4,
          size: "large",
          linkUrl: "womens",
        },
        {
          title: "mens",
          imageUrl: "https://bit.ly/3cqkpZZ",
          id: 5,
          size: "large",
          linkUrl: "mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="menu">
        {this.state.sections.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Menu;

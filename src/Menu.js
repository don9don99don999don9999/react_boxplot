import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function TopMenu() {
  const [activeItem, setItem] = useState("Home");
  const history = useHistory();
  const handleItemClick = (e, { name }) => {
    setItem(name);
    history.push(`/${name}`);
    console.log(history);
  };

  return (
    <div>
      <Menu fluid pointing>
        <Menu.Item
          name="Home"
          active={activeItem === "Home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="BoxPlot"
          active={activeItem === "BoxPlot"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Table"
          active={activeItem === "Table"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
}

export default TopMenu;

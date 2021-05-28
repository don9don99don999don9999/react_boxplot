import React from "react";
import { Segment, Divider, Icon, List } from "semantic-ui-react";

function Title() {
  return (
    <>
      <Segment>
        <Divider />
        <h1>
          <Icon name="object group outline" />
          HormoneDB2
        </h1>
        <List bulleted>
          <List.Item>HormoneDB2</List.Item>
          <List.Item>Optimized for Google Chrome</List.Item>
        </List>
        <Divider />
      </Segment>
    </>
  );
}

export default Title;

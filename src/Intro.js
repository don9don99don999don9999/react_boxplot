import React from "react";
import { Header, Container, Segment, Divider } from "semantic-ui-react";

function Intro() {
  return (
    <>
      <Segment>
        <Container text>
          <Header>HormoneDB update</Header>
          <Divider />
          호르몬 발현데이터를 모으고, 시각화하는 데이터베이스입니다.
          <Divider />
        </Container>
      </Segment>
    </>
  );
}

export default Intro;

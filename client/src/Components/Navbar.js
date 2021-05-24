import React from "react";
import { Menu, Container, Message } from "semantic-ui-react";

function Navbar() {
  return (
    <Menu fluid borderless>
      <Container text>
        <Message 
            header="Welcome!"
            content="This is make a call app."
            success
             />
      </Container>
    </Menu>
  );
}

export default Navbar;

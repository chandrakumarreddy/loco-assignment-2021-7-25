import React from "react";
import { Container, Nav, Logo, Wrapper } from "./Layout.css";

interface IProps {}

const Layout: React.FC = ({ children }: React.PropsWithChildren<IProps>) => {
  return (
    <Container>
      <Nav>
        <Logo src="/images/logo.png" width="auto" height="32px" />
      </Nav>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default Layout;

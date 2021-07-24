import React from "react";
import { Container, Nav, Logo } from "./Layout.css";

interface IProps {}

const Layout: React.FC = ({ children }: React.PropsWithChildren<IProps>) => {
  return (
    <Container>
      <Nav>
        <Logo src="/images/logo.png" width="auto" height="32px" />
      </Nav>
      {children}
    </Container>
  );
};

export default Layout;

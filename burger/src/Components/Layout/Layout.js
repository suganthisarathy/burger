import React from "react";
import Aux from "../hoc/Aux";
import styled from "styled-components";
import Toolbar from "../Navigation/Toolbar/Toolbar"
//import SideDrawer from "../Navigation/SideDrawer/SideDrawer"

const Content =styled.div`
  margin-top: 96px;`

const layout = props => (
  <Aux>
    {/* <div>Toolbar,SideDrawer,BackDrop</div> */}
    <Content>
    <Toolbar/>
    {/*<SideDrawer/>*/}
    {props.children}
    </Content>
  </Aux>
);
export default layout;

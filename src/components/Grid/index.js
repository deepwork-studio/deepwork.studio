import React from "react";
import { Box } from "rebass";
import styled from "styled-components";

const StyledGrid = styled(Box).attrs({
  p: [4, 5]
})`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  min-height: 100vh;
`;

const Grid = props => <StyledGrid {...props} />;

export default Grid;

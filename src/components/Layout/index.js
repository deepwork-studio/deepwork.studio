/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { Box } from "rebass";

import "modern-normalize";
import "typeface-libre-franklin";
import "./fonts.css";

import Theme from "../Theme";

const Layout = ({ children }) => (
  <Theme>
    <Box as="main" css={{ overflowX: "hidden" }}>
      {children}
    </Box>
  </Theme>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

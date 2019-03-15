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

import Theme from "../Theme";

import { useSiteMetadata } from "../../hooks";

const Layout = ({ children }) => {
  const { title } = useSiteMetadata();

  return (
    <Theme>
      <>
        <Box as="main">{children}</Box>
      </>
    </Theme>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;

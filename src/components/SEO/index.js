/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import { useSiteMetadata } from "../../hooks";

const SEO = ({ description, lang, meta, title }) => {
  const siteMetadata = useSiteMetadata();

  const metaDescription = description || siteMetadata.description;

  const schemaOrgWebPage = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deep Work Studio",
    url: "https://deepwork.studio",
    sameAs: [
      "https://twitter.com/deepwork_studio",
      "https://www.linkedin.com/company/deep-work-studio/about/",
      "https://github.com/deepwork-studio/"
    ]
  };

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      defaultTitle={siteMetadata.longTitle}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    >
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgWebPage)}
      </script>
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: []
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired
};

export default SEO;

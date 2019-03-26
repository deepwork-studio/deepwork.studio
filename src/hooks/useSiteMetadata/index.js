import { useStaticQuery, graphql } from "gatsby";

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            longTitle
            description
            author
          }
        }
      }
    `
  );
  return site.siteMetadata;
};

export default useSiteMetadata;

import React from "react";
import { Heading, Box, Flex, Text, Link as RebassLink } from "rebass";
import { css } from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Partners from "../components/Partners";

const Container = props => (
  <Box
    {...props}
    mx="auto"
    css={{
      maxWidth: 960
    }}
  />
);

const Grid = props => (
  <Box
    {...props}
    css={css`
      display: grid;
      grid-template-rows: 100vh;
      grid-auto-rows: 50vh;
      align-items: center;
    `}
  />
);

const ColoredPanel = () => (
  <Box
    bg="tertiary"
    css={css`
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 200vh;
      z-index: -1;
      /* background-image: radial-gradient(
        farthest-side circle at bottom left,
        #f87998,
        #fdc67e
      ); */
      border-radius: 0.5em;

      display: none;
      @media only screen and (min-width: 52em) {
        display: block;
      }
    `}
  />
);

const Link = props => (
  <RebassLink
    fontSize={3}
    color="text"
    css={css`
      font-family: Sneak, sans-serif;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    `}
    {...props}
  />
);

const Wordmark = ({ primary, secondary }) => (
  <Text
    fontWeight={900}
    letterSpacing={0.44}
    fontSize={32}
    fontFamily="libreFranklin"
    color={primary}
  >
    DeepWork.
    <Text as="span" color={secondary}>
      Studio
    </Text>
  </Text>
);

const Paragraph = props => (
  <Text as="p" fontSize={3} color="text" fontFamily="sneak" {...props} />
);

const IndexPage = () => (
  <Layout>
    <SEO />

    <Container>
      <Grid>
        <Box as="section" px={3}>
          <Wordmark primary="primary" secondary="secondary" />
          <Heading
            as="h1"
            fontFamily="sneak"
            fontWeight="black"
            color="text"
            fontSize={[5, 6]}
            lineHeight={1.5}
            css={{ maxWidth: 720 }}
            mt={4}
          >
            Releasing User-Focused Blockchain Products
          </Heading>
          {/* <Box mt={4}>
            <custom-style>
              <style>{css`
                #custom-noticeable-widget {
                  --noticeable-widget-trigger-badge: {
                    margin-left: 8px;
                  }
                  --noticeable-widget-trigger: {
                    display: flex;
                    align-items: center;
                  }
                }
              `}</style>
            </custom-style>
            <noticeable-widget
              id="custom-noticeable-widget"
              access-token="IjSWYgreqMe4eyO1mIBt"
              project-id="W7wKrH7u2YyOQSuGEDWz"
              popup-backdrop="false"
            >
              <Link title="What's New">What's New</Link>
            </noticeable-widget>
          </Box> */}
        </Box>

        <Box as="section" px={3}>
          <Flex justifyContent="flex-end">
            <Box
              width={["100%", null, "65%"]}
              pl={[0, null, 5]}
              pb={[0, null, 5]}
              css={{ position: "relative" }}
            >
              <ColoredPanel />
              <Paragraph mb={0} lineHeight={1.5}>
                We are a team of cross-functional{" "}
                <Text as="span" fontWeight="black" color="experts">
                  experts
                </Text>{" "}
                condensing years of{" "}
                <Text as="span" fontWeight="black" color="productDesign">
                  product design
                </Text>{" "}
                and{" "}
                <Text as="span" fontWeight="black" color="ux">
                  UX
                </Text>{" "}
                experience into delightful deliverables to teams like{" "}
                <Text as="span" fontWeight="black">
                  <Partners />
                </Text>
                .
              </Paragraph>
            </Box>
          </Flex>
        </Box>

        <Box as="section" px={3}>
          <Heading
            as="h2"
            fontFamily="sneak"
            fontWeight="black"
            color="text"
            fontSize={[5, 6]}
            lineHeight={1.2}
            mb={4}
          >
            Say Hello
          </Heading>
          <Flex flexDirection={["column", "row"]}>
            <Link mb={[3, 0]} mr={[0, 4]} href="mailto:hey@deepwork.studio">
              hey@deepwork.studio
            </Link>
            <Link
              mb={[3, 0]}
              mr={[0, 4]}
              href="https://twitter.com/deepwork_studio"
            >
              @deepwork_studio
            </Link>
            <Link href="https://www.notion.so/deepworkstudio/Deep-Work-Studio-94bc13aa5776490281a86188986c431e">
              Meet the team on Notion
            </Link>
          </Flex>
          <Flex flexDirection={["column", "row"]} mt={[3, 4]}>
            <Link
              mb={[3, 0]}
              mr={[0, 4]}
              href="https://github.com/deepwork-studio/"
            >
              GitHub
            </Link>
            <Link mb={[3, 0]} href="https://medium.com/deep-work-studio">
              Medium
            </Link>
          </Flex>
        </Box>
      </Grid>
    </Container>
  </Layout>
);

export default IndexPage;

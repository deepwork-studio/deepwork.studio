import React from "react";
import { Heading, Box, Flex, Text, Link as RebassLink } from "rebass";
import { css } from "styled-components";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const Container = props => (
  <Box
    {...props}
    mx="auto"
    css={{
      maxWidth: 960
    }}
  />
);

const ColoredPanel = () => (
  <Box
    css={css`
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100vw;
      height: 200vh;
      z-index: -1;
      background-image: radial-gradient(
        farthest-side circle at bottom left,
        #f87998,
        #fdc67e
      );
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
    color="black"
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
    fontWeight="black"
    letterSpacing={0.44}
    fontSize={32}
    fontFamily="libreFranklin"
    color={["black", null, primary]}
  >
    DeepWork.
    <Text as="span" color={["black", null, secondary]}>
      Studio
    </Text>
  </Text>
);

const Paragraph = props => (
  <Text as="p" fontSize={3} fontFamily="sneak" {...props} />
);

const IndexPage = () => (
  <Layout>
    <SEO />

    <Container>
      <Box as="section" my={["25vh", null, "35vh"]} px={3}>
        <Wordmark primary="#FF9487" secondary="#FF7395" />
        <Heading
          as="h1"
          fontFamily="sneak"
          fontWeight="black"
          fontSize={[5, 6]}
          lineHeight={1.5}
          css={{ maxWidth: 720 }}
          mt={4}
        >
          Releasing User-Focused Blockchain Products
        </Heading>
      </Box>

      <Flex
        as="section"
        justifyContent="flex-end"
        my={["25vh", null, "35vh"]}
        px={3}
      >
        <Box
          width={["100%", null, "65%"]}
          pl={[0, null, 5]}
          pb={[0, null, 5]}
          css={{ position: "relative" }}
        >
          <ColoredPanel />
          <Paragraph mb={0} lineHeight={1.5}>
            We are a team of cross-functional experts condensing years of
            product design and UX experience into delightful deliverables to
            teams like you.
          </Paragraph>
        </Box>
      </Flex>

      <Box as="section" my={["25vh", null, "35vh"]} px={3}>
        <Heading
          as="h2"
          fontFamily="sneak"
          fontWeight="black"
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
          {/* <Link href="">Meet the team on Notion</Link> */}
        </Flex>
      </Box>
    </Container>
  </Layout>
);

export default IndexPage;

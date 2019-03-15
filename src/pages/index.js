import React from "react";
import { Heading, Box, Text, Link } from "rebass";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Grid from "../components/Grid";

const IndexPage = () => (
  <Layout>
    <SEO />

    <Grid>
      <Box>
        <Heading as="h1">deep work studio</Heading>
      </Box>
      <Box css={{ justifySelf: "flex-end" }}>
        <Link href="https://twitter.com/deepwork_studio">twitter</Link>
      </Box>
      <Box alignSelf="center" css={{ gridColumn: "span 2" }}>
        <Text as="p">your blockchain product design partner</Text>
        <Text as="p">
          we make the bad <Text as="s">man</Text> css go away
        </Text>
      </Box>
      <Box alignSelf="flex-end">
        <Text as="p">interested?</Text>
        <Link href="mailto:hey@deepwork.studio">contact us</Link>
      </Box>
    </Grid>
  </Layout>
);

export default IndexPage;

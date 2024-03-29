import { Box, Text, Flex, Image, Container } from 'theme-ui';
import React from 'react';
import { Link, ExtLink } from 'components/link';
import BlockTitle from 'components/block-title';
import ctaTwoImage from 'assets/mms-banner-img.png';

const CtaTwo = () => {
  return (
    <Box as="section" sx={styles.ctaTwo}>
      <Container>
        <Flex sx={styles.ctaTwo.row}>
          <Box sx={styles.ctaTwo.col}>
            <Image
              src={ctaTwoImage}
              sx={styles.ctaTwo.img}
              alt="cta two image"
            />
          </Box>
          <Box sx={styles.ctaTwo.col}>
            <Box sx={styles.ctaTwo.content}>
              <BlockTitle
                sx={styles.ctaTwo.blockTitle}
                tagline="Music school of the future"
                heading={`Nigeria's leading \n music education \n solution providers`}
              />
              <Text as="p" sx={styles.ctaTwo.text}>
                {
                  'Founded in 2013 by a group of music reformists, MAC center has so far been a pacesetter and light bearer in the study and trainig of music as a discipline and as a lucrative means of livelihood in Nigeria and Africa as a whole.'
                }
              </Text>
              <ExtLink
                path="https://mms-admin.vercel.app/register"
                label="Get Started"
                variant="buttons.primary"
              />
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default CtaTwo;

const styles = {
  ctaTwo: {
    paddingBottom: '100px',
    '@media(min-width: 1200px)': {
      paddingTop: '100px',
    },
    '@media(max-width:1024px)': {
      paddingBottom: 80,
    },
    row: {
      flexWrap: 'wrap',
    },
    col: {
      flex: '0 0 50%',
      '@media(max-width:1024px)': {
        flex: '0 0 100%',
      },
    },
    img: {
      maxWidth: 'none',
      // position: 'relative',
      // right: '100px',
      // bottom: '45px',
      '@media(max-width:1024px)': {
        maxWidth: '100%',
        right: 'auto',
        bottom: 'auto',
      },
    },
    content: {
      paddingLeft: '114px',
      '@media(max-width:1024px)': {
        paddingLeft: 0,
        maxWidth: 475,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      },
      '@media(max-width:575px)': {
        maxWidth: '91%',
      },
    },
    blockTitle: {
      marginBottom: [20, null, null, 30],

      h3: {
        fontSize: ['24px', null, null, '36px', null, '48px'],
        lineHeight: 1.15,
        letterSpacing: ['0', null, null, '0'],
        whiteSpace: ['normal', null, null, null, null, 'pre-line'],
      },
    },
    text: {
      fontSize: [15, null, null, 18],
      lineHeight: 2.33,
      color: 'black',
      marginBottom: 25,
      mb: [20, null, null, null, null],
      whiteSpace: ['normal', null, null, null, 'pre-line'],
    },
  },
};

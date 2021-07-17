/** @jsx jsx */
import { jsx, Box, Container, Grid } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';
import Image from 'components/image';
import messenger from 'assets/images/messenger.png';
import emoji from 'assets/images/icons/emoji.png';
import BlockTitle from 'components/block-title';

const data = [
  {
    title: 'Lorem ipsum dolor sit amet ?',
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi
        sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    ),
  },
  {
    title: 'Lorem ipsum dolor sit amet ?',
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi
        sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    ),
  },
  {
    title: 'Lorem ipsum dolor sit amet ?',
    contents: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi
        sapien, Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    ),
  },
];

const PremiumFeature = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <Grid sx={styles.grid}>
          <Box as="figure" sx={styles.illustration}>
            <Image src={messenger} alt="messenger" />
          </Box>
          <Box sx={styles.rightContent}>
            <BlockTitle
              sx={styles.ctaTwo.blockTitle}
              tagline="Frequent questions"
              heading={'Some of Our Frequenty asked \n questions'}
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data} />
            </Box>
          </Box>
        </Grid>
      </Container>
    </section>
  );
};

export default PremiumFeature;

const styles = {
  section: {
    pt: [6, null, null, 6, 8, 9],
    pb: [6, null, null, null, 7, 9, 11, null],
  },
  grid: {
    alignItems: 'center',
    gridTemplateColumns: [
      '1fr',
      null,
      null,
      null,
      '1fr 431px',
      '1fr 530px',
      '1fr 550px',
    ],
  },
  ctaTwo: {
    blockTitle: {
      marginBottom: [20, null, null, 30],

      h3: {
        fontSize: ['24px', null, null, '36px', null, '48px'],
        lineHeight: 1.15,
        letterSpacing: ['-0.5px', null, null, '-1.5px'],
        whiteSpace: ['normal', null, null, null, null, 'pre-line'],
      },
    },
  },
  heading: {
    textAlign: ['left', null, null, 'center', 'left'],
    ml: [null, null, null, 'auto'],
    maxWidth: [null, null, null, 520, 660],
    h2: {
      fontSize: [null, null, null, 10, 8, 10, 40],
      img: {
        maxWidth: [24, null, null, 30, 25, null, '100%'],
        top: ['4px', '8px', null, null, '4px', '8px'],
      },
    },
    p: {
      fontSize: [null, null, null, 2],
    },
  },
  illustration: {
    mb: [0, null, null, 0, 0],
  },
  accordionGroup: {
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 600, 'none'],
  },
};

import { Box, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import PopularCard from 'components/popular-card';

const popularCourseData = [
  {
    title: 'Piano for Toddler and older stage 1, 2 and 3  ',
    description: 'Ready to start your first piano lessons?',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '2,538 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content: 'Easy ways to learn the notes',
      },
      {
        content: "It's all about the Fingers!",
      },
      {
        content: "Hi, Let's meet the Note Family",
      },
      {
        content: "Let's work on our Fingers(Finger Strengthening)",
      },
    ],
  },
  {
    title: 'Guitar Courses for Intermediate students',
    description:
      'A guitar is a six stringed instrument with frets, which are the horizontal bars across the fingerboard used to denote separate musical notes.',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '2,538 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content:
          'Identify string names and numbers and read music notation, tablature,chord block diagrams, and fretboard maps',
      },
      {
        content: 'Practice picking, finger picking, and strumming patterns',
      },
      {
        content:
          'Play various chords including major and minor triads,open, Barre and pose chords',
      },
      {
        content: 'Read and play a lead sheet',
      },
    ],
  },
  {
    title: 'Violin for Guerrilla and Advanced courses',
    description: '',
    reviewCount: '5.0 (392 reviews)',
    watchCount: '2,538 students watched',
    videoLink: 'L9jU-IIN0ng',
    starCount: 5,
    expanded: true,
    list: [
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
      {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
      },
    ],
  },
];

const PopularCourse = () => {
  return (
    <Box as="section" id="courses" sx={styles.popularCourse}>
      <Container>
        <BlockTitle
          sx={styles.popularCourse.blockTitle}
          tagline="Quality features"
          heading="Online courses coming soon"
        />
        {popularCourseData.map((course, index) => (
          <Box sx={styles.popularCourse.col} key={index}>
            <PopularCard
              key={index}
              listData={course.list}
              expanded={course.expanded}
              starCount={course.starCount}
              title={course.title}
              reviewCount={course.reviewCount}
              watchCount={course.watchCount}
              videoLink={course.videoLink}
              description={course.description}
            />
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default PopularCourse;

const styles = {
  popularCourse: {
    paddingBottom: ['100px'],
    '@media(max-width: 575px)': {
      paddingBottom: '60px',
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '60px',
      '@media(max-width: 575px)': {
        marginBottom: '30px',
      },
    },
    col: {},
  },
};

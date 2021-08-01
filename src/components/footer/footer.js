/** @jsx jsx */
import { jsx, Flex, Box, Text, Container } from 'theme-ui';
import { rgba } from 'polished';
import { Link } from 'components/link';
import Logo from 'components/logo';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const menuItems = [
  {
    path: 'banner',
    label: 'Home',
  },
  {
    path: 'courses',
    label: 'Courses',
  },
  {
    path: 'howItWorks',
    label: 'How It Works',
  },
  {
    path: 'faq',
    label: 'Faq',
  },
];

export default function Footer() {
  return (
    <Box as="footer" sx={styles.footer}>
      <Container>
        <Flex sx={styles.footerInner}>
          <Flex sx={styles.copyright}>
            <Logo isWhite />
            <Text as="span">
              &copy; Copyright by {new Date().getFullYear()} Mac Music School
            </Text>
          </Flex>
          <Flex as="ul" sx={styles.copyright}>
            {/* {menuItems?.map((item, index) => (
              <li key={index}>
                <ScrollLink
                  activeClass="active"
                  sx={styles.nav.navLink}
                  to={item.path}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  key={index}
                >
                  {item.label}
                </ScrollLink>
              </li>
            ))} */}

            <Text as="span">
              For more details, contact us at JJ's Kiddies City Creche and
              Pre-school, Garba Ali Close, Guzape. 08095190656
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}

const styles = {
  nav: {
    mx: 'auto',
    '@media screen and (max-width: 991px)': {
      display: 'none',
    },
    navLink: {
      fontSize: '16px',
      color: '#02073E',
      fontWeight: '400',
      cursor: 'pointer',
      lineHeight: '1.2',
      mr: '48px',
      transition: '500ms',
      ':last-child': {
        mr: '0',
      },
      '&:hover, &.active': {
        color: 'primary',
      },
    },
  },
  footer: {
    backgroundColor: '#2B293E',
    pt: [4],
    pb: [4],
  },
  footerInner: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: ['column', null, null, null, 'row'],
  },
  copyright: {
    alignItems: 'center',
    flexDirection: ['column', null, null, null, 'row'],
    span: {
      color: rgba('white', 0.7),
      fontSize: 1,
      lineHeight: '18px',
      ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
  },
  footerNav: {
    listStyle: 'none',
    // flexDirection: ['column', null, null, null, 'row'],
    m: ['25px 0 0', null, null, null, 0],
    span: {
      color: rgba('white', 0.7),
      fontSize: 1,
      lineHeight: '18px',
      ml: [null, null, null, null, 3],
      mt: [3, null, null, null, 0],
    },
    p: 0,
    li: {
      '+ li': {
        ml: [3, null, null, null, 4],
      },
      a: {
        color: 'white',
        cursor: 'pointer',
        textDecoration: 'none',
        fontSize: [1, null, null, 2],
      },
    },
  },
};

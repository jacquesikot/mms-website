import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import { VideoProvider } from 'contexts/video/video.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Modal from 'components/modal';
import BannerAlt from 'sections/bannerAlt';
import CtaOne from 'sections/cta-one';
import CtaTwo from 'sections/cta-two';
import WorkFlow from 'sections/workflow';
import Pricing from 'sections/pricing';
import PopularCourse from 'sections/popular-course';
import CtaThree from 'sections/cta-three';
import PremiumFeature from 'sections/premium-feature';
import { Carousel } from 'react-responsive-carousel';

import bg1 from '../assets/images/bg-1.jpg';
import bg2 from '../assets/images/bg-2.jpg';
import bg3 from '../assets/images/bg-3.jpg';

import bg4 from '../assets/images/bn1.jpeg';
import bg5 from '../assets/images/bn2.jpeg';
import bg6 from '../assets/images/bn3.jpeg';
import bg7 from '../assets/images/bn4.jpeg';
import bg8 from '../assets/images/bn5.jpeg';
import bg9 from '../assets/images/bn6.jpeg';
import bg10 from '../assets/images/bn7.jpeg';
import bg11 from '../assets/images/bn8.jpeg';
import bg12 from '../assets/images/bn9.jpeg';
import bg13 from '../assets/images/bn10.jpeg';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <VideoProvider>
          <Layout>
            <SEO
              description="Mac Music School Online Academy"
              title="Mac Music School"
            />
            <Carousel
              autoPlay
              infiniteLoop
              emulateTouch
              swipeable
              showStatus={false}
              interval={5000}
              showThumbs={false}
            >
              <BannerAlt
                bannerBg={bg1}
                text="MAC SCHOOL OF MUSIC is an organisation focused at raising minstrels through Excellence, Creativity and Dedication."
              />
              <BannerAlt
                bannerBg={bg2}
                text="MSM aims to reach every country in every continent of the world through music."
              />
              <BannerAlt
                bannerBg={bg4}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg5}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg6}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg7}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg8}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg9}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg10}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg11}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg12}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
              <BannerAlt
                bannerBg={bg13}
                text="Summer 2021 with MAC MUSIC SCHOOL"
                button
              />
            </Carousel>
            <CtaTwo />
            <CtaThree />
            <PopularCourse />
            <WorkFlow />
            {/* <Pricing /> */}
            <PremiumFeature />
            <CtaOne />
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}

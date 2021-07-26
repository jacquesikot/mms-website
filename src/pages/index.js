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
                text="An environment designed to raise minstrels in the creative and
              entertainment industry to subdue nations of the world through
              music."
              />
              <BannerAlt
                bannerBg={bg2}
                text="MAC SCHOOL OF MUSIC is an organisation focused at raising minstrels through Excellence, Creativity and Dedication. MSM aims to reach every country in every continent of the world through music."
              />
            </Carousel>
            <CtaTwo />
            <CtaThree />
            <PopularCourse />
            <WorkFlow />
            <Pricing />
            <PremiumFeature />
            <CtaOne />
            <Modal />
          </Layout>
        </VideoProvider>
      </StickyProvider>
    </ThemeProvider>
  );
}

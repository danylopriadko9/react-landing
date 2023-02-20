import React from 'react';
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from './HeroSectionElements';
import Video from '../../videos/video.mp4';
import { Button } from '../ButtonElement';

const HeroSection: React.FC = (): JSX.Element => {
  const [hover, setHover] = React.useState<boolean>(false);

  const onHover = () => {
    setHover((prev) => !prev);
  };

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sigh up for a new account today and receive $250 in credit towardays
          your nex payment.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary={true}
            dark={true}
            dark2={true}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;

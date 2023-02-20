import React from 'react';
import { ISection } from '../../types/types';
import { Button } from '../ButtonElement';
import {
  BtnWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  InfoContainer,
  InfoRow,
  InfoWrapper,
  Subtitle,
  TextWrapper,
  TopLine,
} from './InfoSectionElements';

const InfoSection: React.FC<ISection> = ({
  lightBg,
  imgStart,
  id,
  topLine,
  lightText,
  headline,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  dark,
  dark2,
  primary,
}): JSX.Element => {
  return (
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrapper>
                <Button
                  primary={primary}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  dark={dark}
                  dark2={dark2}
                  to='home'
                >
                  {buttonLabel}
                </Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Img src={img} alt={alt} />
            </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;

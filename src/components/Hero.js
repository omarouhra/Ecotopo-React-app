import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components/macro";
import Button from "../components/Button";
import "aos/dist/aos.css";

const Section = styled.section`
  height: 1000px;
  width: 100%;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 1000px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 700px) {
    gap: 4rem;
  }
  @media screen and (min-width: 1400px) {
    max-width: 1400px;
    margin: 0 auto;
  }
`;

const ColumnLeft = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  z-index: 100;
  h1 {
    font-size: 40px;
    font-weight: lighter;
    line-height: 122.5%;
    margin-bottom: 2rem;
  }

  @media screen and (min-width: 1000px) {
    width: 50%;
    height: 100%;
    h1 {
      width: 70%;
    }
  }
  @media screen and (min-width: 1200px) {
    h1 {
      width: 80%;
      font-size: 55px;
    }
  }
`;

const ContentLeft = styled.div`
  height: auto;
  width: 100%;
`;

const ColumnRight = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1000px) {
    width: 50%;
    height: 100%;
  }
`;

const HeroSlide = styled.div`
  z-index: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const HeroSlider = styled.div`
  position: absolute;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeroImage = styled.img`
  position: absolute;
  right: 0;
  width: 100%;
  background-size: center;
  object-fit: contain;
  opacity: 0.8;
  @media screen and (min-width: 1000px) {
    width: 60%;
    height: 100%;
  }
`;

const Hero = ({ slides, titles }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent(current => (current === length - 1 ? 0 : current + 1));
    };
    timeout.current = setTimeout(nextSlide, 4000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Section id='Hero'>
      <Container>
        <ColumnLeft>
          {titles.map((title, index) => {
            return (
              <ContentLeft key={index}>
                {index === current && (
                  <h1>
                    Expertise, Compétence et Innovation au service{" "}
                    <span data-aos='fade-in'>{title.title}</span>{" "}
                  </h1>
                )}
              </ContentLeft>
            );
          })}
          <Button smooth to='#Banner'>
            Suivre votre projet
          </Button>
        </ColumnLeft>

        <ColumnRight>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage
                      data-aos='zoom-out'
                      src={slide.image}
                      alt={slide.alt}
                    />
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;

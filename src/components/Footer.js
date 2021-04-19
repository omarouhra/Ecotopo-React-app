import React from "react";
import styled from "styled-components";
import logo from "../images/logo.png";

const Section = styled.section`
  width: 100%;
  height: 100%;
  background-color: #fff8f4;
  padding-top : 4rem ;
  padding-left:2rem;
  padding-right: 2rem;
  padding-bottom:1rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: grey;
    font-weight: 900;
    transition: 0.2s ease-in-out;

    :hover {
      color: #ffd2b9;
    }
  }
  span {
    transition: 0.2s ease-in-out;

    :hover {
      transform: translateX(3px);
    }
  }
  @media screen and (min-width: 1200px) {
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
  }
`;

const ColumnLeft = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 0;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
const LeftContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
  p {
    font-size: 18px;
    font-weight: 500;
    color: black;
    font-family: "open sans";
  }
  @media (min-width: 1000px) {
    p {
      font-size: 40px;
    }
  }
`;
const RightContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  margin: 2rem 0;
  img {
    margin-bottom: 1rem;
    width: 45px;
  }
  p {
    width: 100%;
    font-size: 18px;
    font-family: "open sans";
    color: black;
    font-weight: 400;
    margin-top: 10px;
  }
  a {
    span {
      position: absolute;
      animation: position 1s infinite;
      margin-top: 3px;
      @keyframes position {
        0% {
          transform: translateX(2px);
        }
        50% {
          transform: translateX(10px);
        }
        100% {
          transform: translateX(2px);
        }
      }
    }
  }

  @media (min-width: 1000px) {
    margin-left: 4rem;
    p {
      font-size: 20px;
    }
  }
`;

const CopyRights = styled.div`
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  p {
    font-size: 18px;
    font-weight: 300;
    color: black;
  }
  img {
    max-height: 50px;
    position: relative;
    top: -1rem;
  }

  @media (min-width: 1000px) {
    p {
      font-size: 20px;
    }
  }
`;
const Footer = () => {
  return (
    <Section id="Contact">
      <Container>
        <ColumnLeft>
          <LeftContent data-aos="fade-in">
            <p>
              Communiquez votre Besoin à notre équipe qui est toujours à
              l'écoute!
            </p>
          </LeftContent>
          <RightContent
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <p>+212 528 21 19 19</p>
            <p>ecotopo@gmail.com</p>
            <p>
              Agadir, Bloc 15 Cité Al Farha{" "}
              <a href="https://www.google.com/maps/place/%D9%85%D9%83%D8%AA%D8%A8+%D8%B1%D9%81%D9%8A%D9%82+%D9%84%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9+%D8%A7%D9%84%D8%B7%D8%A8%D9%88%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9%E2%80%AD/@30.4247155,-9.5778998,236m/data=!3m1!1e3!4m12!1m6!3m5!1s0xdb3b7df8e8f490b:0xce5ad097fa7a49fb!2z2YXZg9iq2Kgg2LHZgdmK2YIg2YTZhNmH2YbYr9iz2Kkg2KfZhNi32KjZiNi62LHYp9mB2YrYqQ!8m2!3d30.42538!4d-9.5778535!3m4!1s0xdb3b7df8e8f490b:0xce5ad097fa7a49fb!8m2!3d30.42538!4d-9.5778535">
                localisation <span> &gt; </span>
              </a>
            </p>
            <p>
              Visitez notre page{"  "}
              <a href="https://www.facebook.com/pages/category/Corporate-Office/%D9%85%D9%83%D8%AA%D8%A8-%D8%B1%D9%81%D9%8A%D9%82-%D9%84%D9%84%D9%87%D9%86%D8%AF%D8%B3%D8%A9-%D8%A7%D9%84%D8%B7%D8%A8%D9%88%D8%BA%D8%B1%D8%A7%D9%81%D9%8A%D8%A9-1583473581919673/">
                 Facebook  <span> &gt; </span>
              </a>
            </p>
          </RightContent>
        </ColumnLeft>
        <CopyRights>
          <img src={logo} alt="EcoTopo" />
          <p>
            Created by
            <a href="https://www.instagram.com/omar.code/">
              @omar.code <span> &gt; </span>
            </a>
          </p>
        </CopyRights>
      </Container>
    </Section>
  );
};

export default Footer;

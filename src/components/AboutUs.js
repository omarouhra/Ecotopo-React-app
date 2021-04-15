import React from 'react'
import styled from 'styled-components';
import CeoData from '../data/CeoData'



const Section = styled.section`
    width: 100%;
    height: 100%;
    padding : 4rem  2rem ;

     
`;

const Container = styled.div`
    display : flex ;
    flex-direction: column;
    justify-content :center;
    align-items :center;

    @media screen and (min-width:1000px){
        flex-direction:row;
       
    }

    @media screen and (min-width :1200px){
        max-width : 1200px ;
        margin:0 auto;
    }
`;
const ColumnLeft = styled.div`
    height: auto;
    display:none;
    @media screen and (min-width:1000px){
        display:block;
        width:50%;

    }

`;

const ColumnRight = styled.div`
    width: 100% ;
    height: 100%;
    display : flex;
    flex-direction: column;
    justify-content :center;
    align-items : center;
    

    h1{
        font-size : 25px;
        font-weight: 900;

    }
    h2{
        font-size : 14px;
        color: #757676;
        font-weight:lighter;
        font-family: 'open sans';
        margin-top:2vh;
        text-align:center;
    }
    p{
        font-size : 16px;
        font-weight: lighter;
        font-style : italic; 
        font-family: 'open sans';
        line-height: 197%;
        margin-top:3rem;
        width:100%;
        max-width:400px;
        text-align:center;

    }

    span{
        font-family: 'open sans';
        font-style: italic;
        font-weight: bold;

    }
    img{
        width: 100%;
        max-width:400px;
        height: auto;
        margin-bottom: 4rem;
    }
    @media screen and (min-width:1000px){
        width:50%;
        align-items :start;
        p{
            text-align:start;
            max-width:100%
        }
        img{
            width: 200px;
            margin-bottom:2rem
        }

    }

`;



const AboutUs = () => {
    return (
        <Section id="Acceuil">
            <Container>
                <ColumnLeft data-aos='fade-right' data-aos-duration="1000">
                    <img src={CeoData.image} alt="infoSection" />
                </ColumnLeft>
                <ColumnRight data-aos='fade-left' data-aos-duration="1000" data-aos-delay="300">
                        <img src={CeoData.CeoImg} alt="Ceo" />
                        <h1>{ CeoData.CeoName }</h1>
                        <h2>{ CeoData.Status }</h2>
                        <p>
                         {CeoData.CeoWord}
                        </p>
                </ColumnRight>
            </Container>
        </Section>
    )
};

export default AboutUs

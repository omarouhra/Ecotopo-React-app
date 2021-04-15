import React from 'react'
import styled from 'styled-components';
import ServiceData from '../data/ServiceData';
import Button from '../components/Button';

const Section = styled.section`
    width: 100%;
    height: 120%;
    padding : 6rem  2rem ;  
`;
const Container = styled.div`
    display : flex ;
    gap:2rem;
    flex-direction: column;
    justify-content :center;
    align-items :center;

    @media screen and (min-width:1000px){
        flex-direction: row;
    }
    @media screen and (min-width:1200px){
        max-width :1200px;
        margin : 0 auto;
    }
`;

const ColumnLeft = styled.div`
    width: 100% ;
    height: 100%;
    display : flex;
    justify-content :center;
    align-items :center;
    margin : 2rem  0 ;
    @media screen and (min-width:1000px){
        order:2;
    }

`;

const ColumnRight = styled.div`
    width: 100% ;
    max-width:700px;
    height: 100%;
    display : flex;
    flex-direction: column;
    justify-content :center;
    align-items : center;

    @media screen and (min-width:1000px){
        align-items :start;
    }
   
   


    h2{
        font-size:30px;
        line-height:163.5%;
        margin-bottom:2rem;
    }
    p{
        font-size:16px;
        font-weight:lighter;
        line-height:163.5%;
        margin-bottom:4rem;
    
    }
`;

const List = styled.div`
    height:100%;
    max-height:100px;
    width: 100% ;
    display : grid;
    grid-template-columns: auto auto;
    margin-bottom:100px;

    h3{
        font-size:16px;
        margin-top: 5px;
    }

    @media screen and (min-width:1000px){
       h3{
           font-size:20px;
           margin-bottom:1rem;
       }
    }
`;

const Services = () => {
    return (
        <Section id="Services">
            <Container>
                <ColumnLeft data-aos='fade-left' data-aos-duration="1000" data-aos-delay="300">
                    <img src={ ServiceData.image} alt="Services"/>
                </ColumnLeft>
                <ColumnRight data-aos='fade-right' data-aos-duration="1000" >
                    <h2>{ ServiceData.title }</h2>
                    <p>{ServiceData.paragraph}</p>
                    <List>
                        {ServiceData.ServiceList.map(service => {
                            return (
                                <h3>{service}</h3>
                            )
                        })}

                    </List>
                    <Button smooth to="#Contact">
                        Contactez nous!
                    </Button>

                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Services

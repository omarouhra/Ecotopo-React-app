import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    width : 100%;
    margin: 2rem 0;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: ${({ margin }) => (margin ? '5rem' : '0rem')};
   
    

    img{
        width:350px;
        margin-bottom:3rem;
        transition:all ease-in-out 0.3s ;

        :hover{
            width:360px;
        }
    }
    h1{
        font-size: 30px;
        font-weight: 900;
        margin-bottom:2rem
    }
    p{
        font-size:18px;
        font-weight:lighter;
        line-height:148%;
        width:100%;
        text-align:center;
        max-width:500px;
    }

    @media screen and (min-width:1000px){
        align-items: start;
        p{
            text-align:start;
            width:100%;
        }
    

    }
    
`;
const Project = ({image,title,description ,margin}) => {
    return (
        <Container data-aos="fade-up" data-aos-duration="1000" margin={margin}>
            <img src={image} alt="" />
            <h1>{ title }</h1>
            <p>{description}</p>
        </Container>
    )
}

export default Project

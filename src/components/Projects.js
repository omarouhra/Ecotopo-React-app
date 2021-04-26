import React from 'react'
import styled from 'styled-components';
import Project from './Project';
import ProjectData from '../data/ProjectData';


const Section = styled.section`
    height : 100%;
    width : 100%;
    display : flex ;
    flex-direction:column;
    justify-content : center;
    align-items : center;
    padding : 4rem  2rem ;

    h1{
        font-size:40px;
        font-weight:700;
    }
    

`;

const Container = styled.div`
    width:100%;
    margin:0 auto;
    display : flex ;
    flex-direction:column;
    justify-content : center;
    align-items : center;
    

    @media screen and (min-width :1000px){
        align-items:start;
    
    }
    @media screen and (min-width :1200px){

        max-width:1200px;
        margin:0 auto;
    
    }
    


`;
const ProjectContainer = styled.div`
    width:100%;
    display : flex ;
    flex-direction:column;
    justify-content : center;
    gap:15%;


    @media screen and (min-width :1000px){
    flex-direction: row;
    
    }



`;

const SectionTitle = styled.p`
        width:100%;
        font-size:40px;
        font-weight:500;
        margin-bottom:3rem;
        text-align:center;
    @media screen and (min-width :1000px){
        max-width:1000px;
        text-align:start;

    
    }


`;

const Projects = () => {
    return (
        <Section id="Projets">

            <Container>
                <SectionTitle>Nos Projets</SectionTitle>

                <ProjectContainer>

                    <Project image={ProjectData.image} title={ProjectData.title} description={ProjectData.description} />
                    <Project image={ProjectData.image1} title={ ProjectData.title1 } description={ ProjectData.description1 } margin='true'/>
                </ProjectContainer>       
            </Container>
            
        </Section>
    )
}

export default Projects

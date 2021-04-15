import React from 'react'
import styled from 'styled-components';
import ProcessData from '../data/ProcessData'


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
    gap:5rem;
    @media (min-width:1000px){
        flex-direction: row;
    }
    @media screen and (min-width:1200px){
        max-width:1200px;
        margin:0 auto;
    }
`;

const ColumnLeft = styled.div`
    width: 100% ;
    height: 100%;
    display : flex;
    justify-content :center;
    align-items :center;
    margin : 2rem  0 ;
    
    p{
        font-size:25px;
        font-weight: lighter;
        line-height:163.5%;
        margin-bottom:3rem;
        width:100%;
    }
    @media (min-width:1000px){
        width:50%;
        p{
            font-size:35px;
        }
    }

`;

const ColumnRight = styled.div`
    width: 100% ;
    height: 100%;
    display : flex;
    flex-direction: column;
    justify-content :center;
    align-items : center;
    @media (min-width:1000px){
        width:50%;
       
    }

`;

const ListContainer = styled.div`
    height:100%;
    max-height:500px;
    width: 100% ;
    display : grid;
    grid-gap:5px;
    grid-template-columns: 1fr 1fr;

    h3{
        font-size:20px;
        margin-bottom:1rem;
        border-bottom: 1px solid black;
        width:50px;

    }
`;

const ListContent = styled.div`
    width:100%;
    display: block;
    margin-bottom:25px;

    p{
        font-size:18px;
        margin-bottom:10px;
        font-weight:lighter;
    }

`;




const Process = () => {
    return (
        <Section>
            <Container>
                <ColumnLeft data-aos='fade-in' data-aos-duration="2000">
                    <p>{ ProcessData.paragraph }</p>
                </ColumnLeft>
                <ColumnRight data-aos='fade-left' data-aos-duration="1000" data-aos-delay="300">
                    <ListContainer>
                        <ListContent>
                            <h3>{ProcessData.titles[0]}</h3>
                                {ProcessData.List1.map((item,index) => {
                                    return (
                                        <p>{ item }</p>
                                    );
                                })}
                        </ListContent>
                        <ListContent>
                            <h3>{ProcessData.titles[1]}</h3>
                                {ProcessData.List2.map((item,index) => {
                                    return (
                                        <p>{ item }</p>
                                    );
                                })}
                        </ListContent>
                        <ListContent>
                            <h3>{ProcessData.titles[2]}</h3>
                                {ProcessData.List3.map((item,index) => {
                                    return (
                                        <p>{ item }</p>
                                    );
                                })}
                        </ListContent>
                        <ListContent>
                            <h3>{ProcessData.titles[3]}</h3>
                                {ProcessData.List4.map((item,index) => {
                                    return (
                                        <p>{ item }</p>
                                    );
                                })}
                        </ListContent>
                        


                    </ListContainer>

                </ColumnRight>
            </Container>    
        </Section>
    )
}

export default Process

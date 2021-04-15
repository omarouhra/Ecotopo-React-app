import React from 'react';
import styled from 'styled-components';
import banner from '../images/banner.png';


const Section = styled.section`
    width: 100%;
    height: auto;
    padding : 4rem  2rem ;  
`;
const Container = styled.div`
    display : flex ;
    flex-direction: column;
    justify-content :center;
    align-items :center;
    @media screen and (min-width:1200px){
        max-width:1200px;
        margin:0 auto;
    }

    img{
        width: 100%;
        height: auto;
    }
`;

const Feature = styled.div`
    padding : 4rem  2rem ;  
    height:auto;
    width: 80%;
    margin:0 auto;
    position:relative;
    top:-40px;
    background-color:white;
    display: flex;
    justify-content:space-around;
    align-items:center;
    flex-direction: column;
    h2{
        font-size:16px;
        font-weight:lighter;
        margin-top:10px;
    }
    input{
        border: none;
        border-bottom: 2px solid grey;
        margin-top:20px;
    }

    @media screen and (min-width:1000px){
        flex-direction: row;
        h2{
            font-size:20px
        }
    }
`;
const LeftContent = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
 

    
`;
const RightContent = styled.div`

`;


const Banner = () => {
    return (
        <Section id="Banner">
            <Container>
                <img src={banner} alt="Topographie" />
                <Feature>
                    <LeftContent>
                        <h2>Suivre votre projet :</h2>
                        <input type="text" valeur="Entrer votre CIN" placeholder="ENTREZ VOTRE CIN" /><br></br>
                        <button>valider</button>

                    </LeftContent>
                    <RightContent>
                        <h2>Nom :</h2>
                        <h2>Status :</h2>
                    </RightContent>

                </Feature>
            </Container>
            
        </Section>
    )
}

export default Banner

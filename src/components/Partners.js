import React from 'react';
import styled from 'styled-components/macro';



const PartnersContainers = styled.section`
    width: 50%;
    height: 200px;
    display : flex ;
    justify-content : space-between;
    margin : 0 auto;
    overflow : hidden;
    @media screen and (max-width :1200px){
        width:80%;
    
    }
    @media screen and (max-width :768px){
        width:80%;
    
    }
    
`;

const PartnerContainer = styled.div`
    width: 25%;
    height: 100%;
    display : flex ;
    justify-content :center;
    align-items : center;
    @media screen and (max-width :1200px){
    
    }

`;

const PartnersImage = styled.img`
    width: auto;
    height: auto;
    object-fit:cover;
    background-position : center;
    background-size: contain;
    @media screen and (max-width :1200px){
        width:50%;
    
    }
    @media screen and (max-width :768px){
        width:80%;
    
    }

`;

function Partners( {partners}) {
    return (
        <PartnersContainers>
            {partners.map((partner) => {
                return (
                    <PartnerContainer>
                        <PartnersImage src={partner.image} />
                     </PartnerContainer>
                 )
             })}

        </PartnersContainers>
    )
}

export default Partners

import React from 'react';
import styled from 'styled-components';
import ServiceData from '../data/ServiceData';




const ServiceList = () => {
    return (
        <Section>
            {ServiceData.map((ListLeft) => {
                return (
                    <h2>{ListLeft}</h2>
                )
            })}
        </Section>
    )
}

export default ServiceList

import FrontLayout from 'layout/FrontLayout';
import HeaderComp from 'components/HeaderComp';
import React from 'react'
import styled from 'styled-components';

const FacilitiesPage = () => {
    return (
        <FrontLayout>
            <Wrapper>
            <div>
            <HeaderComp />
          </div>
       </Wrapper>
        </FrontLayout>
    )
}

export default FacilitiesPage;


const Wrapper = styled.div``;
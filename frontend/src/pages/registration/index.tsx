import React from 'react'
import RegistrationComp from 'components/registration/RegistrationComp'
import HeaderComp from 'components/HeaderComp'
import FooterComp from 'components/FooterComp'
import styled from 'styled-components'


const index = () => {
    return (
        <Wrapper className='registrationpage'>
            <HeaderComp/>
           <RegistrationComp/> 
           <FooterComp/>
        </Wrapper>
    )
}

export default index;

const Wrapper = styled.div ``; 

import React from 'react'
import styled from 'styled-components';
function Footer() {
    return (
        <StyledFooter>
            SOPT 29th WEB
        </StyledFooter>
    )
}
const StyledFooter = styled.div`
    font-weight: bold;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    color: rgb(129, 107, 255);
    background-color: rgb(240, 237, 255);
`;
export default Footer

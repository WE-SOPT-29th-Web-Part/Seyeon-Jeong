import React from 'react'
import styled from 'styled-components';
function Layout({children}) {
    return (
        <StyledLayout>
            {children}
        </StyledLayout>
    )
}
const StyledLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;
export default Layout

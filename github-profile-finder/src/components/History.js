import React from 'react'
import styled from 'styled-components';
function History({history}) {

    console.log(history)
    return (
        <StyledHistory>
            <div className="history-wrapper">
                {history.map(e =>
                    <div className="his">{e}</div>
                )}
            </div>
        </StyledHistory>
    )
}
const StyledHistory = styled.div`
    .history-wrapper{
        width: 100%;
        background-color: gray;
        border-radius: 5px;
    }
    .his{
        width: 100%;
        color: white;
        background-color: gray;
        border-radius: 5px;
        padding: 5px;
    }
`;
export default History

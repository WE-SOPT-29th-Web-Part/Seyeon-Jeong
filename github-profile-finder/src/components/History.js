import React from 'react'
import styled from 'styled-components';
function History({history, setHistory,getUser}) {

    const handleDelete = (i) =>{
        const newHistory = history.filter((e,index) => index !==i);
        localStorage.setItem('history',newHistory)
        setHistory(newHistory);
    }
    const handleSearch = (userId) =>{
        getUser(userId);
    }
    return (
        <StyledHistory>
            <div className="history-wrapper">
                {history?.map((e,i) =>
                    <div className="history" key={i}>
                        <span className="input" onClick={()=>handleSearch(e)}>{e}</span>
                        <button className="delete" onClick={()=>handleDelete(i)}>X</button>
                    </div>
                )}
            </div>
        </StyledHistory>
    )
}
const StyledHistory = styled.div`
    .history-wrapper{
        width: 100%;
        background-color: transparent;
        border-radius: 5px;
    }
    .history{
        width: 100%;
        color: white;
        background-color: gray;
        border-radius: 5px;
        padding: 5px;
        margin-top: 2px;
    }
    .input{
        font-size: 0.9rem;
        font-weight: bold;
        cursor: pointer;
    }
    .delete{
        float: right;
        border-radius: 5px;
        border: none;
        cursor: pointer;
    }
`;
export default History

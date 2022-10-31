import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;

    input, select {
        padding: 10px;
        border-radius: 5px;
        font-size: 14px;
        border: 1px solid #A9A9A9;
    }

    button {
        font-weight: 500;
        font-size: 18px;
        background-color: #0000FF;
        border: 1px solid #DCDCDC;
        border-radius: 5px;
        color: #FFF;
        cursor: pointer;
    }

    button:hover{
        opacity: 0.8;
    }
`;
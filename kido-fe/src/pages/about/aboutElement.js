import styled from "styled-components";

export const Container = styled.div`
    background: white;
    height:50vh;
    justify-content: center;
`;

export const Intro = styled.div`
    display:flex;
    justify-content: center;
    
    background: green;
    padding: 2% 2% ;
`;

export const Div = styled.div`
    background:blue;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    p{
        color: yellow;
        padding: 1% 2%
    }
    
`;

export const Title = styled.div`
    display: flex;
    justify-content: center;

    h1{
        color: orange;
    }
`;

export const StyledButton = styled.nav`
    display:flex;
    margin: 2vw;
    padding: 2% 5%;
    justify-content:center;
    border: solid;
    border-width: 2px;
    border-color: white;
    background-color: orange;
    color:white;
`;

export const HeroImage = styled.img`
    color: brown;
    height:100%;
    width: 375px;
    max-width: 100%;
    background: white;
    margin: 1%;
`;

export const TeamDiv = styled.div`
    color:brown;
    display: flex;
    justify-content: center;
`
export const TName = styled.div`
    color: white;
`
export const Tinfo = styled.div`
    color: white;
`
export const Timg = styled.img`
    color: white;
`
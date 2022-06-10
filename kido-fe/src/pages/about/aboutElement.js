import styled from "styled-components";

export const Container = styled.div`
    background: white;
    height:50vh;
    justify-content: center;
`;

export const Hero = styled.header`
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
    padding: 2% 15%;
    justify-content:center;
    border: dotted;
    border-color: green;
`;

export const HeroImage = styled.div`
    color: brown;
    height:100%;
    background: white;
    margin: 1%;
`;
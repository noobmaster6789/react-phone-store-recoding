import styled from 'styled-components';
export const ButtonContainer = styled.button`
    text-transform:capitalize;
    font-size:1.43rem;
    background: transparent;
    border: 0.1rem solid var(--mainWhite);
    border-color:${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
    color:${props => props.cart ? "var(--mainYellow)" : "#0300d3ed"}; 
    border-radius: 0.5rem;
    padding: 0.2rem 0.5rem;
    cursor: pointer;
    margin: 0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
    background:${prop => prop.cart ? "var(--mainYellow)": "#ffc107"};
    color: var(--mainBlue);
    }
    &:focus{
    outline:none;
    }
`;

import styled from 'styled-components'


export const Button = styled.button`
    width: 15.6rem;
    border-radius: 3px;
    padding: 5px;
    cursor: pointer;
    
    background-color: transparent;
    font-weight: 600;
    border: 2.3px solid ${(props) => props.theme['green-light']};

    @media screen and (max-width: 845px) {
       width: 20rem;
       padding: 10px;
    }
`


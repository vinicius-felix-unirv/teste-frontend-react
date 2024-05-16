import styled from 'styled-components'

export const ContainerInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 8px;
    /* margin-bottom: .5rem; */

    & label{
        font-weight: 500;
        color: ${(props) => props.theme['green-dark']};
    }

    & input{
        border: none;
        outline: none;

        width: 15.6rem;
        border-radius: 3px;
        padding: 5px 10px;

        background-color: ${(props) => props.theme['gray-dark']};
        color: ${(props) => props.theme['white']};
    }

    & ::placeholder{
        text-align: center;
        color: ${(props) => props.theme['white']};
    }
`
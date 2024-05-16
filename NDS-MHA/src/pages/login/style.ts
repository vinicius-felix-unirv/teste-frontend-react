import styled from 'styled-components'

export const Background = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    background-color: ${(props) => props.theme['gray-light']};

    & footer{
        position: absolute;
        bottom: 0;
    }
`

export const Container = styled.div`
    padding: 6rem 2rem;

    background-color: ${(props) => props.theme['white']};
`

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 3rem;

    font-size: 35px;
    font-weight: 600;

    color: ${(props) => props.theme['green-dark']};
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    
    width: 50rem;
`

export const ContentLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-right: 3.5px solid ${(props) => props.theme['green-dark']};
    width: 100%;

    & img{
        width: 21.9rem;
    }
`

export const ContentRight = styled.div`
    display: flex;  
    align-items: center;
    justify-content: center;

    width: 100%;

    & form{
        display: flex;
        flex-direction: column;
        align-items: end;
    }
`

export const Inputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    margin-bottom: 1.5rem;
`

export const Alternatives = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 15.6rem;
    margin-top: 1rem;

    font-size: 14px;
    font-weight: 500;
    color: ${(props) => props.theme['gray-dark']};

    & p{
        cursor: pointer;
    }
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-bottom: .5rem;

    font-size: 12px;
    color: ${(props) => props.theme['green-dark']}
`